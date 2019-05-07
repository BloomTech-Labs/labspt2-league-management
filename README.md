<img style="display: block; margin: auto; margin-top: 10px;" alt="logo" src="./frontend/src/Images/LM_Logo.png">

# League Management

League Management allows users to run all of their sports leagues from one hub minimizing the amount of time, energy, and resouces required. 

This repository contains the collective effort and capstone project of 6 students that will graduate from Lambda School’s Full Stack Web Development program.

## Team

Listed alphabetically:

| [**Alex Martin**](https://github.com/atonymartin20) | [**Eric Fleming**](https://github.com/efleming111) | [**Eric Whitcomb**](https://github.com/ericwhitcomb) | [**Griffin Huth**](https://github.com/griffinshuth) | [**Humberto Raya Jr**](https://github.com/hraya) | [**Jesse Anderson**](https://github.com/Jesse9009) |
|:------------:|:------------:|:-----------:|:-----------:|:-----------:|:-----------:|
| [<img src="https://avatars0.githubusercontent.com/u/35713771?s=460&v=4" width="80">](https://github.com/atonymartin20) | [<img src="https://avatars2.githubusercontent.com/u/8313768?s=460&v=4" width="80">](https://github.com/efleming111) | [<img src="https://avatars0.githubusercontent.com/u/1847849?s=460&v=4" width="80">](https://github.com/ericwhitcomb) | [<img src="https://avatars0.githubusercontent.com/u/41766864?s=460&v=4" width="80">](https://github.com/griffinshuth) | [<img src="https://avatars3.githubusercontent.com/u/34699553?s=460&v=4" width="80">](https://github.com/hraya) | [<img src="https://avatars3.githubusercontent.com/u/24962759?s=460&v=4" width="80">](https://github.com/Jesse9009) |
| [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/atonymartin20) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/efleming111) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/ericwhitcomb) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/griffinshuth) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/hraya) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/Jesse9009) |

# Quick Start

1. Create your environment variables at `/backend`
   - Set up `.env` file in `/backend`
   - Inside the `.env` file `JWT_SECRET=SomeRandomString` editing the Secret with your random string 
> **Note:** The app will crash without these variables defined

2. Set up the database
   - `knex migrate:latest`
   - `knex seed:run` to populate the database with seed data
3. Inside `/backend` install all dependencies and spin up the server
   ```
   $ yarn && yarn server
   ```
4. Inside `/frontend` install all dependencies and kick off the frontend
   ```
   $ yarn && yarn start
   ```

Now just open [http://localhost:3000](http://localhost:3000) to visit the frontend, or query the server endpoints directly at [http://localhost:4000](http://localhost:4000)

# Resources

- [App Wireframes](https://balsamiq.cloud/snv27r3/ptbqmhb/r2278)
- [Front End Site - Hosted on Netlify](https://leaguemanagement.netlify.com)
- [Back End Site - Hosted on Heroku](https://league-management.herokuapp.com/)

# Scripts

## Running

From the root directory:

`cd frontend && yarn start` - Runs the frontend client

`cd backend && yarn server` - Runs the backend server

# Front End Information
Front end infomation can be found in the [Front End README](./frontend/README.md)

# Back End Information
Back end information can be found in the [Back End README](./backend/README.md)

# App Usage & User Story

## User Access

Users are not required to sign in to view league search feature and the public calendar.

All other features required the user to be signed in.

# As a League Admin

1. You can create a new league
2. You can click on `Your Leagues` in the left-hand corner
3. All leagues that you are an admin are then displayed
4. Clicking on the league you want to go to will load the league and bring you to the league details page

## Creating A New League

1. Click `SELECT FOR $5/MO` button on the home dashboard after signing in
2. Enter a league Name and click `Create League` button
3. Enter credit card information and click `subscribe for $5/mo` button
4. Edit default league settings to alter your league however you want it and click `NEXT` button
5. Enter your team names making sure you end with an even number of teams and click `NEXT` button
6. Click `GENERATE SCHEDULE` button
7. You will then be brought to the league details page for your league 

## League Details

1. League details page will show information about the league

## Editing Team Cards

1. In the left-hand bar click `Teams`
2. Click on the edit icon in the upper right-hand corner for the team you want to edit
3. Input the updated information and then click `SAVE TEAM`

## Admin Calendar

1. In the left-hand bar click `Calendar`
2. The buttons in the top of the calendar render the calendar differently depending on which view you would like to see
3. To edit the games on the calendar click the green edit button in the upper right-hand corner
4. The games will render with an orange border and grey background showing that they are now drag and dropable
5. Then just drag and drop games around the schedule until you are done editing the calendar
6. Then click the green checkbox button in the upper right-hand corner
7. These changes are now reflected in all versions of this calendar

## Admin Cancellation Requests

1. In the left-hand bar click `Cancellation Requests`
2. All pending cancellation requests will be displayed in the left-hand column
3. All approved cancellation requests will be displayed in the center column
4. All denied cancellation requests will be displayed in the right-hand column
5. Games that are pending request have the option to `Accept` or `Deny` the request
6. The request goes in the appropriate column after deciding on the request

# As a Coach of a team
1. You can click on `Your Teams` in the left-hand corner
3. All teams that you are a coach of are displayed
4. Clicking on the team you want to go to will load the team and bring you to the team calendar

## Coach Calendar

1. In the left-hand bar click `Calendar`

## Coach Cancellation Requests

1. In the left-hand bar click `Cancellations`
2. This will render each game 

# User Settings

1. Click the person icon in the upper right-hand corner next 
2. Reset your password
3. Click `Save` -->

# Contributing

Currently contributing is only availble to members of our team.  If this changes it will be updated in the README

# Issues

If something does not work, please [file an issue](https://github.com/Lambda-School-Labs/labspt2-league-management/issues/new)