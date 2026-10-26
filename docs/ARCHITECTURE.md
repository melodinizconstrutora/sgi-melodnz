# Arquitetura do SGI Melo Diniz

## Visão lógica
- `apps/web`: Next.js App Router, PrimeReact e dashboards.
- `apps/api`: Express REST API versionada em `/api/v1`.
- `prisma`: persistência PostgreSQL e migrations.
- Integrações isoladas por adaptadores: bases de custos, e-mail, arquivos, BI e fornecedores.

## Segurança obrigatória antes de produção
1. JWT de curta duração e refresh tokens rotativos/revogáveis.
2. Argon2id ou bcrypt para senhas.
3. RBAC por organização, obra, módulo e ação.
4. Validação de entrada, rate limiting e CORS restrito.
5. Auditoria de alterações críticas; logs sem segredos.
6. Segredos geridos no ambiente de implantação; TLS obrigatório.
7. Testes de autorização para evitar acesso cruzado entre organizações.

## Domínios
Organização e usuários; obras e contratos; EAP e cronograma; RDO; orçamento e composições; medições; compras e fornecedores; estoque; financeiro; RH; documentos; qualidade; segurança do trabalho; licitações; CRM; BI; MARI.

## IA e integrações
A MARI pode apoiar consultas, resumos e alertas. Pagamentos, contratos e ações críticas exigem permissão e aprovação humana.
