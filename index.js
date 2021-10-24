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
const commitBtn = document.getElementById('commit');
const commitCard = document.querySelector('.card');
const boardCard = document.querySelector('.board');
const userInput = document.getElementById('books');
const modalOuter = document.querySelector('.modal-outer');
const retakeOuterModal = document.querySelector('.modal-outer-retake');
const retakeInnerModal = document.querySelector('.modal-inner-retake');
const modalInner = document.querySelector('.modal-inner');
const closeModal = document.getElementById('close');
const congratulatoryRemarks = document.getElementById('congratulatory');
const quotation = document.getElementById('quotes');
const resetBtn = document.getElementById('reset');
// Move from intro card to the tracking board
function startTracking(){
    commitCard.classList.toggle('card-inactive');
    boardCard.classList.toggle('board-active');
}
function numberOfBooksToRead(){
    console.log(userInput.value);
    let timesToCreateTracks = userInput.value;
    // if (userInput.value > 4){
    //     // Show the modal
    //     retakeOuterModal.classList.add('open');
    // } 
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
        function closeModal(){
            modalOuter.classList.remove('open');
        }
        modalOuter.addEventListener('click', function(event){
            const isOutside = event.target.closest('.modal-inner');
            if (isOutside || closeModal.onclick){
                    closeModal();
                }
            })
            window.addEventListener('keydown', event => {
                 if(event.key === 'Escape'){
                    closeModal();
                }
            });
        };
}
commitBtn.addEventListener('click', function(event){
    event.preventDefault();
    startTracking();
    numberOfBooksToRead();
});
resetBtn.addEventListener('click', function(){
    window.location.reload(true);
});