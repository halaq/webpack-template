# 🚀 Welcome to my awesome webpack template!

This project has been created to show a simple welcome message only but the aim of it is to have a **webpack** code template that can be reused anytime later to generate an NPM package and a vanilla JS library from one source code. You can run the development env and use demo no. 1 (using React JS example) by:

```
npm install
npm run start
```

or run build for the production env and use demo no. 2 (using vanilla JS example):

```
npm install
npm run build
```

## Publish as NPM Package:

1. you need to have an npm account. Create one here if you don’t have one yet.
2. you need to login to your npm account through the command line. (You need to have Node and npm installed on your system before you perform this step. Install them here). You can now do npm Login and pusblish

```
npm login
npm publish — access public
```

## Publish as Github Package:

Github package repository is a software package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. You can publish npm, gem, mvn, nuget, gradle, docker packages and is currently in beta.

You can publish an npm package to the github package respository by changing the following in the `package.json` file:

```
"name": "@halaq/package-name",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
  "repository": {
    "url": "git+https://halaq@github.com/halaq/webpack-template.git"
  }
```

then login to the github npm registry by the following commands in the terminal:

```
npm login --registry=https://npm.pkg.github.com --scope=@halaq
```

@halaq is the username of your github account. Executing this query will ask for username and password. Username is your github username. Password is Personal Access Token which can be generated from your github account settings page.

Run npm publish command:

```
npm publish
```

This will publish the project as npm module to github repository. The github repository link is @halaq/webpack-template . The module will be published in the scoped mode.
