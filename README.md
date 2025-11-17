# 🧬 A Trilha do DNA

### Jogo de Tabuleiro Digital sobre Biotecnologia

**Da Fermentação à Engenharia Genética**

---

## 📚 Sobre o Jogo

"A Trilha do DNA" é um jogo educacional completo baseado no documento pedagógico da Oficina de Biotecnologia para Educação de Jovens e Adultos (EJA). O jogo simula o processo científico da biotecnologia moderna, desde a fermentação clássica até técnicas avançadas de engenharia genética.

### 🎯 Objetivos Educacionais

- Diferenciar Biotecnologia Clássica de Moderna
- Compreender aplicações práticas: Insulina, Testes de Paternidade, OGMs, Células-Tronco
- Identificar ferramentas da engenharia genética: DNA, Plasmídeos, Enzimas de Restrição, PCR
- Debater questões éticas e de biossegurança

---

## 🌐 URLs do Projeto

- **GitHub**: https://github.com/roneymatusp2/trilhadodna
- **Netlify**: (Configure após o deploy)
- **Desenvolvimento Local**: http://localhost:5173

---

## 🎮 Como Jogar

### Configuração
1. **Jogadores**: 2 a 5 cientistas
2. **Duração**: 30-60 minutos
3. **Objetivo**: Completar 4 missões de inovação e retornar ao início

### As 4 Missões

| Missão | Área | Recursos Necessários | Ícone |
|--------|------|---------------------|-------|
| **Terapia Celular / Insulina** | Saúde | Célula-Tronco OU Plasmídeo + Enzima | 💉 |
| **Teste de Paternidade** | Forense | PCR + Enzima de Restrição | 🔍 |
| **OGM Resistente** | Agricultura | Plasmídeo + Agrobacterium | 🌾 |
| **Relatório de Ética** | Bioética | Responder pergunta de bioética | ⚖️ |

### Mecânicas do Jogo

1. **Caminho Clássico**: Todos começam no caminho da Biotecnologia Clássica
2. **Hub Universitário**: Porta de entrada para as 4 zonas de pesquisa
3. **Coleta de Recursos**: Obtenha cartas respondendo perguntas ou em casas especiais
4. **Cartas de Conceito**: Perguntas sobre biotecnologia (acertou = ganha recurso)
5. **Cartas de Desafio**: Eventos que afetam o jogo (bons ou ruins)
6. **Casas Especiais**: Efeitos únicos (avance, jogue novamente, etc.)

---

## 🧬 Recursos do Jogo

### Cartas de Recurso

| Recurso | Descrição | Uso | Ícone |
|---------|-----------|-----|-------|
| **Plasmídeo** | Vetor de clonagem - "caminhãozinho" de DNA | Insulina, OGM | 🧬 |
| **Enzima de Restrição** | "Tesoura molecular" - corta DNA | Insulina, OGM, Teste | ✂️ |
| **PCR** | "Xerox do DNA" - amplifica amostras | Teste de Paternidade | 🔬 |
| **Agrobacterium** | Vetor de planta - "injeção" natural | OGM | 🦠 |
| **Célula-Tronco** | Célula "coringa" - pluripotente | Terapia Celular | 🧪 |

### Sistema de Cartas

- **40 Cartas de Conceito**: Perguntas de múltipla escolha (fácil/médio)
- **30 Cartas de Desafio**: Cenários e riscos (difícil)
- **60 Cartas de Recurso**: Ferramentas da biotecnologia

---

## 🗺️ Estrutura do Tabuleiro

### Caminho Clássico (Linear)
- Início: Prêmio Nobel 🏆
- Descoberta da Levedura 🍞
- Produção de Queijo 🧀
- Vacina de Pasteur 💉
- Descoberta da Penicilina 💊
- Universidade (Hub) 🎓

### 4 Zonas de Pesquisa

#### 🔴 Zona de Saúde (Vermelha)
- Laboratório de Insulina
- Cultura de Células-Tronco
- **Missão**: Terapia Celular / Insulina

#### 🔵 Zona Forense (Azul)
- Coleta de Amostras
- Laboratório de PCR
- Eletroforese
- **Missão**: Teste de Paternidade

#### 🟢 Zona de Agricultura (Verde)
- Banco de Genes
- Cultura de Tecidos
- Transformação com Agrobacterium
- **Missão**: OGM Resistente

#### 🟡 Zona de Bioética (Amarela)
- Debate sobre Clonagem
- Comitê de Biossegurança
- Princípio da Precaução
- **Missão**: Relatório de Ética

---

## 💻 Tecnologias Utilizadas

### Frontend
- **HTML5 / CSS3**: Interface responsiva
- **JavaScript (Vanilla)**: Lógica do jogo
- **Tailwind CSS (CDN)**: Estilos modernos
- **Animações CSS**: Feedback visual

### Backend
- **Hono Framework**: Web framework leve para Cloudflare
- **TypeScript**: Type safety
- **Cloudflare Pages**: Hospedagem edge

### DevOps
- **Vite**: Build tool
- **Wrangler**: CLI do Cloudflare
- **PM2**: Process manager
- **Git**: Controle de versão

---

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação Local

```bash
# Clone o repositório
git clone <repository-url>
cd webapp

# Instale dependências
npm install

# Build do projeto
npm run build

# Execute em desenvolvimento (sandbox)
npm run dev:sandbox

# Ou use PM2
pm2 start ecosystem.config.cjs

# Teste
npm test
```

### Scripts Disponíveis

