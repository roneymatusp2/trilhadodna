// Interface principal do jogo "A Trilha do DNA"

class DNAGameUI {
  constructor() {
    this.currentView = 'setup';
    this.selectedZone = null;
    this.pendingAction = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showSetupScreen();
  }

  setupEventListeners() {
    // Setup screen
    document.getElementById('startGameBtn')?.addEventListener('click', () => this.startGame());
    document.getElementById('addPlayerBtn')?.addEventListener('click', () => this.addPlayerField());

    // Game actions
    document.getElementById('rollDiceBtn')?.addEventListener('click', () => this.rollDice());
    document.getElementById('endTurnBtn')?.addEventListener('click', () => this.endTurn());
  }

  showSetupScreen() {
    document.getElementById('setupScreen').classList.remove('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.add('hidden');
  }

  addPlayerField() {
    const container = document.getElementById('playersContainer');
    const currentCount = container.querySelectorAll('input').length;
    
    if (currentCount >= 5) {
      this.showMessage('Máximo de 5 jogadores!', 'warning');
      return;
    }

    const div = document.createElement('div');
    div.className = 'player-input-group';
    div.innerHTML = `
      <input type="text" class="player-name-input" placeholder="Nome do Jogador ${currentCount + 1}" required>
      <button onclick="this.parentElement.remove()" class="btn-remove">✕</button>
    `;
    container.appendChild(div);
  }

  startGame() {
    const inputs = document.querySelectorAll('.player-name-input');
    const names = Array.from(inputs)
      .map(input => input.value.trim())
      .filter(name => name.length > 0);

    if (names.length < 2) {
      this.showMessage('Mínimo de 2 jogadores!', 'error');
      return;
    }

    if (names.length !== new Set(names).size) {
      this.showMessage('Nomes devem ser únicos!', 'error');
      return;
    }

    gameManager.setupGame(names);
    this.showGameScreen();
  }

  showGameScreen() {
    document.getElementById('setupScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    // Scroll imediato para o topo antes de atualizar UI
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    this.updateUI();
    
    // Após atualizar, garantir que tudo está visível
    setTimeout(() => {
      // Scroll suave para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Destacar o tabuleiro com animação
      const boardCard = document.querySelector('.board-card');
      if (boardCard) {
        boardCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        boardCard.style.animation = 'boardHighlight 2s ease-out';
      }
    }, 100);
  }

  updateUI() {
    const state = gameManager.getGameState();
    
    this.updateDashboard(state);
    this.updateBoard(state);
    this.updatePlayers(state);
    this.updateLog(state);
    this.updateControls(state);
  }

  updateDashboard(state) {
    const player = state.currentPlayer;
    
    document.getElementById('currentPlayerName').textContent = player.name;
    document.getElementById('currentPlayerColor').style.backgroundColor = player.color;
    
    const position = this.getPositionText(player.position);
    document.getElementById('currentPosition').textContent = position;
    
    // Missões
    const missionsHtml = Object.entries(MISSION_REQUIREMENTS).map(([key, mission]) => {
      const completed = player.missions[key];
      return `
        <div class="mission-item ${completed ? 'completed' : ''}">
          <span class="mission-icon">${mission.icon}</span>
          <span class="mission-name">${mission.name}</span>
          ${completed ? '<span class="check">✓</span>' : ''}
        </div>
      `;
    }).join('');
    
    document.getElementById('missionsList').innerHTML = missionsHtml;
    
    // Recursos
    const resourcesHtml = player.resources.map((r, idx) => `
      <div class="resource-card clickable-card" style="border-color: ${r.color}" data-card-id="${r.id}" data-card-type="resource" data-player-idx="${idx}">
        <div class="resource-icon">${r.icon}</div>
        <div class="resource-name">${r.name}</div>
        <div class="card-click-hint">👆 Clique para ver detalhes</div>
      </div>
    `).join('');

    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = resourcesHtml || '<p class="empty-state">Nenhum recurso</p>';

    // Adicionar event listeners para cartas de recurso
    if (resourcesHtml) {
      resourcesList.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('click', (e) => {
          const cardId = e.currentTarget.dataset.cardId;
          this.showCardDetails(cardId, 'resource');
        });
      });
    }
    
    // Deck info
    document.getElementById('conceptDeckCount').textContent = state.decks.concept.length;
    document.getElementById('challengeDeckCount').textContent = state.decks.challenge.length;
    document.getElementById('resourceDeckCount').textContent = state.decks.resource.length;
  }

