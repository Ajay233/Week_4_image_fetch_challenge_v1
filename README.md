# Image fetch challenge (including setting up a React project from scratch) V1

The aim of this project was to create an app to fetch images and display them neatly on the page.  The MVP was as follows:
- Allow the user to search for images
- Implement an API call to facilitate the search
- Save the results in the app state
- Allow the user to perform subsequent network requests
- Add the subsequent results below the original request

## Reference material used

- This app makes requests to the Unsplash API (https://unsplash.com/) to search and retrieve images.  Here is a link to their documentation if you are interested in using the API https://unsplash.com/documentation.

- The guide used to set up the app from scratch can be found at: https://jscomplete.com/learn/1rd-reactful

<b>N.B</b> - The code for the server differs from the tutorial because the tutorial server is being set up for server side rendering.  I have set up the server so it uses the `index.html` file and the `bundle.js` file from the `dist` folder instead as this is more in line with a create-react-app.  Similarly I user `ReacDOM.render()` instead of `ReactDOM.hydrate()` in the `index.js` file because hydrate is used in server side rendering.

##  Running the app

- Clone this repository
- Run `npm install`
- Open the project in a 2nd terminal
- In one terminal run `npm run dev-bundle` to bundle the files ready for use in the browser
- In the second terminal run `npm run dev-server` to start the server on port 3000
- Open your browser and go to `http://localhost:3000/`

<b>N.B</b> - to make network requests using the app, you will need to set up a free Unsplash account to get an API key (see https://unsplash.com/documentation#creating-a-developer-account).  Then follow the steps below:

- Create a folder called `properties` in the `components` folder so your folder structure should be (src/components/properties)
- Create a file called `properties.js` in properties folder
- Add the following code to the file:


## Creating the React app from scratch

A secondary (optional) task to this challenge was to set up the react app from scratch, not using `create-react-app`.  For this version of the app I created the base app using the following steps:


### 1 - Initialise a new project by creating a package.json file

- Run `npm init`
- You can then personlise your app by running through the questions.  If you want to skip a question and go with the default just press `enter`.

<b>N.B</b> - if you want to go with the defaults for all attributes, you can just run `npm init -y` to generate a package.json with all default values.


### 2 - Install the following dependencies

- @babel/node
- @babel/plugin-proposal-class-properties
- @babel/preset-env
- @babel/preset-react
- babel-loader`
- css-loader
- express
- react
- react-dom
- style-loader
- webpack
- webpack-cli


### 3 - Install the following dev dependencies

- babel-eslint
- eslint
- eslint-plugin-react
- nodemon


### 4 - Set up the folder structure of the app

```
|- dist
|- public
    |-index.html
|- src
    |-components
        |-app.js
    |-server
        |-server.js
    |-index.js

```

### 5 - Setup eslint config

- Create a file, in the root of your app, called `.eslintrc.js`
- Add the following config to the file:

```
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmafeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // Customisation can be set here
  }
}
```

### 6 - Setup the Babel config

- Create a file, in the root of your app, called `.babel.config.js`
- Add the following config to the file:

```
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
};
```

### 7 - Setup the webpack config

- Create a file, in the root of your app, called `webpack.config.js`
- Add the following config to the file:

```
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    // We invoke babel on any file that ends in .js before webpack includes them in the bundle
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

### 8 - Setup the express server

- Add the following to the `server.js` file:

```
const express = require('express');
const port = 3000;

const app = express();

app.use(express.static("public"));
app.use(express.static('dist'));


app.listen(port, () => {
  console.log("Dev server up and running on PORT:3000");
});
```

### 9 - Set up the npm scripts

- Add the lines below to the scripts object in your package.json file.

```
"dev-server": "nodemon --exec babel-node src/server/server.js --ignore dist/",
"dev-bundle": "webpack -w --mode=development"
```
