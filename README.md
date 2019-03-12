# labspt2-league-management

## Project Overview

The sports community is currently fragmented where each sport has its own sports apps.  League Management allows users to run all of their sports leagues from one hub minimizing the amount of time and effort required.  User Admins can create a sports league, add teams, and manage their season schedule. Coaches can access their dashboard to request cancellations of games if an unforeseen incident occurs.

## Setup and Install

### Back End - Local install

From the command line, switch into the 'backend' directory.

`cd path/to/labspt2-league-management/backend`

Install node-modules and dependencies

`yarn`

Set up environment variable for JSON Web Token Secret

`touch .env` or create the file in VS Code

Inside the file, add the environment variable

`JWT_SECRET=SomeRandomString`

Run the server

`yarn server`

Open `http://localhost:4000` in a web browser and verify API is running

To set up the database run knex migrations

`knex migrate:latest`

And if you want to populate the database with seed data

`knex seed:run`

The back end is ready!

### Front End - Local Install

From the command line, switch into the 'frontend' directory.

`cd path/to/labspt2-league-management/frontend`

Install node-modules and dependencies

`yarn`

Run React

`yarn start`

The front end is ready!