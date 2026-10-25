# SGI Melo Diniz Engenharia

Sistema de Gestão Integrada para construção civil. Código e identidade próprios; o SGI Alcance é apenas referência funcional/visual geral.

## Stack
- Web: Next.js App Router + TypeScript + PrimeReact
- API: Node.js + Express + TypeScript
- Dados: PostgreSQL + Prisma
- Segurança planejada: JWT, RBAC, auditoria e validação
- Relatórios: PDFKit
- Deploy planejado: Vercel para web; serviço Node e PostgreSQL gerenciados

## Estrutura
- `apps/web`: interface e painel
- `apps/api`: API REST
- `prisma/schema.prisma`: modelo inicial de dados
- `docs/`: arquitetura, módulos e roadmap

## Status
Scaffold inicial publicado. Ainda não é um ERP pronto para produção. O painel usa dados demonstrativos e os módulos ainda precisam de implementação e testes.

## Desenvolvimento local
Requisitos: Node.js 20+, npm 10+ e PostgreSQL 16+.
1. Copie `.env.example` para `.env` e ajuste as variáveis.
2. Execute `npm install`.
3. Execute `npm run db:generate` e `npm run db:migrate`.
4. Execute `npm run dev:web` e `npm run dev:api` em terminais separados.

## Princípios
- Isolamento multiempresa desde o modelo de dados.
- Permissões por papel, módulo e organização.
- Auditoria de operações sensíveis.
- Aprovação humana para ações de impacto financeiro.
- Segredos apenas em variáveis de ambiente.
- Não copiar código, marca, dados ou telas privadas de terceiros.
