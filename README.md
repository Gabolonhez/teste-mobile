# Test Mobile - Aplicativo de Gerenciamento de Usuários

> Aplicativo mobile desenvolvido com React Native/Expo para gerenciamento completo de usuários, incluindo autenticação, perfil e seleção de planos.

## 📱 Sobre o Projeto

Este é um aplicativo mobile completo que permite aos usuários se cadastrarem, fazerem login, visualizarem e editarem seus perfis, além de gerenciarem seus planos de assinatura. O app foi desenvolvido seguindo as melhores práticas de desenvolvimento mobile e oferece uma experiência fluida e intuitiva.

## ✨ Funcionalidades

### Autenticação

- 🎯 **Welcome Screen**: Tela de boas-vindas com opções de login ou cadastro
- 📝 **Onboarding Completo**: Fluxo de cadastro em 4 etapas
  - Step 1: Nome completo
  - Step 2: Email (com validação de formato)
  - Step 3: Senha segura (mínimo 8 caracteres)
  - Step 4: Seleção de plano (Basic, Pro, Premium)
- 🔐 **Login**: Acesso rápido para usuários existentes

### Área Autenticada

- 🏠 **Home**: Dashboard com status da API em tempo real
  - Health check automático a cada 30 segundos
  - Visualização do plano atual
  - Informações da conta
- 👤 **Perfil**: Gerenciamento completo da conta
  - Visualização de informações pessoais
  - Edição de nome, email e senha
  - Alteração de plano (Basic, Pro, Premium)
  - Logout seguro
  - Exclusão de conta

### Recursos Técnicos

- ✅ Persistência de dados com AsyncStorage
- ✅ Cache inteligente de requisições API
- ✅ Loading states em todas as operações
- ✅ Tratamento de erros com mensagens claras
- ✅ Validação de formulários em tempo real
- ✅ Proteção de rotas baseada em autenticação
- ✅ Navegação mantida ao reabrir o app

## 🛠️ Stack Tecnológica

- **Framework**: React Native com Expo SDK 54
- **Linguagem**: TypeScript (strict mode)
- **Navegação**: Expo Router v6 (file-based routing)
- **State Management**:
  - Zustand (client state + persistência)
  - React Query v5 (server state + cache)
- **HTTP Client**: Axios
- **Storage**: AsyncStorage
- **Styling**: StyleSheet com design tokens

## 📁 Estrutura do Projeto

```
test-mobile/
├── app/                      # Rotas do Expo Router
│   ├── (auth)/              # Grupo de rotas não autenticadas
│   │   ├── welcome.tsx
│   │   ├── login.tsx
│   │   └── onboarding/
│   │       ├── step1.tsx
│   │       ├── step2.tsx
│   │       ├── step3.tsx
│   │       └── step4.tsx
│   ├── (app)/               # Grupo de rotas autenticadas
│   │   ├── home.tsx
│   │   └── profile.tsx
│   ├── _layout.tsx          # Layout raiz
│   └── index.tsx            # Redirecionamento inicial
│
├── src/
│   ├── components/
│   │   └── ui/              # Componentes reutilizáveis
│   │       ├── button/
│   │       ├── input/
│   │       ├── loading/
│   │       └── error-message/
│   │
│   ├── features/            # Features organizadas por domínio
│   │   ├── welcome/
│   │   ├── auth/
│   │   │   └── login/
│   │   ├── onboarding/
│   │   │   ├── steps/
│   │   │   ├── onboarding-context.tsx
│   │   │   └── types.ts
│   │   ├── home/
│   │   └── profile/
│   │
│   ├── lib/
│   │   ├── api/             # Configuração e endpoints da API
│   │   │   ├── client.ts
│   │   │   ├── config.ts
│   │   │   ├── endpoints.ts
│   │   │   └── types.ts
│   │   └── react-query/     # Configuração do React Query
│   │       ├── client.ts
│   │       └── keys.ts
│   │
│   ├── store/               # Zustand store
│   │   └── slices/
│   │       └── auth-slice.ts
│   │
│   └── theme/               # Design tokens
│       ├── colors.ts
│       ├── tokens.ts
│       └── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🏗️ Arquitetura e Padrões

### Organização de Código

**Cada feature segue a estrutura:**

```
feature/
├── feature.component.tsx    # UI (apenas JSX)
├── feature.logic.ts         # Lógica de negócio (hooks)
├── feature.styles.ts        # Estilos (StyleSheet)
└── index.ts                 # Barrel export
```

### Princípios Aplicados

- **Separação de Responsabilidades**: UI, lógica e estilos em arquivos separados
- **Custom Hooks**: Toda lógica isolada em hooks reutilizáveis
- **TypeScript Strict**: Type safety em 100% do código
- **Barrel Exports**: Imports limpos através de index.ts
- **Atomic Design**: Componentes UI reutilizáveis e modulares

### Gerenciamento de Estado

**Client State (Zustand)**

```typescript
// Estado de autenticação persistido
{
  token: string | null,
  user: User | null,
  isAuthenticated: boolean
}
```

**Server State (React Query)**

- Cache automático de requisições
- Refetch em background
- Invalidação inteligente
- Loading e error states

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 18 ou superior
- **npm** ou **yarn**
- **Expo Go** app (para testar no dispositivo físico)
- **OU** Emulador Android / Simulador iOS

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Gabolonhez/teste-mobile.git
cd test-mobile
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm start
```

