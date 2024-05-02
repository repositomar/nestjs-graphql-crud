## Description
GraphQL CRUD
## Requirements
* Docker
* NVM

## First steps
> **Create `.env` file at the root project with the environment variables:**

```sh
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER_NAME=root
DB_POSSWORD=password
DATA_BASE=users-db
```
> **Run the following command to run `MySQL` in docker container:**
```bash
$ docker-compose up -d
```
> **Run the following commands to setup node environment:**

This will install the node version required for this project.
```bash
$ nvm install 
```

This will set as current node version the required version for this project.
```bash
$ nvm use 
```

This will install the project dependencies.
```bash
$ npm install
```
## Running server
This command will start the server, the application will run on `port 3000`

```bash
# development
$ npm run start:dev
```

## Getting started
> **Open browser in `http://localhost:3000/graphql`**

> Query and Mutation will be seen on Apollo Server.

## Mutation
### Create user
> It is necessary to provide `name` and `email` to create user.
<img width="1455" alt="Captura de pantalla 2024-05-01 a la(s) 10 33 15 p m" src="https://github.com/repositomar/nestjs-graphql-crud/assets/94940686/b71a5001-9194-43bd-a4ec-131a55907614">

### Update user
> It is necessary to provide `userId` and variables to update.
<img width="1470" alt="Captura de pantalla 2024-05-01 a la(s) 10 43 11 p m" src="https://github.com/repositomar/nestjs-graphql-crud/assets/94940686/d1e96744-17b0-439f-b7d9-772eb8a7e3ac">

### Delete user
> It is necessary to provide `userId`.
<img width="1470" alt="Captura de pantalla 2024-05-01 a la(s) 10 44 11 p m" src="https://github.com/repositomar/nestjs-graphql-crud/assets/94940686/63b092f9-01ff-459a-af67-9015d064f5db">

## Query
### Get all users
> This returns all users.
<img width="1470" alt="Captura de pantalla 2024-05-01 a la(s) 10 45 49 p m" src="https://github.com/repositomar/nestjs-graphql-crud/assets/94940686/2ef17cbc-3456-47bb-891b-08dd8f42b3ca">

### Get user
> It is necessary to provide `userId`.
<img width="1470" alt="Captura de pantalla 2024-05-01 a la(s) 10 39 01 p m" src="https://github.com/repositomar/nestjs-graphql-crud/assets/94940686/e8cd8f19-43b8-4087-97fd-0a53226407b0">

## Further work
* Do integration tests.
