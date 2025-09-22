# Estética Financeira

Um aplicativo web completo para análise de viabilidade financeira voltado especificamente para negócios de estética corporal.

## 🎯 Funcionalidades

- **Dashboard Interativo**: Visão geral das métricas financeiras principais
- **Análise Financeira**: Gestão de direitos (ativos) e obrigações (passivos)
- **Gestão de Custos**: Controle de custos fixos e variáveis
- **Precificação de Serviços**: Calculadora de margem e rentabilidade por serviço
- **Cálculos Automáticos**: Capital de giro, payback, ROI e projeções
- **Persistência Local**: Dados salvos automaticamente no navegador

## 🏥 Específico para Estética Corporal

O aplicativo foi adaptado especificamente para o setor de estética corporal, incluindo:

- Categorias de custos específicas (produtos, insumos, materiais descartáveis)
- Serviços pré-configurados (massagem modeladora, drenagem linfática, limpeza de pele)
- Métricas relevantes para o setor
- Terminologia adequada ao negócio

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework frontend
- **Vite** - Build tool e desenvolvimento
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes de interface

## 📊 Principais Cálculos

- **Capital de Giro**: Diferença entre ativos e passivos
- **Payback**: Tempo de retorno do investimento
- **ROI**: Retorno sobre investimento
- **Margem de Lucro**: Por serviço e geral
- **Ponto de Equilíbrio**: Análise de viabilidade
- **Projeção de Fluxo de Caixa**: Simulação de crescimento

## 🛠️ Como Usar

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd estetica-financeira
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Build para produção**
   ```bash
   npm run build
   ```

## 📱 Interface

O aplicativo possui uma interface responsiva e intuitiva com:

- Sidebar de navegação
- Cards informativos com métricas
- Formulários organizados por categoria
- Tabelas interativas para serviços
- Resumos financeiros em tempo real

## 💾 Persistência de Dados

Todos os dados são salvos automaticamente no localStorage do navegador, permitindo que o usuário continue de onde parou sem perder informações.

## 🎨 Design

- Interface moderna e profissional
- Cores temáticas (rosa/roxo) adequadas ao setor de estética
- Layout responsivo para desktop e mobile
- Componentes acessíveis e bem estruturados

## 📈 Análises Disponíveis

1. **Análise de Viabilidade**: Determina se o negócio é viável
2. **Análise de Sensibilidade**: Cenários otimista, pessimista e base
3. **Projeção de Crescimento**: Simulação de 12 meses com crescimento gradual
4. **Análise por Serviço**: Rentabilidade individual de cada serviço

## 🔧 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Header, Sidebar
│   └── ui/             # Componentes de interface
├── contexts/           # Context API para estado global
├── hooks/              # Hooks customizados
├── pages/              # Páginas da aplicação
├── utils/              # Funções utilitárias e cálculos
└── lib/                # Configurações e helpers
```

## 📄 Licença

Este projeto foi desenvolvido como uma solução personalizada para análise financeira no setor de estética corporal.

---

**Desenvolvido com ❤️ para profissionais de estética corporal**