4. **Execute no dispositivo desejado**

**Opção 1: Dispositivo Físico**

- Instale o app **Expo Go** na Play Store (Android) ou App Store (iOS)
- Escaneie o QR Code que aparece no terminal

**Opção 2: Emulador/Simulador**

```bash
npm run android    # Para Android
npm run ios        # Para iOS (somente macOS)
```

### Scripts Disponíveis

```bash
npm start          # Inicia o Metro Bundler
npm run android    # Abre no Android Emulator
npm run ios        # Abre no iOS Simulator (macOS)
npm run web        # Abre no navegador
```

## 🌐 Integração com API

**Base URL**: `https://ecq.lucasqueiroga.shop`

### Endpoints

| Método | Endpoint        | Descrição                  |
| ------ | --------------- | -------------------------- |
| GET    | `/health`       | Health check da API        |
| POST   | `/register`     | Cadastro de novo usuário   |
| POST   | `/login`        | Autenticação               |
| GET    | `/user/:userId` | Buscar dados do usuário    |
| PUT    | `/user`         | Atualizar dados do usuário |
| DELETE | `/user`         | Deletar conta do usuário   |

### Formato dos Dados

**User Object**

```typescript
{
  id: number;
  name: string;
  email: string;
  password: string;
  status: string;
  plan: "Basic" | "Pro" | "Premium";
}
```

## 🎨 Design System

### Cores

```typescript
primary: "#6C63FF"; // Roxo principal
secondary: "#FF6584"; // Rosa secundário
success: "#28A745"; // Verde sucesso
error: "#DC3545"; // Vermelho erro
text: "#212529"; // Texto principal
textSecondary: "#6C757D"; // Texto secundário
background: "#FFFFFF"; // Fundo branco
```

### Espaçamentos

```typescript
xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 64
```

### Tipografia

```typescript
xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 28, xxxl: 32
```

## 📱 Fluxo de Navegação

```
┌─────────────┐
│   Welcome   │
└──────┬──────┘
       │
   ┌───┴───┐
   │       │
   ▼       ▼
┌──────┐ ┌─────────────┐
│Login │ │ Onboarding  │
└───┬──┘ │  (4 steps)  │
    │    └──────┬──────┘
    │           │
    └────┬──────┘
         ▼
    ┌────────┐
    │  Home  │◄──┐
    └───┬────┘   │
        │        │
        ▼        │
   ┌─────────┐   │
   │ Profile │───┘
   └────┬────┘
        │
    ┌───┴────┐
    │        │
    ▼        ▼
┌────────┐ ┌──────┐
│ Logout │ │Delete│
└───┬────┘ └──┬───┘
    │         │
    └────┬────┘
         ▼
    ┌─────────┐
    │ Welcome │
    └─────────┘
```

## ✅ Checklist de Implementação

- [x] Welcome Screen com navegação
- [x] Onboarding completo (4 steps)
- [x] Login com autenticação
- [x] Home com health check em tempo real
- [x] Profile com edição completa
- [x] Alteração de plano
- [x] Logout e exclusão de conta
- [x] TypeScript strict mode
- [x] React Query configurado
- [x] Zustand + persistência
- [x] Proteção de rotas
- [x] Loading states
- [x] Tratamento de erros
- [x] Validação de formulários
- [x] Navegação persistente
- [x] Design responsivo
- [x] Código limpo e organizado

## 🔒 Segurança

- ✅ Token JWT armazenado com segurança
- ✅ Senhas nunca exibidas em plain text
- ✅ Validação de inputs
- ✅ Rotas protegidas por autenticação
- ✅ Logout limpa todo o estado sensível

## 📝 Observações Importantes

- A API retorna erro `400` se o email já estiver cadastrado
- Senhas devem ter **no mínimo 8 caracteres**
- O health check da Home é atualizado automaticamente a **cada 30 segundos**
- Ao deletar a conta, o usuário é deslogado e redirecionado para Welcome
- A persistência garante que o usuário permaneça logado ao fechar e reabrir o app

## 🚧 Melhorias Futuras

- [ ] Recuperação de senha
- [ ] Modo escuro
- [ ] Internacionalização (i18n)
- [ ] Testes unitários e E2E
- [ ] Notificações push
- [ ] Biometria para login

## 👨‍💻 Desenvolvedor

Desenvolvido por **Gabriel Longhitano**

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico.

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
