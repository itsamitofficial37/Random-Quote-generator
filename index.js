const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// Random quote function 
function randomQuote (){
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes/data from the API and parsing it into website
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("Loading");
   });
}

// Sound Button
soundBtn.addEventListener("click",()=> {
    // for speech api 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

//Copy BUTTON
copyBtn.addEventListener("click",()=> {

    // Copy the quotes 
    navigator.clipboard.writeText(quoteText.innerText);
});

//Twitter Button
twitterBtn.addEventListener("click",()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank"); // for open new tab of twiiter 
});
quoteBtn.addEventListener("click",randomQuote);