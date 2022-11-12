var Quotes = [
   "No matter how much you try, there will always be someone better than you",
   "Realistically, you will never truly master anything in your life",
   "You will always be a failure in someone else's eyes",
   "You are not a gift, only a mere product",
   "In comparison to the size of the human race, you are both small and insignificant",
   "Your legacy will probably not be remembered",
   "Happiness is only temporary, even the rich get bored",
   "Progress has no end goal",
   "Hey you, the one human out of the ~112,000,000,000 that have lived, what difference have you <em>really</em> made?",
   "Another time googling, huh? I guess I underestimated your hollowness",
   "Name one person whose life you have saved and saved alone",
   "You are a nothing but a number that contributes to the rich",
   "Before dreaming of helping others, why not fix yourself first",
   "Your existence costs 1.8 deaths per second",
   "When 13.8 billion years is put into one calendar year, humans don't appear until 10:48 pm on December 31",
   "In a thousand years, there will likely not even be a trace that you ever existed",
   "We are born, we grow, we learn, we work, and we die. All for nothing.",
   "Life is meaningless.",
   "Eventually, everything will come to an end",
   "Make Good Choices - Maya Vaghela",
   "Here is a useful website you might need <br> <a href='https://www.pointsincase.com/articles/how-commit-suicide-right-way'>How to commit suicide the right way</a>",
   "No one really cares until something dramatic happens",
   "Death can hapen at any time no matter how careful you are",
   "There are a few thousand healthy people out there expecting to wake up tomorrow morning but won't"
]

document.getElementById("SearchButton").addEventListener("click", SearchTheWeb);
document.getElementById("input").addEventListener("keydown", (event) => {if (event.key === 'Enter'){SearchTheWeb()}})
window.onload = randomline

function SearchTheWeb(){
    var query = document.getElementById("input")
    query = query.value

    if (query.trim() === ''){
        return
    }

    query = query.split(' ')

    var newquery = '';

    for(i of query){
        if(i == query[query.length-1]){
		    newquery += i
	    }
        
        else{
		    newquery += i.concat("+")
	    }
    }
    window.location.href = "https://www.duckduckgo.com/?q=".concat(newquery)
}

function randomline(){
    let random = Math.floor(Math.random() * Quotes.length)
    document.getElementById("Random_Line").innerHTML = Quotes[random]
}