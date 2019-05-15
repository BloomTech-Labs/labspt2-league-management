<div align="center">
<img style="margin-top: 10px;" alt="logo" src="../frontend/src/Images/LM_Logo.png">
</div>

# Back End Documentation

## Initializing Project on your local server

- From the command line, `cd` into the 'backend' directory

- Create your environment variables at `/backend`
   - Set up `.env` file in `/backend`
   - Inside the `.env` file `JWT_SECRET=SomeRandomString` editing the Secret with your random string 
> **Note:** The app will crash without these variables defined

- Set up the database
   - `knex migrate:latest`
   - `knex seed:run` to populate the database with seed data

- **RUN** yarn install to install node-modules and dependencies

- **RUN** `yarn server` to get your local server up and running on [http://localhost:4000](http://localhost:4000)

# Endpoints

## Auth Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| POST   | /auth/login                      |
| POST   | /auth/register                   |

## League Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| GET    | /leagues/                        |
| POST   | /leagues/                        |
| GET    | /leagues/:lid/                   |
| PUT    | /leagues/:lid/                   |
| DELETE | /leagues/:lid/                   |
| GET    | /leagues/:lid/teams              |
| POST   | /leagues/:lid/teams              |
| GET    | /leagues/:lid/teams/:tid         |
| PUT    | /leagues/:lid/teams/:tid         |
| DELETE | /leagues/:lid/teams/:tid         |
| GET    | /leagues/:lid/schedule           |
| POST   | /leagues/:lid/schedule           |
| PUT    | /leagues/:lid/schedule/:gid      |
| GET    | /leagues/:lid/cancellations      |
| POST   | /leagues/:lid/cancellations      |
| PUT    | /leagues/:lid/cancellations/:cid |

## Search Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| GET    | /search/                         |
| POST   | /search/                         |
| GET    | /search/:lid/schedule            |
| GET    | /search/users                    |

## Settings Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| GET    | /settings/                       |
| PUT    | /settings/                       |
| POST   | /settings/password               |

## Stripe Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| POST   | /stripe/billing                  |

## Team Routes

| Method | Endpoint                         |
| ------ | -------------------------------- |
| GET    | /teams/                          |
| GET    | /teams/:tid/schedule             |

# Back End Structure

## data

Contains the migrations, seed data, models, and the database

## data/migrations

Contains tables for `users`, `leagues`, `teams`, `location`, `games`, and `cancellations`

## data/models

Contains `cancellationRequestModel.js`, `gameModel.js`, `leagueModel.js`, `teamModel.js`, and `userModel.js` 

## routers

Contains `authRouter.js`, `leagueRouter.js`, `searchRouter.js`, `settingsRouter.js`, `stripeRouter.js`, and `teamRouter.js`

# Back End Dependencies

## BcryptJS

An adaptive hashing function used to protect user passwords

## Cors

A node.js middleware package used to configure API security.  Cors securely communicates between the frontend and the backend servers

## Dotenv

Dotenv loads environment variables from a `.env` file

## Express

A flexible minimalistic Node.js web application framework that creates fast and flexible server side applications.  

## JSONWebToken

Allows the creation of signed tokens which securely transmit information between parties in a compact and self-contained JSON object

## Passport

Flexible customizable node.js middleware package that helps with authentication when using Google, Facebook, etc