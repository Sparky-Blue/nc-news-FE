# North Coders News Front End project

Front End for Northcoders News, a Reddit style social news aggregation site developed with React.

A deployed version can be found at - http://goofy-bose-2f8a64.netlify.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Setup

You will need Node.js, npm and git installed before being able to run this project.

### Installing

Clone the repository to a directory on your local machine:

```js
git clone https://git@github.com:Sparky-Blue/nc-news-FE.git
```

Open the directory and install it’s dependencies:

```js
cd nc-news-FE
npm i
```

To start a development environment:

```js
npm run start
```

This will launch a server which will run on http://localhost:3000 and live version of your app, you can make changes to your code and on save these changes will be reflected on the live page.

## Deployment

To deploy I recommend netlify.

To install:

```js
npm i netlify
```

Create a build package from the project, navigate to your project directory:

```js
cd nc-news-FE
npm run build
```

To deploy

```js
netlify deploy
```

Enter the build folder when prompted.

### Built With

React JS - front end framework
CSS

### Authors

Clare Pickering

### Acknowledgments

Facebook

Reddit
