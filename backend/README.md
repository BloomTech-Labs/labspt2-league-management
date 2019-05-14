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


# Back End Structure

## /data

# Back End Dependencies

## BcryptJS

An adaptive hashing function used to protect user passwords

## Cors

A node.js middleware package used to configure API security.  Cors securely communicates between the frontend and the backend

## Dotenv

Dotenv loads environment variables from a `.env` file

## Express

A flexible minimalistic Node.js web application framework that creates fast and flexible server side applications.  

## JsonWebToken



## Passport

