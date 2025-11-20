# Test Mobile - React Native/Expo App

Aplicativo mobile React Native/Expo para gerenciamento de usuários, desenvolvido com TypeScript, React Query, Zustand e Expo Router.

## 📋 Funcionalidades

- ✅ **Welcome Screen**: Tela inicial de boas-vindas
- ✅ **Onboarding**: Fluxo de cadastro em 4 steps (Nome, Email, Senha, Plano)
- ✅ **Autenticação**: Login e registro integrados com API
- ✅ **Home**: Tela principal com status da API em tempo real
- ✅ **Profile**: Visualização, edição, exclusão de conta e logout
- ✅ **Persistência**: Estado mantido após fechar o app
- ✅ **Loading States**: Feedback visual durante operações
- ✅ **Tratamento de Erros**: Mensagens claras para o usuário

## 🛠️ Tecnologias

- **React Native** com **Expo SDK 54**
- **TypeScript** (strict mode)
- **Expo Router** para navegação
- **React Query** para server state
- **Zustand** para client state
- **AsyncStorage** para persistência
- **Axios** para requisições HTTP

## 📁 Estrutura do Projeto

```
src/
├── features/          # Features organizadas por domínio
│   ├── welcome/       # Tela de boas-vindas
│   ├── onboarding/    # Fluxo de cadastro
│   ├── auth/          # Autenticação (login)
│   ├── home/          # Tela principal
│   └── profile/       # Perfil do usuário
├── components/
│   └── ui/            # Componentes reutilizáveis (Button, Input, etc)
├── lib/
│   ├── api/           # Configuração e chamadas de API
│   └── react-query/   # Configuração do React Query
├── store/
│   └── slices/        # Slices do Zustand
└── theme/             # Tokens de design

app/                   # Rotas do Expo Router
├── (auth)/            # Rotas não autenticadas
│   ├── welcome.tsx
│   ├── login.tsx
│   └── onboarding/
└── (app)/             # Rotas autenticadas
    ├── home.tsx
    └── profile.tsx
```

## 🔧 Arquitetura

**Princípios seguidos:**

- **Componentes = apenas TSX**: Sem lógica nos componentes
- **Hooks = toda a lógica**: useState, useEffect, useCallback em custom hooks
- **Styles = funções separadas**: Estilos em arquivos dedicados
- **Organização por features**: Cada feature tem seus componentes, lógica e estilos
- **Imports organizados**: Barrel exports (index.ts) em todas as pastas

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Expo Go instalado no seu dispositivo móvel (iOS/Android)
- OU Android Studio / Xcode configurados

### Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd test-mobile
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm start
```

4. Escolha uma opção:
   - Pressione `a` para abrir no Android Emulator
   - Pressione `i` para abrir no iOS Simulator (somente macOS)
   - Escaneie o QR Code com o Expo Go no seu dispositivo

### Scripts Disponíveis

```bash
npm start          # Inicia o Metro Bundler
npm run android    # Abre no Android
npm run ios        # Abre no iOS (somente macOS)
npm run web        # Abre no navegador
```

## 🌐 API

A aplicação consome a API REST:

- **Base URL**: `https://ecq.lucasqueiroga.shop`

### Endpoints Utilizados:

- `GET /health` - Health check da API
- `POST /register` - Registro de novo usuário
- `POST /login` - Login
- `GET /user/:userId` - Obter dados do usuário
- `PUT /user` - Atualizar dados do usuário
- `DELETE /user` - Deletar usuário

## ✨ Destaques da Implementação

### Gerenciamento de Estado

- **React Query**: Todas as chamadas de API, com cache e refetch automático
- **Zustand + Persist**: Estado de autenticação persistido no AsyncStorage

### Navegação

- **Expo Router**: Navegação baseada em arquivos
- **Proteção de Rotas**: Redirecionamento automático baseado em autenticação
- **Grupos de Rotas**: `(auth)` para não autenticadas, `(app)` para autenticadas

### UI/UX

- **Design Moderno**: Interface limpa e profissional
- **Animações**: Transições suaves entre telas
- **Loading States**: Indicadores visuais durante operações
- **Feedback**: Mensagens de erro e sucesso claras
- **Responsivo**: Adaptado para diferentes tamanhos de tela

### Qualidade de Código

- **TypeScript Strict**: Type safety completo
- **Separação de Responsabilidades**: Lógica, UI e estilos separados
- **Código Limpo**: Nomes descritivos, sem código comentado
- **Reutilização**: Componentes UI modulares e reutilizáveis

## 📱 Fluxo do App

```
Welcome
   ↓
Onboarding (4 steps) → Login
   ↓                      ↓
   └──────→ Home ←───────┘
              ↓
           Profile
              ↓
         Logout/Delete
              ↓
           Welcome
```

## 🔐 Persistência

- Token JWT e dados do usuário são salvos no AsyncStorage
- Ao reabrir o app, o usuário permanece logado
- Navegação é restaurada automaticamente

## 🎨 Tema

O app utiliza um sistema de design tokens consistente:

- **Cores**: Primary, Secondary, Text, Background, Error, etc.
- **Espaçamentos**: xs, sm, md, lg, xl, xxl, xxxl
- **Tipografia**: Tamanhos e pesos de fonte padronizados
- **Border Radius**: Arredondamentos consistentes

## 📝 Observações

- A API pode retornar erro 400 se o email já estiver cadastrado
- Senhas devem ter no mínimo 8 caracteres
- O plano não pode conter "notConfigured"
- O health check é atualizado automaticamente a cada 30 segundos

## 👤 Desenvolvedor

Projeto desenvolvido seguindo as especificações do teste técnico.

---

**Última atualização**: Novembro 2024
