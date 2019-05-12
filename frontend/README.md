<div align="center">
<img style="margin-top: 10px;" alt="logo" src="./src/Images/LM_Logo.png">
</div>

# Front End Documentation

## Initializing Project on your local server

- From the command line, `cd` into the 'frontend' directory

- **RUN** yarn install to install node-modules and dependencies

- **RUN** `yarn start` to get your local server up and running on [http://localhost:3000](http://localhost:3000)


# Frontend Structure

## src/components

This folder contains all of our components. Components are seperated into folders to easily identify where files are and what their functions are.

Some of the important component folders are listed below:

## src/components/Admin

This folder contains `LeagueSetup.js` which will step-by-step guide admins through the league creation process

## src/components/Calendars

This folder contains the different calendars that are used in the app

## src/components/Context

`AppContext.js` contains the global variables and functions used throughout the entire app

## src/components/Dashboards

This folder contains the different dashboards allowing the appropriate information to be shown on the page.  The dashboards render either the Admin, Coach, or Home dashboard

## src/components/LeagueSetupSchedule

The schedule creation algorithm that runs during the league setup process

# Frontend Dependencies

## Axios 
Javascript library used to make HTTP requests connecting frontend and backend

## Material UI
React components that use Google's Material Design

## React / ReactDOM
Fast, efficient, and scalable updating and rendering of the app

## React Autosuggest
Autosuggest component built in React 

## React Big Calendar
Calendar component built in React

## React Dnd
Addon to React Big Calendar allowing drag and drop functionality

## React Router
Standard routing library for React

# Third Party APIs

## Stripe

Powerful, clean, and seamless payment commerce solution

## Dark Sky

Advanced weather API allowing user to see their current weather data