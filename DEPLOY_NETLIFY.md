# 🚀 Guia de Deploy no Netlify

## Passo a Passo Completo

### 1️⃣ Preparação

O projeto já está configurado com:
- ✅ `netlify.toml` criado
- ✅ Repositório no GitHub
- ✅ Build configurado no `package.json`

### 2️⃣ Deploy no Netlify

#### Opção A: Via Interface Web (Recomendado)

1. **Acesse o Netlify**
   - Vá para https://app.netlify.com
   - Faça login com sua conta GitHub

2. **Importe o Projeto**
   - Clique em "Add new site"
   - Selecione "Import an existing project"
   - Escolha "Deploy with GitHub"

3. **Conecte o Repositório**
   - Autorize o Netlify a acessar seus repositórios
   - Selecione `roneymatusp2/trilhadodna`

4. **Configure o Build**
   - O Netlify detectará automaticamente as configurações do `netlify.toml`
   - Verifique se está correto:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: 20

5. **Deploy**
   - Clique em "Deploy site"
   - Aguarde o build (1-2 minutos)
   - Seu site estará no ar! 🎉

#### Opção B: Via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy
netlify deploy --prod
```

### 3️⃣ Configurações Pós-Deploy

#### Personalizar URL
1. Vá em "Site settings" > "Site details"
2. Clique em "Change site name"
3. Escolha um nome (ex: `trilhadodna`)
4. Sua URL será: `https://trilhadodna.netlify.app`

#### Configurar Domínio Customizado (Opcional)
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Siga as instruções para configurar DNS

### 4️⃣ Deploy Automático

O Netlify já está configurado para deploy automático:
- ✅ Cada push na branch `main` dispara um novo deploy
- ✅ Preview de PRs automático
- ✅ Rollback fácil para versões anteriores

### 5️⃣ Verificar Deploy

Após o deploy, teste:
- [ ] Página inicial carrega
- [ ] Setup de jogadores funciona
- [ ] Dados rolam corretamente
- [ ] Tabuleiro é exibido
- [ ] Cartas funcionam
- [ ] Responsivo no mobile

### 6️⃣ Monitoramento

No painel do Netlify você pode:
- Ver logs de build
- Monitorar performance
- Ver analytics (se habilitado)
- Configurar notificações

## 🔧 Troubleshooting

### Build Falha

**Erro**: `npm ERR! missing script: build`
- **Solução**: Verifique se `package.json` tem o script `build`

**Erro**: `Module not found`
- **Solução**: Execute `npm install` localmente e commit o `package-lock.json`

**Erro**: Node version incompatível
- **Solução**: Adicione no `netlify.toml`:
  ```toml
  [build.environment]
    NODE_VERSION = "20"
  ```

### Site não Carrega

**Problema**: Página em branco
- **Solução**: Verifique se o `publish` está apontando para `dist`

**Problema**: 404 em rotas
- **Solução**: O `netlify.toml` já tem o redirect configurado

### Assets não Carregam

**Problema**: CSS/JS não carrega
- **Solução**: Verifique os caminhos no `src/index.tsx` (devem ser `/static/...`)

## 📊 Configuração do netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 5173
  targetPort = 5173
  autoLaunch = false
```

## 🎯 Checklist Final

Antes de compartilhar o jogo:
- [ ] Deploy bem-sucedido
- [ ] URL personalizada configurada
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] Testado em diferentes navegadores
- [ ] README atualizado com URL do jogo
- [ ] Badge do Netlify adicionado ao README

## 🔗 Links Úteis

- [Documentação Netlify](https://docs.netlify.com)
- [Netlify CLI](https://cli.netlify.com)
- [Netlify Status](https://www.netlifystatus.com)

## 🎉 Pronto!

Seu jogo "A Trilha do DNA" está no ar! 🧬

Compartilhe com seus alunos e aproveite! 🎮

---

**Última atualização**: 17 de novembro de 2025
