// Sistema de gerenciamento do jogo "A Trilha do DNA" - VERSÃO COMPLETA E APRIMORADA

class DNAGameManager {
  constructor() {
    this.state = {
      players: [],
      currentPlayerIndex: 0,
      phase: 'setup', // setup, playing, gameover
      turnCount: 0,
      gameStartTime: null,
      decks: {
        concept: [...CONCEPT_CARDS],
        challenge: [...CHALLENGE_CARDS],
        resource: []
      },
      discards: {
        concept: [],
        challenge: [],
        resource: []
      },
      log: [],
      tutorialShown: {},
      achievements: [],
      statistics: {
        questionsAsked: 0,
        questionsCorrect: 0,
        resourcesCollected: 0,
        missionsCompleted: 0,
        challengesEncountered: 0
      }
    };

    this.soundEnabled = this.loadSoundPreference();
    this.initializeResourceDeck();
    this.loadSavedGame();
  }

  // ==================== SISTEMA DE SALVAMENTO ====================

  loadSoundPreference() {
    const saved = localStorage.getItem('dna_game_sound_enabled');
    return saved === null ? true : saved === 'true';
  }

  saveSoundPreference() {
    localStorage.setItem('dna_game_sound_enabled', this.soundEnabled.toString());
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveSoundPreference();
    this.playSound('click');
    return this.soundEnabled;
  }

  saveGame() {
    if (this.state.phase !== 'playing') return;

    try {
      const saveData = {
        state: this.state,
        timestamp: Date.now(),
        version: '1.0.0'
      };
      localStorage.setItem('dna_game_save', JSON.stringify(saveData));
      this.addLog('💾 Jogo salvo automaticamente', 'info');
    } catch (error) {
      console.error('Erro ao salvar jogo:', error);
    }
  }

  loadSavedGame() {
    try {
      const saved = localStorage.getItem('dna_game_save');
      if (saved) {
        const saveData = JSON.parse(saved);
        // Verificar se o save não está muito antigo (7 dias)
        const daysSinceSave = (Date.now() - saveData.timestamp) / (1000 * 60 * 60 * 24);
        if (daysSinceSave < 7) {
          return saveData;
        } else {
          this.clearSavedGame();
        }
      }
    } catch (error) {
      console.error('Erro ao carregar jogo salvo:', error);
    }
    return null;
  }

  restoreSavedGame(saveData) {
    this.state = saveData.state;
    this.addLog('📂 Jogo anterior carregado!', 'success');
  }

  clearSavedGame() {
    localStorage.removeItem('dna_game_save');
    this.addLog('🗑️ Jogo salvo apagado', 'info');
  }

  // ==================== SISTEMA DE SONS (EMOJI-BASED) ====================

  playSound(soundType) {
    if (!this.soundEnabled) return;

    const soundEmojis = {
      'dice_roll': '🎲',
      'card_draw': '🃏',
      'resource_gain': '✨',
      'mission_complete': '🎉',
      'challenge_fail': '💥',
      'victory': '🏆',
      'correct_answer': '✅',
      'wrong_answer': '❌',
      'achievement': '🏅',
      'click': '🔘'
    };

    const emoji = soundEmojis[soundType] || '🔔';

    // Visual feedback
    if (typeof window !== 'undefined' && window.showSoundEffect) {
      window.showSoundEffect(emoji);
    }
  }

  // ==================== SISTEMA DE CONQUISTAS ====================

