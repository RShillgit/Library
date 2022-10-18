let myLibrary = [];

// Constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}
Book.prototype.addToMyLibrary = function() {
    myLibrary.push(this);
    console.log(myLibrary);
}

const book1 =  new Book("The 48 Laws of Power", "Robert Greene", 450);
const book2 =  new Book("The 48", "Robert", 45);

book1.addToMyLibrary();
book2.addToMyLibrary();

myLibrary.forEach(addBookToLibrary);
function addBookToLibrary() {
    // Display book on web page
}
