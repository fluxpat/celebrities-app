## Introduction

A basic React application which links to a JSON store of 200 celebrities and their popularity ratings by fans around the world.
This application was designed with the intention to practise React Hooks, specifically the useState hook and other core React theory.

## Installation and execution

```
$ npm install
$ npm start
```

## Instructions

### Iteration 1 | Display 5 Contacts

Let's take a look at the starter code.

Inside `src` folder, we can find `contacts.json`, a JSON file with the producer's contacts. Import this file and **create an array of the 5 first contacts** to use as your initial state.

Display that array of 5 contacts in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

To import `contacts.json` in `App.js`, you can simply use:

```js
import contacts from './contacts.json'
```

At the end of this iteration, your application should look like this:

![Screenshot](https://i.imgur.com/fPuwZXv.png)


### Iteration 2 | Add New Random Contacts

In your application, create a *Add Random Contact* button so that every time you click on this button, it adds a new random actor.

First, randomly select a contact from the larger `contacts` array. Then add that contact to the array that lives in your state (that's the previously created array of 5). Don't forget to `setState()` to cause React to re-render the app.

At the end of this iteration, your website will probably look like this:

![Screenshot](https://i.imgur.com/GuNyYiU.png)


### Iteration 3 | Sort Contacts By Name And Popularity

The producer asked you to add two new buttons to help them sort their contacts. When you click on one of the buttons, it should **sort the table by `name`** (alphabetically) and when you click the other, it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://i.imgur.com/vUDGZ7Y.png)


### Iteration 4 | Remove Contacts

The producer also would like to remove some of their contacts. Implement a *Delete* button on each row of your `<table>` that will let the user remove the contact they clicked.

When they click, you should get the index of the array of that actor and use it to remove the contact from the array. Don't forget to `setState()` after you remove the contact!

At the end of this iteration, your app may look like this (after playing a little bit with the *Delete* button):

![Screenshot](https://i.imgur.com/N3K1K1k.png)


### Iteration 5 | Bonus | Styling

Unfortunately, this contact list isn't production ready. This is the movie business! It has to sparkle! Add some beautiful CSS to make the app "pop". 


Happy coding! :heart:
