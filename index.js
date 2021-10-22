const commitBtn = document.getElementById('primary-btn');
const commitCard = document.querySelector('.card');
const boardCard = document.querySelector('.board');

function startTracking(){
    console.log('you clicked the button');
    commitCard.classList.add('close');
    boardCard.classList.add('open');
}
commitBtn.addEventListener('click', startTracking);

const inputtedNumber = document.getElementById('books');


// Array of motivational quotes
quotes = [
    "If a book is well written I always find it too short. (Jane Austen)",
    "Reading is a passport to countless adventures. (Mary Pope Osborne)",
    "You are never alone when lost in the magic of a book. (Mary Lu)",
    "Persistence can change failure into an extraordinary achievement. (Marv Levy)",
]

// Create tracks
// function createTracks(){
//     const main = document.querySelector('.main');
//     var newTrack = document.createElement('div');
//     newTrack.className = 'tracks';
//     var columnDiv = document.createElement('div');
//     columnDiv.className = 'column';
//     var daysDiv = document.createElement('div');
    // Create image tag
    // var toggleDiv = document.createElement('img');
    // toggleDiv.src = '../images/toggle.svg';
    // toggleDiv.className = 'toggle';
    // Build the DOM
    // columnDiv.appendChild(daysDiv);
    // columnDiv.appendChild(toggleDiv);
    // newTrack.appendChild(columnDiv);
    // main.appendChild(newTrack);
    // daysDiv.innerText = "Book 1";

    // Nested function: toggle DONE on btn
//     toggleDiv.onclick = function(){
//         toggleDiv.classList.add('done');
//         var quotesDiv = document.createElement('div');
//         quotesDiv.className = 'quotes';
//         newTrack.appendChild(quotesDiv);
//         var quoteElement = quotes[Math.floor(Math.random()*quotes.length)];
//         quotesDiv.innerText = quoteElement;
//     }
// }

// Upon loading the Tracking Board all tracks must be pre-loaded:
    // Days with Toggles in OFF setting
// The MotivationalQuotes div must be opaque by default
// Once the toggle is tapped as DONE
    // A motivational quote is generated to support the user
    // Only generated once
// Once the last toggle is tapped as DONE
    // A congrats modal comes up and button to go back to HOME