  checkAchievements(player) {
    const newAchievements = [];

    // Primeira Descoberta
    if (!this.hasAchievement('first_mission')) {
      const missionsCompleted = Object.values(player.missions).filter(m => m).length;
      if (missionsCompleted >= 1) {
        newAchievements.push(this.unlockAchievement('first_mission'));
      }
    }

    // Nobel de Biotecnologia
    if (!this.hasAchievement('all_missions')) {
      const allMissions = Object.values(player.missions).every(m => m === true);
      if (allMissions) {
        newAchievements.push(this.unlockAchievement('all_missions'));
      }
    }

    // Colecionador
    if (!this.hasAchievement('resource_collector')) {
      if (player.resources.length >= 10) {
        newAchievements.push(this.unlockAchievement('resource_collector'));
      }
    }

    // Mestre do Conhecimento
    if (!this.hasAchievement('question_master')) {
      if (this.state.statistics.questionsCorrect >= 10) {
        newAchievements.push(this.unlockAchievement('question_master'));
      }
    }

    // Campeão da Ética
    if (!this.hasAchievement('ethics_champion')) {
      if (player.missions.bioethics) {
        newAchievements.push(this.unlockAchievement('ethics_champion'));
      }
    }

    // Cientista Relâmpago
    if (!this.hasAchievement('speed_runner')) {
      if (this.state.phase === 'gameover' && this.state.turnCount < 30) {
        newAchievements.push(this.unlockAchievement('speed_runner'));
      }
    }

    // Perfeição Científica
    if (!this.hasAchievement('perfect_game')) {
      if (this.state.phase === 'gameover' &&
          this.state.statistics.questionsAsked === this.state.statistics.questionsCorrect &&
          this.state.statistics.questionsAsked > 0) {
        newAchievements.push(this.unlockAchievement('perfect_game'));
      }
    }

    return newAchievements;
  }

  hasAchievement(achievementId) {
    return this.state.achievements.some(a => a.id === achievementId);
  }

  unlockAchievement(achievementId) {
    const achievement = GAME_CONFIG.achievements.find(a => a.id === achievementId);
    if (achievement && !this.hasAchievement(achievementId)) {
      this.state.achievements.push({
        ...achievement,
        unlockedAt: Date.now()
      });
      this.addLog(`🏅 Conquista desbloqueada: ${achievement.name}!`, 'achievement');
      this.playSound('achievement');
      return achievement;
    }
    return null;
  }

  // ==================== SISTEMA DE TUTORIAL ====================

  showTutorialTip(trigger) {
    if (this.state.tutorialShown[trigger]) return null;

    const tip = TUTORIAL_TIPS.find(t => t.trigger === trigger);
    if (tip) {
      this.state.tutorialShown[trigger] = true;
      return tip;
    }
    return null;
  }

  // ==================== INICIALIZAÇÃO DO JOGO ====================

  initializeResourceDeck() {
    // Criar deck de 60 cartas de recursos (distribuição balanceada)
    const distribution = {
      'plasmideo': 15,
      'enzima': 15,
      'pcr': 12,
      'agrobacterium': 10,
      'celula-tronco': 8
    };

    this.state.decks.resource = [];
    for (const [id, count] of Object.entries(distribution)) {
      const card = RESOURCE_CARDS.find(c => c.id === id);
      for (let i = 0; i < count; i++) {
        this.state.decks.resource.push({ ...card });
      }
    }

    this.shuffleDeck('resource');
  }

