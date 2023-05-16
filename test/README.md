# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## To deploy a full-stack application, including both the Angular frontend and Express backend, to a platform like Heroku, you can follow these general steps:

## Set up a Heroku account: If you don't have a Heroku account, go to the Heroku website (https://www.heroku.com/) and sign up for a free account.

## Install the Heroku CLI: Download and install the Heroku CLI (Command Line Interface) appropriate for your operating system. The CLI allows you to interact with Heroku from the command line.

## Prepare your Angular app for deployment:

Build your Angular app: In your Angular project directory, run ng build --prod to build the production-ready version of your Angular application. This will generate the optimized build files in the dist directory.
Create a static.json file: Create a file named static.json in the root of your Angular project directory. This file will specify the root directory for serving the static files on the Heroku platform. Add the following content to the static.json file:
json
Copy code
{
  "root": "dist/your-angular-project-name"
}
Replace "your-angular-project-name" with the actual name of your Angular project.
## Set up your Express server for deployment:

Make sure you have a start script defined in your package.json file to start your Express server. The start script should point to the entry file of your server code.
Ensure that your Express server is listening on the port provided by Heroku's environment variable. You can use process.env.PORT to access the port dynamically.
## Initialize a Git repository: Initialize a new Git repository in the root of your project if you haven't already. Run the following commands:

bash
Copy code
git init
git add .
git commit -m "Initial commit"
Log in to Heroku CLI: Open a terminal or command prompt, and log in to your Heroku account using the Heroku CLI by running heroku login.

Create a new Heroku app: Run heroku create in the terminal to create a new Heroku app. This will generate a unique app URL for your application.

## Deploy your application:

Set up Heroku to use the correct buildpacks: Run the following commands in the terminal:
bash
Copy code
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
Deploy your code: Run git push heroku master to deploy your code to Heroku.
Open the deployed app: Run heroku open to open your application in a browser
