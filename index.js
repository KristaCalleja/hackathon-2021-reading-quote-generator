// List of congratulatory remarks
congratulatory = [ 
    "Well done!",
    "You got this!",
    "I knew you'd ace it!",
    "You can do anything you set your mind to!",
]
// Array of motivational quotes
quotes = [
    "A writer only begins a book. A reader finishes it. (Samuel Johnson)",
    "Reading is a passport to countless adventures. (Mary Pope Osborne)",
    "You are never alone when lost in the magic of a book. (Mary Lu)",
    "Persistence can change failure into an extraordinary achievement. (Marv Levy)",
]
const commitBtn = document.getElementById('primary-btn');
const commitCard = document.querySelector('.card');
const boardCard = document.querySelector('.board');
const userInput = document.getElementById('books');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const congratulatoryRemarks = document.getElementById('congratulatory');
const quotation = document.getElementById('quotes');
// Move from intro card to the tracking board
function startTracking(){
    commitCard.classList.toggle('card-inactive');
    boardCard.classList.toggle('board-active');
}
function numberOfBooksToRead(){
    console.log(userInput.value);
    let timesToCreateTracks = userInput.value;
    while (timesToCreateTracks > 0){
        createTracks();
        timesToCreateTracks--;
    }
}
// Pre-load tracks according to user value input
function createTracks(){
    var newTrack = document.createElement('div');
    newTrack.className = 'track';
    var booksDiv = document.createElement('div');
    booksDiv.className = 'books';
    var iconDiv = document.createElement('div');
    iconDiv.className = "icondiv";
    // Create image tag
    var icon = document.createElement('img');
    icon.src = './images/book-to-read.svg';
    icon.className = 'toggle';
    // Build the DOM
    boardCard.appendChild(newTrack);
    newTrack.appendChild(booksDiv);
    newTrack.appendChild(iconDiv);
    iconDiv.appendChild(icon);
    booksDiv.innerText = "Book";
    // Nested function: toggle READ on tapping book
    iconDiv.onclick = function(){
        icon.src = './images/book-finished.svg';
        iconDiv.classList.add('read');
        // Populate the modal with remarks and quotes
        var remarks = congratulatory[Math.floor(Math.random()*congratulatory.length)];
        congratulatoryRemarks.innerHTML = `${remarks}`;
        var quotationRemarks = quotes[Math.floor(Math.random()*quotes.length)];
        quotation.innerHTML = `${quotationRemarks}`;
        // Show the modal
        modalOuter.classList.add('open');
        modalOuter.addEventListener('click', function(event){
            console.log(event);
        })
    }
}
commitBtn.addEventListener('click', function(event){
    event.preventDefault();
    startTracking();
    numberOfBooksToRead();
});
// Upon loading the Tracking Board all tracks must be pre-loaded
    // Days with Toggles in OFF setting
// Once the toggle is tapped as DONE
    // The book is closed and changed to green
    // The modal is generated once
    // Populate the modal with remarks and quotes