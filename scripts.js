// Get elements
const bookForm = document.getElementById('bookForm');
const addBookBtn = document.getElementById('addBookBtn');
const books = document.querySelector('.books');





// Array that will hold all of the Book objects created by the user
let myLibrary = [];

// Constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
};

// Prototype that changes the read property
Book.prototype.changeStatus = function() {
    if (this.read == false) return this.read = true;
    return this.read = false;
}

function displayBook(myLibrary) {
    // For each object in myLibrary create a new book card displaying its information
    for (let i = 0; i < myLibrary.length; i++) {
        let inputValues = (Object.values(myLibrary[i]));
        console.log(inputValues);

        // Card div that will display each book
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        // Information inside of card div
        const bTitle = document.createElement('p');
        const bAuthor = document.createElement('p');
        const bPages = document.createElement('p');
        const bRead = document.createElement('label');
        
        // Edit book card information values
        bTitle.innerHTML = `Title: ${inputValues[0]}`;
        bAuthor.innerHTML = `Author: ${inputValues[1]}`;
        bPages.innerHTML = `Pages: ${inputValues[2]}`;
        if (inputValues[3] == true) bRead.innerHTML = 'Read: <input type="checkbox" checked>';
        else bRead.innerHTML = 'Read: <input type="checkbox">'
        
        // Append information to book card
        bookCard.appendChild(bTitle);
        bookCard.appendChild(bAuthor);
        bookCard.appendChild(bPages);
        bookCard.appendChild(bRead);

        // Append book card to books div
        return books.appendChild(bookCard);
    }
    return;
}

addBookBtn.addEventListener('click', addBookToLibrary);
// Takes user input and stores new book object into myLibrary array
function addBookToLibrary() {
    // temporary array for form values
    let valueArray = []; 
    // Get values of each input field
    const info = document.querySelectorAll('.info');
    info.forEach((e) => {
        if (e.type == 'checkbox') return valueArray.push(e.checked);
        return valueArray.push(e.value);
        // Create new Book object with these values
    });
    let book = new Book(valueArray[0], valueArray[1], valueArray[2]); 
    // If read is checked, change book status to read
    if (valueArray[3] == true) book.changeStatus();
    // Add new book to myLibrary array and send that array to the display function
    myLibrary.push(book);
    return displayBook(myLibrary);
};



