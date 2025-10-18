<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Backend README

This backend is a NestJS application designed for a long-term, enterprise-grade e‑commerce platform. It uses a modular structure and is being migrated to Prisma as the canonical ORM for MySQL.

## What you will find in this repo
- NestJS application (src)
- Prisma schema (prisma/schema.prisma)
- PrismaService + module for NestJS integration
- Users module (refactored for enterprise structure)

## Quick start

1. Install dependencies

```powershell
npm install
```

2. Generate Prisma client

```powershell
npx prisma generate
```

3. Create and run migrations (development)

```powershell
npx prisma migrate dev --name init
```

4. Start dev server

```powershell
npm run start:dev
```

## Environment
Copy `.env.example` to `.env` and update the `DATABASE_URL` value to point to your MySQL instance.

## Architecture & Conventions
- Modules are domain-scoped (e.g., `users/`).
- Each module contains subfolders: `controllers/`, `services/`, `repositories/`, `entities/`.
- Use Prisma for database access via `PrismaService`.
- Do not use `synchronize: true` or similar in production. Always use migrations.
- Use `~/*` path alias for root imports.

## Prisma
- Schema is in `prisma/schema.prisma`.
- Use `npx prisma migrate` to manage schema migrations.
- Use generated client via `PrismaService`.

## Testing
- Unit tests: `npm run test`
- E2E tests: `npm run test:e2e`

## Deployment notes (enterprise)
- Use connection pooling and set reasonable connection limits.
- Monitor slow queries and setup read replicas for scaling reads.
- Use CI to run migrations and health checks before routing traffic.

## Adding features / documentation rule
When creating a new feature, always update the relevant README or documentation files describing:
- Purpose of the feature
- API endpoints and request/response examples
- Database schema changes and migration instructions
- Any new environment variables

Failure to update docs will be flagged during code review.

---
