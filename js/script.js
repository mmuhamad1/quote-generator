/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

var quotes = ['I believe I can fly', 'We will either find a way, or make one',
'Indeed, in the rememberance of Allah to hearts find rest']



/***
 * `getRandomQuote` function
***/

var getRandomQuote = function() {
  var index = Math.floor(Math.Random() * quotes.length)

  var quote = quotes[index]
}

/***
 * `printQuote` function
***/

var printQuote = function() {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);