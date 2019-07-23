/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Andy Tuinstra
******************************************/

//the array of qoutes
var quotes = [
  {
      quote: 'The way to get started is to quit talking and begin doing.',
      source: 'Walt Disney',
  },
  {
      quote: 'Life is what happens when you\'re busy making other plans.',
      source: 'John Lennon',
      citation: 'Beautiful Boy (Darling Boy)',
      year: 1980
  },
  {
      quote: 'Life is 10% what happens to you and 90% how you react to it',
      source: 'Charles R. Swindoll',
  },
  {
      quote: 'I like friends who have independent minds because they tend to make you see problems from all angles.',
      source: 'Nelson Mandela',
      year: 1975
  },
  {
      quote: 'Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.',
      source: 'Richard Bach',
      citation: 'Illusions, The Adventures of a Reluctant Messiah',
      year: 1977
  },
  {
    quote: 'Go to the edge of the cliff and jump off. Build your wings on the way down.',
    source: 'Ray Bradburry',
    citation: 'Brown Daily Herald',
    year: 1995
  },
  {
    quote: 'Your friend is that man who knows all about you, and still likes you.',
    source: 'Elbert Hubbard',
    citation: 'The Note Book',
    year: 1927
  },
  {
    quote: 'Drawing is the honesty of the art. There is no possibility of cheating. It is either good or bad.',
    source: 'Salvador Dalí',
  },
  {
    quote: 'Not the power to remember, but its very opposite, the power to forget, is a necessary condition for our existence.',
    source: 'Sholem Asch',
    citation: 'The Nazarene',
    year: 1939
  }
];


//generates the qoutes from the array at random
function getRandomQuote() {
  let generateQuote = Math.floor(Math.random() * quotes.length);
  return quotes[generateQuote]
};

//creates a randomly generated color
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    return color;
};

//funtion to print the qoute
function printQuote() {
  let current = getRandomQuote();
  let html = '<p class="quote">' + current.quote + '</p>' + '<p class="source">' + current.source

      //adds citation if true
      if ("citation" in current) {
          html += '<span class="citation">' + current.citation + '</span>'
      }; 
      //adds year if true
      if ("year" in current) {
          html += '<span class="year">' + current.year + '</span>'
      }
      html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  return html;
};

//calls the getRandomColor function and assigns it to body and loadQuote id's
function newBackground() {
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById('loadQuote').style.backgroundColor = getRandomColor();
};

//changes qoute and background color after 4 seconds
setInterval(printQuote, 4000)
setInterval(newBackground, 4000)

//changes quote and color when button is clicked
document.getElementById('loadQuote').addEventListener("click", newBackground, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);