  updateBoard(state) {
    const boardHtml = this.renderBoard(state);
    document.getElementById('gameBoard').innerHTML = boardHtml;
  }

  renderBoard(state) {
    let html = '<div class="board-container">';
    
    // Caminho Clássico
    html += '<div class="board-zone classic-zone">';
    html += '<h3 class="zone-title">🧬 Biotecnologia Clássica - Caminho Principal</h3>';
    html += '<div class="board-path">';
    
    BOARD_SPACES.classic.forEach((space, index) => {
      const playersHere = state.players.filter(p => 
        p.position.zone === 'classic' && p.position.space === index
      );
      html += this.renderSpace(space, playersHere);
    });
    
    html += '</div></div>';
    
    // Hub e Zonas de Pesquisa
    html += '<div class="research-zones">';
    
    ['health', 'forensic', 'agriculture', 'bioethics'].forEach(zoneName => {
      const zone = BOARD_SPACES[zoneName];
      const zoneConfig = MISSION_REQUIREMENTS[zoneName];
      
      html += `<div class="board-zone research-zone ${zoneName}-zone">`;
      html += `<h3 class="zone-title" style="color: ${zoneConfig.color}">`;
      html += `${zoneConfig.icon} ${GAME_CONFIG.zoneNames[zoneName]}</h3>`;
      html += '<div class="board-path">';
      
      zone.forEach((space, index) => {
        const playersHere = state.players.filter(p => 
          p.position.zone === zoneName && p.position.space === index
        );
        html += this.renderSpace(space, playersHere);
      });
      
      html += '</div></div>';
    });
    
    html += '</div>';
    html += '</div>';
    
    return html;
  }

  renderSpace(space, players) {
    const typeClass = `space-${space.type}`;
    let html = `<div class="board-space ${typeClass}" style="border-color: ${space.color}">`;
    
    html += `<div class="space-icon">${space.icon}</div>`;
    html += `<div class="space-name">${space.name}`;
    if (space.subname) html += `<br><small>${space.subname}</small>`;
    html += `</div>`;
    
    if (players.length > 0) {
      html += '<div class="space-players">';
      players.forEach(p => {
        html += `<div class="player-pawn" style="background: ${p.color}" title="${p.name}"></div>`;
      });
      html += '</div>';
    }
    
    html += '</div>';
    return html;
  }

  updatePlayers(state) {
    const html = state.players.map((player, index) => {
      const isCurrent = index === state.currentPlayerIndex;
      const missions = Object.values(player.missions).filter(m => m).length;
      
      return `
        <div class="player-card ${isCurrent ? 'current-player' : ''}" style="border-left: 4px solid ${player.color}">
          <div class="player-header">
            <span class="player-name">${player.name}</span>
            ${isCurrent ? '<span class="current-badge">🎲 Atual</span>' : ''}
          </div>
          <div class="player-stats">
            <span>🎯 Missões: ${missions}/4</span>
            <span>🧬 Recursos: ${player.resources.length}</span>
          </div>
          ${player.skipTurns > 0 ? '<div class="skip-notice">⏭️ Pula próximo turno</div>' : ''}
        </div>
      `;
    }).join('');
    
    document.getElementById('playersList').innerHTML = html;
  }

  updateLog(state) {
    const html = state.log.slice(0, 20).map(entry => {
      const typeClass = `log-${entry.type}`;
      return `<div class="log-entry ${typeClass}">${entry.message}</div>`;
    }).join('');
    
    document.getElementById('gameLog').innerHTML = html;
  }

  updateControls(state) {
    const player = state.currentPlayer;
    const canRoll = player.skipTurns === 0 && !this.pendingAction;
    
    document.getElementById('rollDiceBtn').disabled = !canRoll;
  }

  async rollDice() {
    const player = gameManager.getCurrentPlayer();
    
    if (player.skipTurns > 0) {
      this.showMessage('Você deve pular este turno!', 'warning');
      return;
    }

    const [dice1, dice2] = gameManager.rollDice();
    const total = dice1 + dice2;
    
    this.showDiceRoll(dice1, dice2);
    
    await this.sleep(1500);
    
    // Mover jogador
    const result = gameManager.movePlayer(player, total);
    
    if (result === 'choose_zone') {
      this.showZoneChoice(player);
      return;
    }
    
    this.updateUI();
    
    await this.sleep(500);
    
    // Executar efeito da casa
    const space = gameManager.getPlayerSpace(player);
    const effect = await gameManager.handleSpaceEffect(player, space);
    
    if (effect) {
      await this.handleEffect(effect);
    }
    
    this.updateUI();
  }

