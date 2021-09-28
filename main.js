// creating an endpoint for fetching the quotes 

var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

var newQuotebutton = document.querySelector('.new-quote');

//var Display = function(quote) {
var quoteText = document.querySelector(".quote-text");
//   quoteText.textContent = quote;}


newQuotebutton.addEventListener("click", function(event)
{
    fetch(endpoint)
    .then(function(response){
        return response.json();
        })
        .then(function(data){
            console.log(data.message);
            quoteText.textContent = data.message;
        })
        .catch(function () {
            console.log("An error occurred");
          });
});



