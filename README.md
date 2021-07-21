# Backend NestJS

## Aplicação para uso em camadas de backend

---

## Libs e ferramentas

- [NestJS](https://nestjs.com/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

---

## Features

- Jest configurado
- Build com babel
- ts-node-dev para desenvolvimento
- Uso de path alias com typescript, configurado para test ou build
```typescript
// Exemplo
// Uso do @module/*  ao inves de ../../../app.module
import { AppModule } from '@module/app.module'
...
``` 
- Husky, conventional commits, lint staged, eslint. Ações configuradas: 

```markdown
- commit-msg: Executado para validar a mensagem do commit
- pre-commit: Executa todos os test e lint de arquivos no staged
- pre-push: Executa operação de CI, todos os testes da aplicação com coverage
```

---

## Script


### Start development mode

```bash
$ yarn start:dev
```

### Test watch

```bash
$ yarn test:watch
```

### Test all

```bash
$ yarn test
```

### Build with Babel

```bash
$ yarn build
```
