const library = document.querySelector('.library');
const ptag = document.createElement('p');

let myLibrary = [];

// Constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const book1 =  new Book("The 48 Laws of Power", "Robert Greene", 450);
const book2 =  new Book("The 48", "Robert", 45);


function addBookToLibrary(myLibrary) {
   // do stuff here
}
