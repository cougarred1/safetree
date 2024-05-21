# Greenfield: Safe-Tree Application

![Safe-Tree-Logo](client/style/logo.png)

### SafeTree

> SafeTree is a play on the word 'safety' for user's that enjoy the outdoors!

### Features

<li>View hiking opportunities
<li>Identify harmful/helpful plants
<li>Identify local animals
<li>Share experiences!

### What frameworks/libraries are used

#### Tech Stack

<ins>_**Client:**_</ins> -> React (Hooks) & Axios\
<ins>
_**Server:**_</ins> -> Express\
<ins>
_**Database:**_ </ins>-> Mysql/Sequelize\
<ins>
_**Authentication:**_</ins> -> Passport (Google Strategy)\
<ins>
_**Style:**_ </ins>-> Material UI

### What software is required to run

> NPM was used to installed the necessary dependencies for this project.

<li> NPM
<li> Node 20.12.2

> The Database was built using MySql and the Sequelize ORM.

<li> MySql
<li> Sequelize

> The Client side was created with React hooks

<li> React
<li> React-router
<li> React-dom
<li> React-router-dom

> Axios was used to communicate with the Server from our Client side.

<li> Axios

> Express on the Server side to handle all request handling

<li> Express
<li> Express-session

> For errors and specific syntax rules we utilized ESLint with Airbnb rules.

<li> ESLint (Airbnb Rules)

> Transpiling was performed from Babel plugins to create compatible code for older browsers.

<li>@babel/core
<li>@babel/preset-env
<li>@babel/preset-react
<li>babel-loader

> Bundling for optimization performed by Webpack

<li> Webpack
<li> Webpack-cli
<li> Webpack-dev-server

> The Prettier formatter to maintain clean code for all developers involved

<li> Prettier

> Styling created using Material UI and emotion

<li>@emotion/react
<li>@emotion/styled
<li>mui/material

> Lastly for Authentication was performed with the use of Passport and the Google Strategy

<li> Passport
<li> Passport-google-oauth20

### What commands to use to Start

1: **Start MySql** server/service\
<ins>MAC - Homebrew</ins>\
mysql.server start

<ins>Windows/WSL</ins>\
sudo service mysql start

2: **npm start**: Start the server utilizing _Nodemon_ (1 terminal sustained)

3: **npm run build**: Start the transpiling & bundling process and continuously runs while developing until stopped. (1 Terminal sustained)

4: **mysql -uroot** -> **create database safetree**: Create a local _safetree_ database to store data.

5: **npm run seed**: Create fake data to test operations throughout the development process.

6: **Restart server** so the database can accept the seed data

### Closing

> We would like to continue working on what we have initially created in order to learn more and grow experiences!

### Authors & acknowledgements:

`Operation Spark instructors` & `Cody D. Allyn M. Mike S. Darius C. Rodman L.`