```bash
npm run dev              # Vite dev server
npm run dev:sandbox      # Wrangler local (sandbox)
npm run build            # Build para produção
npm run preview          # Preview do build
npm run deploy           # Deploy no Cloudflare
npm run deploy:prod      # Deploy produção
npm run clean-port       # Limpar porta 3000
npm test                 # Testar servidor
```

---

## 📦 Estrutura do Projeto

```
webapp/
├── src/
│   ├── index.tsx           # Aplicação Hono principal
│   └── renderer.tsx        # Renderer helper
├── public/
│   └── static/
│       ├── game-data.js    # Dados das cartas e tabuleiro
│       ├── game.js         # Lógica do jogo
│       ├── app.js          # Interface do usuário
│       └── styles.css      # Estilos CSS
├── dist/                   # Build de produção
├── .git/                   # Repositório Git
├── .gitignore             # Arquivos ignorados
├── ecosystem.config.cjs   # Configuração PM2
├── package.json           # Dependências
├── vite.config.ts         # Configuração Vite
├── wrangler.jsonc         # Configuração Cloudflare
└── README.md              # Este arquivo
```

---

## 🎨 Features Implementadas

### ✅ Funcionalidades Completas

- [x] Sistema completo de setup de jogo (2-5 jogadores)
- [x] Dashboard interativa com estatísticas em tempo real
- [x] Tabuleiro visual com todas as zonas e casas
- [x] Sistema de cartas (Conceito, Desafio, Recursos)
- [x] Mecânica de dados animada
- [x] Sistema de movimento e navegação
- [x] Gerenciamento de recursos por jogador
- [x] Sistema de missões com múltiplas opções
- [x] Condições de vitória
- [x] Log de eventos do jogo
- [x] Modais interativos para cada ação
- [x] Animações e feedback visual
- [x] Design responsivo
- [x] Tela de Game Over com celebração
- [x] 12 cartas de conceito educacionais
- [x] 10 cartas de desafio/inovação
- [x] 5 tipos de recursos com distribuição balanceada
- [x] Casas especiais com efeitos únicos
- [x] Sistema de turno e skip de turno
- [x] Escolha de zonas de pesquisa

### 🎓 Conteúdo Educacional

- **Biotecnologia Clássica**: Fermentação, penicilina, vacinas
- **Biotecnologia Moderna**: DNA, plasmídeos, enzimas
- **Aplicações Práticas**: Insulina, testes de paternidade, OGMs, células-tronco
- **Bioética**: Princípio da precaução, fluxo gênico, biossegurança
- **Personalidades**: Fleming, Pasteur, Ovelha Dolly

---

## 🎯 Status do Desenvolvimento

### ✅ Concluído
- Estrutura do projeto
- Sistema de gerenciamento de jogo
- Interface completa
- Todas as mecânicas de jogo
- Sistema de cartas completo
- Animações e feedback
- Testes locais

### ✨ Melhorias Visuais Recentes

#### 🎲 Dados 3D
- Dados aumentados em 25% (150px)
- Números gigantes e super visíveis (5.5em)
- Efeito 3D realista com profundidade de 75px
- Total destacado com animação aprimorada
- Múltiplas sombras para maior profundidade

#### 🗺️ Tabuleiro
- Casas maiores (140px) com melhor espaçamento
- Cores específicas para cada tipo de casa:
  - 🔵 Conceito (Azul)
  - 🔴 Desafio (Vermelho)
  - 🟢 Recurso (Verde)
  - 🟡 Especial (Laranja)
  - 🟣 Missão (Roxo)
  - 🔷 Hub (Índigo)
- Ícones 12% maiores (2.8em)
- Layout otimizado e responsivo

Veja mais detalhes em [MELHORIAS_TABULEIRO_DADOS.md](./MELHORIAS_TABULEIRO_DADOS.md)

### 🚀 Próximos Passos
- [x] Deploy no GitHub ✅
- [ ] Deploy no Netlify
- [ ] Multiplayer online (futuro)
- [ ] Modo de tutorial (futuro)
- [ ] Estatísticas persistentes (futuro)
- [ ] Sons e efeitos sonoros (futuro)

---

## 📖 Base Pedagógica

Este jogo foi desenvolvido com base no documento:
**"Oficina de Biotecnologia e Jogo de Tabuleiro 'A Trilha do DNA': Um Guia de Implementação Pedagógica"**

### Alinhamento Curricular
- Educação de Jovens e Adultos (EJA)
- Componente: Biologia - 3º Ano
- Metodologia: Aprendizagem Baseada em Jogos
- Tópico 4: "DNA e Biotecnologia"

### Objetivos de Aprendizagem
1. Diferenciar biotecnologia clássica e moderna
2. Explicar aplicações da engenharia genética
3. Identificar ferramentas básicas do DNA
4. Debater dilemas éticos e sociais

---

## 🤝 Contribuindo

Este é um projeto educacional. Sugestões e melhorias são bem-vindas!

---

## 📝 Licença

Projeto desenvolvido para fins educacionais.

---

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para educação em biotecnologia.

**Versão**: 1.0.0  
**Data**: 2025-01-15  
**Status**: ✅ Totalmente Funcional

---

## 🎮 Como Jogar

### Deploy no Netlify

1. Faça login no [Netlify](https://app.netlify.com)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao GitHub e selecione o repositório `trilhadodna`
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em "Deploy site"

### Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

Boa sorte, cientista! Que vença o melhor pesquisador! 🧬🏆