  async showDiceRoll(dice1, dice2) {
    const modal = document.getElementById('diceModal');
    const dice1El = document.getElementById('dice1Value');
    const dice2El = document.getElementById('dice2Value');
    const totalEl = document.getElementById('diceTotal');
    const totalContainer = totalEl.closest('.dice-total');

    // Resetar estados anteriores
    dice1El.className = 'dice-3d';
    dice2El.className = 'dice-3d';
    dice1El.style.transform = '';
    dice2El.style.transform = '';
    
    // Esconder total inicialmente
    if (totalContainer) {
      totalContainer.style.opacity = '0';
      totalContainer.style.transform = 'translateY(20px)';
    }
    totalEl.textContent = '?';

    // Mostrar modal
    modal.classList.remove('hidden');

    // FASE 1: Rolagem 3D intensa (1.5 segundos)
    dice1El.classList.add('dice-rolling');
    dice2El.classList.add('dice-rolling');

    // FASE 2: Parar com bounce 3D após 1.5s
    await this.sleep(1500);

    dice1El.classList.remove('dice-rolling');
    dice2El.classList.remove('dice-rolling');
    dice1El.classList.add('dice-bounce');
    dice2El.classList.add('dice-bounce');

    // Rotacionar dados para mostrar o número correto
    this.rotateDiceToNumber(dice1El, dice1);
    this.rotateDiceToNumber(dice2El, dice2);

    // FASE 3: Efeito final de destaque após bounce
    await this.sleep(800);

    dice1El.classList.remove('dice-bounce');
    dice2El.classList.remove('dice-bounce');
    dice1El.classList.add('dice-final');
    dice2El.classList.add('dice-final');

    // Mostrar total agora com animação
    totalEl.textContent = dice1 + dice2;
    if (totalContainer) {
      totalContainer.style.transition = 'all 0.5s ease-out';
      totalContainer.style.opacity = '1';
      totalContainer.style.transform = 'translateY(0)';
      totalEl.classList.add('total-highlight');
    }

    // Remover classes após animação
    setTimeout(() => {
      dice1El.classList.remove('dice-final');
      dice2El.classList.remove('dice-final');
      totalEl.classList.remove('total-highlight');
    }, 1000);

    // Fechar modal após 3.8 segundos total
    await this.sleep(1000);
    modal.classList.add('hidden');
    
    // Resetar opacidade do total para próxima vez
    if (totalContainer) {
      totalContainer.style.opacity = '';
      totalContainer.style.transform = '';
    }
  }

  rotateDiceToNumber(diceEl, number) {
    // Rotações para mostrar cada número na face frontal
    // Cada número está em uma face específica do cubo
    const rotations = {
      1: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',      // Front (1)
      2: 'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)',   // Bottom (2)
      3: 'rotateY(-90deg) rotateX(0deg) rotateZ(0deg)',    // Right (3)
      4: 'rotateY(90deg) rotateX(0deg) rotateZ(0deg)',     // Left (4)
      5: 'rotateX(90deg) rotateY(0deg) rotateZ(0deg)',     // Top (5)
      6: 'rotateX(180deg) rotateY(0deg) rotateZ(0deg)'     // Back (6)
    };
    
    diceEl.style.transform = rotations[number] || rotations[1];
    
    // Garantir que as faces tenham os valores corretos visíveis
    const faces = diceEl.querySelectorAll('.dice-face');
    if (faces.length === 6) {
      // As faces já têm data-value correto no HTML
      // Apenas garantimos que estão visíveis
      faces.forEach(face => {
        face.style.backfaceVisibility = 'visible';
      });
    }
  }

  async handleEffect(effect) {
    switch (effect.type) {
      case 'concept_question':
        await this.showConceptQuestion(effect.card, effect.player);
        break;
      
      case 'challenge_card':
        await this.showChallengeCard(effect.card, effect.player);
        break;
      
      case 'mission_check':
        await this.showMissionCheck(effect.mission, effect.player);
        break;
      
      case 'choose_zone':
        this.showZoneChoice(effect.player);
        break;
      
      case 'roll_again':
        this.showMessage('🎲 Jogue os dados novamente!', 'success');
        break;
    }
  }

