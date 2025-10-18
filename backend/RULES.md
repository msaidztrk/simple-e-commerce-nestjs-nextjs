---
applyTo: '**/backend/**'
---
# Backend (NestJS) Structure and Coding Rules

1. **Act as a Senior Developer**: All code must reflect best practices, SOLID principles, and maintainability.
2. **Folder Structure**: Use a modular, scalable folder structure. Each domain (e.g., user, product, order) should have its own module, controller, service, repository, model (entity), and enums as needed.
3. **Repository Pattern**: Use repositories for all data access. Services should depend on repositories, not directly on models or data sources.
4. **Service Layer**: Business logic must reside in services. Controllers should be thin and only handle HTTP/request logic.
5. **Models/Entities**: Define clear models/entities for each domain. Use TypeORM or another ORM as appropriate.
6. **Enums**: Use enums for all fixed sets of values (e.g., order status, user roles).
7. **Dynamic System**: Design modules and services to be easily extendable and configurable. Avoid hardcoding values; use configuration and dependency injection.
8. **Only Change as Specified**: Only modify or add code/files as explicitly requested. Do not refactor or change unrelated code.
9. **Testing**: Write unit and e2e tests for all business logic and API endpoints.
10. **Documentation**: Document all modules, services, and repositories with clear comments and README files as needed.
11. **No Comments**: Write no comments; function and variable names should clearly indicate the specific action. Remove all existing comments from the codebase.

> These rules must be followed for all code in the `backend` folder.