  shuffleDeck(deckType) {
    const deck = this.state.decks[deckType];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  setupGame(playerNames) {
    this.state.players = playerNames.map((name, index) => ({
      id: index,
      name: name,
      position: { zone: 'classic', space: 0 },
      resources: [],
      missions: {
        health: false,
        forensic: false,
        agriculture: false,
        bioethics: false
      },
      skipTurns: 0,
      statistics: {
        questionsAnswered: 0,
        questionsCorrect: 0,
        resourcesGained: 0,
        turnsPlayed: 0
      },
      color: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'][index]
    }));

    // Distribuir recurso inicial
    this.state.players.forEach(player => {
      const resource = this.drawCard('resource');
      if (resource) {
        player.resources.push(resource);
        player.statistics.resourcesGained++;
      }
    });

    this.state.phase = 'playing';
    this.state.gameStartTime = Date.now();
    this.shuffleDeck('concept');
    this.shuffleDeck('challenge');

    this.addLog('🎮 Jogo iniciado! Que vença o melhor cientista!');
    this.addLog(`🎲 É a vez de ${this.getCurrentPlayer().name}`);

    // Mostrar tutorial inicial
    this.showTutorialTip('game_start');

    // Auto-save
    this.saveGame();
  }

  getCurrentPlayer() {
    return this.state.players[this.state.currentPlayerIndex];
  }

  addLog(message, type = 'info') {
    this.state.log.unshift({ message, type, timestamp: Date.now() });
    if (this.state.log.length > 100) this.state.log.pop();
  }

  // ==================== SISTEMA DE CARTAS ====================

  drawCard(deckType) {
    if (this.state.decks[deckType].length === 0) {
      // Reembaralhar descarte se deck vazio
      if (this.state.discards[deckType].length > 0) {
        this.state.decks[deckType] = [...this.state.discards[deckType]];
        this.state.discards[deckType] = [];
        this.shuffleDeck(deckType);
        this.addLog(`🔄 Deck de ${deckType} reembaralhado`);
      } else {
        this.addLog(`⚠️ Deck de ${deckType} vazio!`, 'warning');
        return null;
      }
    }

    this.playSound('card_draw');
    return this.state.decks[deckType].pop();
  }

  discardCard(deckType, card) {
    this.state.discards[deckType].push(card);
  }

  // ==================== MOVIMENTO E DADOS ====================

  rollDice() {
    this.playSound('dice_roll');
    this.showTutorialTip('first_dice_roll');

    return [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
  }

  movePlayer(player, steps) {
    const currentZone = player.position.zone;
    const spaces = BOARD_SPACES[currentZone];

    if (currentZone === 'classic') {
      // No caminho clássico, movimento linear
      player.position.space += steps;

      if (player.position.space >= spaces.length - 1) {
        // Chegou ao Hub
        player.position.space = spaces.length - 1;
        this.addLog(`🎓 ${player.name} chegou à Universidade (Hub)!`, 'success');
        this.showTutorialTip('reached_hub');
      }
    } else if (currentZone === 'hub') {
      // No hub, não move, escolhe zona
      return 'choose_zone';
    } else {
      // Nas zonas de pesquisa
      player.position.space += steps;

      if (player.position.space >= spaces.length) {
        player.position.space = spaces.length - 1;
      }
    }

    return player.position;
  }

  getPlayerSpace(player) {
    const zone = player.position.zone;
    const spaces = BOARD_SPACES[zone];
    return spaces[player.position.space];
  }

  // ==================== EFEITOS DAS CASAS ====================

  async handleSpaceEffect(player, space) {
    switch (space.type) {
      case 'concept':
        return await this.handleConceptCard(player);

      case 'challenge':
        return await this.handleChallengeCard(player);

      case 'resource':
        return this.handleResourceCollect(player);

      case 'special':
        return this.handleSpecialSpace(player, space);

      case 'mission':
        return this.handleMissionSpace(player, space);

      case 'hub':
        return { type: 'choose_zone', message: 'Escolha uma zona de pesquisa para explorar' };

      default:
        return null;
    }
  }

  handleConceptCard(player) {
    const card = this.drawCard('concept');
    if (!card) return null;

    this.state.statistics.questionsAsked++;
    player.statistics.questionsAnswered++;
    this.showTutorialTip('first_concept_card');

    return {
      type: 'concept_question',
      card: card,
      player: player
    };
  }

  handleChallengeCard(player) {
    const card = this.drawCard('challenge');
    if (!card) return null;

    this.state.statistics.challengesEncountered++;
    this.showTutorialTip('first_challenge_card');

    return {
      type: 'challenge_card',
      card: card,
      player: player
    };
  }

  handleResourceCollect(player) {
    const resource = this.drawCard('resource');
    if (resource) {
      player.resources.push(resource);
      player.statistics.resourcesGained++;
      this.state.statistics.resourcesCollected++;
      this.addLog(`🎁 ${player.name} coletou: ${resource.name}`, 'success');
      this.playSound('resource_gain');
      this.showTutorialTip('first_resource');
      this.checkAchievements(player);
      return { type: 'resource_collected', resource: resource };
    }
    return null;
  }

  handleSpecialSpace(player, space) {
    switch (space.effect) {
      case 'advance3':
        this.addLog(`🚀 ${player.name} avançou 3 casas pela descoberta da Penicilina!`, 'success');
        this.movePlayer(player, 3);
        return { type: 'advance', spaces: 3 };

      case 'pcr_bonus':
        this.addLog(`🔬 ${player.name} está no Laboratório de PCR! Jogue os dados novamente!`, 'success');
        return { type: 'roll_again' };

      case 'agro_check':
        const hasPlaysmideo = player.resources.some(r => r.id === 'plasmideo');
        if (hasPlaysmideo) {
          // Buscar Agrobacterium do deck
          let foundAgro = false;
          for (let i = 0; i < this.state.decks.resource.length; i++) {
            if (this.state.decks.resource[i].id === 'agrobacterium') {
              const agro = this.state.decks.resource.splice(i, 1)[0];
              player.resources.push(agro);
              player.statistics.resourcesGained++;
              this.addLog(`🦠 ${player.name} coletou Agrobacterium!`, 'success');
              this.playSound('resource_gain');
              foundAgro = true;
              break;
            }
          }
          if (!foundAgro) {
            this.addLog(`⚠️ Não há Agrobacterium disponível no deck`, 'warning');
          }
        } else {
          this.addLog(`⚠️ ${player.name} precisa de um Plasmídeo para prosseguir aqui`, 'warning');
        }
        return { type: 'agro_check', has: hasPlaysmideo };

      case 'ethics_stop':
        this.addLog(`⚖️ ${player.name} deve responder uma questão de Bioética!`, 'warning');
        player.skipTurns = 1;
        return this.handleConceptCard(player); // Força pergunta de ética

      default:
        return null;
    }
  }

  handleMissionSpace(player, space) {
    this.showTutorialTip('first_mission_attempt');
    return {
      type: 'mission_check',
      mission: space.mission,
      player: player
    };
  }

  // ==================== PERGUNTAS E RESPOSTAS ====================

  answerConceptQuestion(player, card, answerIndex) {
    const correct = answerIndex === card.correct;

    if (correct) {
      this.state.statistics.questionsCorrect++;
      player.statistics.questionsCorrect++;

      // Recompensa baseada na dificuldade
      const difficulty = card.difficulty || 'medio';
      const rewardCount = GAME_CONFIG.difficultyLevels[difficulty].resourceReward;

      const resources = [];
      for (let i = 0; i < rewardCount; i++) {
        const resource = this.drawCard('resource');
        if (resource) {
          player.resources.push(resource);
          player.statistics.resourcesGained++;
          resources.push(resource);
        }
      }

      this.addLog(`✅ ${player.name} acertou! Coletou ${rewardCount} recurso(s)!`, 'success');
      this.playSound('correct_answer');
      this.checkAchievements(player);

      return { correct: true, resources: resources, funFact: card.funFact };
    } else {
      player.skipTurns = 1;
      this.addLog(`❌ ${player.name} errou! Perde a próxima rodada.`, 'error');
      this.playSound('wrong_answer');
      return { correct: false, correctAnswer: card.options[card.correct], explanation: card.explanation };
    }
  }

  // ==================== CARTAS DE DESAFIO (RECOMPENSAS/PENALIDADES) ====================

  applyChallengeCard(player, card, choice = null) {
    this.playSound('challenge_fail');

    // Log do título
    switch (card.effect) {
      case 'positive':
        this.addLog(`🎉 ${player.name}: ${card.title}`, 'success');
        break;
      case 'negative':
        this.addLog(`⚠️ ${player.name}: ${card.title}`, 'warning');
        break;
      case 'neutral':
        this.addLog(`ℹ️ ${player.name}: ${card.title}`, 'info');
        break;
    }

    // Aplicar recompensa/penalidade específica
    const result = { card: card, effects: [] };

    if (card.reward) {
      this.applyChallengeReward(player, card.reward, result);
    }

    if (card.penalty) {
      this.applyChallengePenalty(player, card.penalty, result);
    }

    this.discardCard('challenge', card);
    this.saveGame();

    return result;
  }

  applyChallengeReward(player, rewardType, result) {
    switch (rewardType) {
      case 'gain_2_resources':
        for (let i = 0; i < 2; i++) {
          const res = this.drawCard('resource');
          if (res) {
            player.resources.push(res);
            result.effects.push(`Ganhou: ${res.name}`);
          }
        }
        this.playSound('resource_gain');
        break;

      case 'gain_3_resources':
        for (let i = 0; i < 3; i++) {
          const res = this.drawCard('resource');
          if (res) {
            player.resources.push(res);
            result.effects.push(`Ganhou: ${res.name}`);
          }
        }
        this.playSound('resource_gain');
        break;

      case 'advance_4_and_roll_again':
        this.movePlayer(player, 4);
        result.effects.push('Avançou 4 casas');
        result.rollAgain = true;
        break;

      case 'advance_6':
        this.movePlayer(player, 6);
        result.effects.push('Avançou 6 casas');
        break;

      case 'complete_health_and_advance_5':
        // Só completa se tiver os recursos
        if (this.canCompleteMission(player, 'health').some(o => o.canDo)) {
          result.offerMissionComplete = 'health';
        }
        this.movePlayer(player, 5);
        result.effects.push('Avançou 5 casas');
        break;
    }
  }

  applyChallengePenalty(player, penaltyType, result) {
    switch (penaltyType) {
      case 'skip_1_turn_lose_stem_cell':
        player.skipTurns = 1;
        const stemCellIndex = player.resources.findIndex(r => r.id === 'celula-tronco');
        if (stemCellIndex !== -1) {
          player.resources.splice(stemCellIndex, 1);
          result.effects.push('Perdeu Célula-Tronco');
        }
        result.effects.push('Pula 1 turno');
        break;

      case 'skip_2_turns_lose_1_resource':
        player.skipTurns = 2;
        if (player.resources.length > 0) {
          player.resources.pop();
          result.effects.push('Perdeu 1 recurso');
        }
        result.effects.push('Pula 2 turnos');
        break;

      case 'lose_plasmid_enzyme_return_hub':
        const pIndex = player.resources.findIndex(r => r.id === 'plasmideo');
        const eIndex = player.resources.findIndex(r => r.id === 'enzima');
        if (pIndex !== -1) player.resources.splice(pIndex, 1);
        if (eIndex !== -1) player.resources.splice(eIndex, 1);
        this.returnToHub(player);
        result.effects.push('Perdeu Plasmídeo e Enzima, voltou ao Hub');
        break;

      case 'skip_3_turns_all_lose_1':
        player.skipTurns = 3;
        // Todos os jogadores perdem 1 recurso
        this.state.players.forEach(p => {
          if (p.resources.length > 0) {
            p.resources.pop();
          }
        });
        result.effects.push('Pula 3 turnos. TODOS os jogadores perderam 1 recurso!');
        break;

      case 'lose_2_any_resources':
        for (let i = 0; i < 2 && player.resources.length > 0; i++) {
          player.resources.pop();
        }
        result.effects.push('Perdeu 2 recursos');
        break;

      case 'back_5_skip_1':
        this.movePlayer(player, -5);
        player.skipTurns = 1;
        result.effects.push('Voltou 5 casas e pula 1 turno');
        break;
    }
  }

  // ==================== MISSÕES ====================

  canCompleteMission(player, missionType) {
    const mission = MISSION_REQUIREMENTS[missionType];
    const canComplete = [];

    for (const option of mission.options) {
      if (option.special) {
        // Missão especial de bioética
        canComplete.push({ option: option, canDo: true });
      } else {
        // Verifica recursos necessários
        const hasAll = option.resources.every(reqId =>
          player.resources.some(r => r.id === reqId)
        );
        canComplete.push({ option: option, canDo: hasAll });
      }
    }

    return canComplete;
  }

  completeMission(player, missionType, optionIndex) {
    const mission = MISSION_REQUIREMENTS[missionType];
    const option = mission.options[optionIndex];

    if (option.special !== 'answer_ethics_question') {
      // Remover recursos usados
      for (const reqId of option.resources) {
        const index = player.resources.findIndex(r => r.id === reqId);
        if (index !== -1) {
          player.resources.splice(index, 1);
        }
      }
    }

    player.missions[missionType] = true;
    this.state.statistics.missionsCompleted++;
    this.addLog(`🎯 ${player.name} completou a missão: ${option.name}!`, 'success');
    this.playSound('mission_complete');

    // Verificar conquistas
    this.checkAchievements(player);

    // Verificar vitória
    if (this.checkVictory(player)) {
      this.state.phase = 'gameover';
      this.addLog(`🏆 ${player.name} VENCEU O JOGO!`, 'success');
      this.playSound('victory');
      this.checkAchievements(player); // Conquistas finais
      this.saveGameStatistics();
      return { completed: true, victory: true };
    }

    this.saveGame();
    return { completed: true, victory: false };
  }

  checkVictory(player) {
    // Todas as 4 missões completas
    const allMissions = Object.values(player.missions).every(m => m === true);

    // E voltou ao início
    const atStart = player.position.zone === 'classic' && player.position.space === 0;

    return allMissions && atStart;
  }

  // ==================== NAVEGAÇÃO ====================

  changeZone(player, newZone) {
    if (newZone === 'hub') {
      player.position.zone = 'hub';
      player.position.space = 0;
    } else {
      player.position.zone = newZone;
      player.position.space = 0;
      this.addLog(`📍 ${player.name} entrou na ${GAME_CONFIG.zoneNames[newZone]}`, 'info');
    }
    this.saveGame();
  }

  returnToHub(player) {
    player.position.zone = 'classic';
    player.position.space = 8; // Hub position
    this.addLog(`🔙 ${player.name} retornou ao Hub`, 'info');
  }

  // ==================== TURNOS ====================

  nextTurn() {
    const currentPlayer = this.getCurrentPlayer();
    currentPlayer.statistics.turnsPlayed++;

    // Verificar se jogador deve pular turno
    if (currentPlayer.skipTurns > 0) {
      currentPlayer.skipTurns--;
      this.addLog(`⏭️ ${currentPlayer.name} pula este turno (pesquisa atrasada)`, 'warning');
    }

    // Próximo jogador
    this.state.currentPlayerIndex = (this.state.currentPlayerIndex + 1) % this.state.players.length;
    this.state.turnCount++;

    const nextPlayer = this.getCurrentPlayer();
    this.addLog(`🎲 É a vez de ${nextPlayer.name}`, 'info');

    // Auto-save a cada 5 turnos
    if (this.state.turnCount % 5 === 0) {
      this.saveGame();
    }
  }

  // ==================== ESTATÍSTICAS ====================

  saveGameStatistics() {
    const stats = {
      ...this.state.statistics,
      players: this.state.players.map(p => ({
        name: p.name,
        ...p.statistics,
        missionsCompleted: Object.values(p.missions).filter(m => m).length
      })),
      turnCount: this.state.turnCount,
      gameDuration: Date.now() - this.state.gameStartTime,
      achievements: this.state.achievements,
      completedAt: Date.now()
    };

    // Salvar histórico de partidas
    const history = JSON.parse(localStorage.getItem('dna_game_history') || '[]');
    history.unshift(stats);
    if (history.length > 10) history.pop(); // Manter últimas 10
    localStorage.setItem('dna_game_history', JSON.stringify(history));
  }

  getGameHistory() {
    return JSON.parse(localStorage.getItem('dna_game_history') || '[]');
  }

  // ==================== ESTADO DO JOGO ====================

  getGameState() {
    return {
      ...this.state,
      currentPlayer: this.getCurrentPlayer(),
      deckCounts: {
        concept: this.state.decks.concept.length,
        challenge: this.state.decks.challenge.length,
        resource: this.state.decks.resource.length
      }
    };
  }

  resetGame() {
    this.clearSavedGame();
    this.state = {
      players: [],
      currentPlayerIndex: 0,
      phase: 'setup',
      turnCount: 0,
      gameStartTime: null,
      decks: {
        concept: [...CONCEPT_CARDS],
        challenge: [...CHALLENGE_CARDS],
        resource: []
      },
      discards: {
        concept: [],
        challenge: [],
        resource: []
      },
      log: [],
      tutorialShown: {},
      achievements: [],
      statistics: {
        questionsAsked: 0,
        questionsCorrect: 0,
        resourcesCollected: 0,
        missionsCompleted: 0,
        challengesEncountered: 0
      }
    };
    this.initializeResourceDeck();
  }
}

// ==================== INSTÂNCIA GLOBAL ====================
let gameManager = new DNAGameManager();