  async showConceptQuestion(card, player) {
    return new Promise((resolve) => {
      const modal = document.getElementById('questionModal');
      document.getElementById('questionCategory').textContent = card.category;
      document.getElementById('questionText').textContent = card.question;
      
      const optionsHtml = card.options.map((option, index) => `
        <button class="option-btn" data-index="${index}">${option}</button>
      `).join('');
      
      document.getElementById('questionOptions').innerHTML = optionsHtml;
      
      const handler = (e) => {
        if (e.target.classList.contains('option-btn')) {
          const answerIndex = parseInt(e.target.dataset.index);
          const result = gameManager.answerConceptQuestion(player, card, answerIndex);
          
          if (result.correct) {
            e.target.classList.add('correct');
            this.showMessage(`✅ Correto! ${card.explanation}`, 'success');
          } else {
            e.target.classList.add('wrong');
            const correctBtn = document.querySelector(`[data-index="${card.correct}"]`);
            correctBtn.classList.add('correct');
            this.showMessage(`❌ Incorreto. ${card.explanation}`, 'error');
          }
          
          setTimeout(() => {
            modal.classList.add('hidden');
            document.getElementById('questionOptions').removeEventListener('click', handler);
            resolve();
          }, 2000);
        }
      };
      
      document.getElementById('questionOptions').addEventListener('click', handler);
      modal.classList.remove('hidden');
    });
  }

  async showChallengeCard(card, player) {
    return new Promise((resolve) => {
      const modal = document.getElementById('challengeModal');
      document.getElementById('challengeTitle').textContent = card.title;
      document.getElementById('challengeIcon').textContent = card.icon;
      document.getElementById('challengeDescription').textContent = card.description;
      document.getElementById('challengeAction').textContent = card.action;
      
      modal.classList.remove('hidden');
      
      gameManager.applyChallengeCard(player, card);
      
      document.getElementById('challengeOkBtn').onclick = () => {
        modal.classList.add('hidden');
        resolve();
      };
    });
  }

  async showMissionCheck(missionType, player) {
    const canComplete = gameManager.canCompleteMission(player, missionType);
    const mission = MISSION_REQUIREMENTS[missionType];
    
    return new Promise((resolve) => {
      const modal = document.getElementById('missionModal');
      document.getElementById('missionName').textContent = mission.name;
      document.getElementById('missionIcon').textContent = mission.icon;
      
      let optionsHtml = '<div class="mission-options">';
      
      canComplete.forEach((opt, index) => {
        const disabled = !opt.canDo ? 'disabled' : '';
        const resources = opt.option.resources.map(id => {
          const r = RESOURCE_CARDS.find(rc => rc.id === id);
          return `${r.icon} ${r.name}`;
        }).join(', ');
        
        optionsHtml += `
          <button class="mission-option-btn" data-index="${index}" ${disabled}>
            <div class="option-title">${opt.option.name}</div>
            <div class="option-resources">${resources || 'Responder pergunta de Bioética'}</div>
            ${!opt.canDo ? '<div class="option-missing">❌ Recursos insuficientes</div>' : ''}
          </button>
        `;
      });
      
      optionsHtml += '</div>';
      
      document.getElementById('missionOptions').innerHTML = optionsHtml;
      
      const handler = (e) => {
        if (e.target.closest('.mission-option-btn') && !e.target.closest('.mission-option-btn').disabled) {
          const btn = e.target.closest('.mission-option-btn');
          const index = parseInt(btn.dataset.index);
          
          const result = gameManager.completeMission(player, missionType, index);
          
          if (result.victory) {
            this.showGameOver(player);
          }
          
          modal.classList.add('hidden');
          document.getElementById('missionOptions').removeEventListener('click', handler);
          resolve();
        }
      };
      
      document.getElementById('missionOptions').addEventListener('click', handler);
      
      document.getElementById('missionCancelBtn').onclick = () => {
        modal.classList.add('hidden');
        resolve();
      };
      
      modal.classList.remove('hidden');
    });
  }

