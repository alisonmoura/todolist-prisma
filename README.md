# Todolist with Prisma
A simple todo-list API with Prisma + Typescript + Nodejs

## Requirements
- Nodejs v18

## Environment file
Fist of all, create a `.env` file at the project's root folder, just like `.env.example` file.

```dosini
# Database URL. To use local SQLite database, use as it is
DATABASE_URL = "file:./dev.db" 

# API's port
PORT = 3000 

# CORS policy. Could also be something like ALLOWED_ORIGINS = "http://localhost/, https://my.production.host.com/"
ALLOWED_ORIGINS = "*" 
```

## Install dependencies
Next, install the dependencies:

```bash
$npm install
```

## Database migrations
For the first time running:

```bash
$npx prisma migrate deploy 
```

## Run
Last but not least, run it:

```bash
$npm run dev
```

## Useful links
- Prisma Quickstart Guide: https://www.prisma.io/docs/getting-started/quickstart
- Getting Started With Prisma Migrations: https://www.prisma.io/docs/orm/prisma-migrate/getting-started
- Prisma deploy guide: https://www.prisma.io/docs/orm/prisma-client/deployment/deploy-database-changes-with-prisma-migrate
- Prisma in your REST application: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
- Fixing failed migration with Prisma: https://www.prisma.io/docs/orm/prisma-migrate/workflows/patching-and-hotfixing#fixing-failed-migrations-with-migrate-diff-and-db-execute
- Thread about ambiguous relationship: https://github.com/prisma/prisma/issues/633
- How to deal with createdAt and updatedAt: https://github.com/prisma/prisma/discussions/20323
- How to set up TypeScript with Node.js and Express: https://blog.logrocket.com/how-to-set-up-node-typescript-express/