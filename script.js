  let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  let quotesData
  
  let currentQuote = ''
  let currentAuthor = ''
  
  let colors = [
  '#16a185',
  '#17a160',
  '#1c3150',
  '#139112',
  '#17413c',
  '#1b51b6',
  '#1B6164',
  '#142124',
  '#172132',
  '#1DB199',
  '#17B1A9',
  '#13A157'
]

  let accessQuotes = () => {
  return $.ajax({
    url,
    success: function (items) {
      if (typeof items === 'string') {
        quotesData = JSON.parse(items);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}
  
  let getRandomNumber = () => {
    return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
    ]
  }
  
  let getQuote = () => {
    let randomQuotes = getRandomNumber()
    let randomColor = Math.floor(Math.random() * colors.length)
    
    currentQuote = randomQuotes.quote
    currentAuthor = randomQuotes.author
    
    $('#text').text('" ' + randomQuotes.quote + ' "')
    $('#author').text('- ' + randomQuotes.author)
    
    $('html body').animate({
      backgroundColor: colors[randomColor],
      color: colors[randomColor]
    })
    
    $('button').animate({backgroundColor: colors[randomColor]})
    $('#tweet-quote').animate({backgroundColor: colors[randomColor]})
    
  }

$(document).ready(function() {
  accessQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
  
});
  


  