  showZoneChoice(player) {
    const modal = document.getElementById('zoneModal');
    const zonesHtml = ['health', 'forensic', 'agriculture', 'bioethics'].map(zone => {
      const config = MISSION_REQUIREMENTS[zone];
      const completed = player.missions[zone];
      
      return `
        <button class="zone-choice-btn ${completed ? 'completed' : ''}" data-zone="${zone}">
          <div class="zone-icon">${config.icon}</div>
          <div class="zone-name">${GAME_CONFIG.zoneNames[zone]}</div>
          ${completed ? '<div class="zone-check">✓</div>' : ''}
        </button>
      `;
    }).join('');
    
    document.getElementById('zoneChoices').innerHTML = zonesHtml;
    
    const handler = (e) => {
      if (e.target.closest('.zone-choice-btn')) {
        const btn = e.target.closest('.zone-choice-btn');
        const zone = btn.dataset.zone;
        gameManager.changeZone(player, zone);
        modal.classList.add('hidden');
        document.getElementById('zoneChoices').removeEventListener('click', handler);
        this.updateUI();
      }
    };
    
    document.getElementById('zoneChoices').addEventListener('click', handler);
    modal.classList.remove('hidden');
  }

  endTurn() {
    gameManager.nextTurn();
    this.pendingAction = null;
    this.updateUI();
  }

  showGameOver(winner) {
    document.getElementById('winnerName').textContent = winner.name;
    document.getElementById('winnerColor').style.backgroundColor = winner.color;
    document.getElementById('gameOverScreen').classList.remove('hidden');
    
    document.getElementById('newGameBtn').onclick = () => {
      location.reload();
    };
  }

  showMessage(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  getPositionText(position) {
    const zone = GAME_CONFIG.zoneNames[position.zone] || position.zone;
    const space = BOARD_SPACES[position.zone]?.[position.space];
    return space ? `${zone} - ${space.name}` : zone;
  }

  showCardDetails(cardId, cardType) {
    let card = null;
    let title = '';

    // Buscar a carta correta baseado no tipo
    if (cardType === 'resource') {
      card = RESOURCE_CARDS.find(c => c.id === cardId);
      title = `🧬 ${card.name}`;
    } else if (cardType === 'concept') {
      card = CONCEPT_CARDS.find(c => c.id === cardId);
      title = `❓ Carta de Conceito - ${card.category}`;
    } else if (cardType === 'challenge') {
      card = CHALLENGE_CARDS.find(c => c.id === cardId);
      title = `${card.icon} ${card.title}`;
    }

    if (!card) {
      console.error('Carta não encontrada:', cardId);
      return;
    }

    // Preencher o modal
    const modal = document.getElementById('cardDetailsModal');
    document.getElementById('cardDetailsIcon').textContent = card.icon || '🧬';
    document.getElementById('cardDetailsTitle').textContent = title;

    // Descrição
    let description = '';
    if (cardType === 'resource') {
      description = card.description || 'Recurso usado para completar missões de biotecnologia.';
    } else if (cardType === 'concept') {
      description = card.question || card.explanation || '';
    } else if (cardType === 'challenge') {
      description = card.description || '';
    }
    document.getElementById('cardDetailsDescription').textContent = description;

    // Uso no jogo
    let usage = '';
    if (cardType === 'resource') {
      usage = card.usage || `Este recurso pode ser usado em missões que requerem ${card.name}.`;
    } else if (cardType === 'concept') {
      usage = 'Responder corretamente cartas de conceito concede recursos baseados na dificuldade da pergunta.';
    } else if (cardType === 'challenge') {
      usage = card.action || 'Esta carta de desafio afeta o progresso do jogo.';
    }
    document.getElementById('cardDetailsUsage').textContent = usage;

    // Curiosidade científica (trivia)
    const triviaSection = document.getElementById('cardDetailsTriviaSection');
    if (card.trivia || card.funFact) {
      triviaSection.style.display = 'block';
      document.getElementById('cardDetailsTrivia').textContent = card.trivia || card.funFact;
    } else {
      triviaSection.style.display = 'none';
    }

    // Mostrar modal
    modal.classList.remove('hidden');

    // Event listener para fechar
    document.getElementById('cardDetailsCloseBtn').onclick = () => {
      modal.classList.add('hidden');
    };

    // Fechar ao clicar fora
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Inicializar quando o DOM estiver pronto
let gameUI;
document.addEventListener('DOMContentLoaded', () => {
  gameUI = new DNAGameUI();
});
