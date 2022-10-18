// Get elements
const bookForm = document.getElementById('bookForm');
const addBtn = document.getElementById('addBtn');
const addBook = document.getElementById('addABook');
const books = document.querySelector('.books');

const addBookDiv = document.querySelector('.addBook');
addBookDiv.style.display = "none"

// Array that will hold all of the Book objects created by the user
let myLibrary = [];

// Constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.displayed = false;
};

// Prototype that changes the read property
Book.prototype.changeStatus = function() {
    return this.read = !this.read;
};
// Prototype that changes displayed property
Book.prototype.changeDisplayed = function() {
    return this.displayed = !this.displayed;
};

function displayBook(myLibrary) {
    myLibrary.forEach((object) => {
        // If the object is displayed already return, else display its information
        if (object.displayed) return;
    
        object.changeDisplayed();

       // Card div that will display each book
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        // Information inside of card div
        const bTitle = document.createElement('p');
        const bAuthor = document.createElement('p');
        const bPages = document.createElement('p');

        // Read status and button to switch status
        const readStatus = document.createElement('div');
        readStatus.classList.add('readStatus');
        const bRead = document.createElement('label');
        const bReadInput = document.createElement('input');
        bReadInput.type = "checkbox"
        bReadInput.disabled
        bRead.innerHTML = 'Read: ';
        bRead.appendChild(bReadInput);
        const bReadSwitch = document.createElement('button');
        bReadSwitch.innerHTML = 'Switch';
        
        bReadSwitch.addEventListener('click', () => {
            return bReadInput.checked = !bReadInput.checked
        });
        readStatus.appendChild(bRead);
        readStatus.appendChild(bReadSwitch);
    
        // Remove Book button
        const bRem = document.createElement('button');
        bRem.innerHTML = "Remove Book"
        bRem.addEventListener('click', () => {
            myLibrary.splice(object, 1);
            return bookCard.remove();
        });

        // Edit book card information values
        bTitle.innerHTML = `Title: ${object.title}`;
        bAuthor.innerHTML = `Author: ${object.author}`;
        bPages.innerHTML = `Pages: ${object.pages}`;
        if (object.read == true) bReadInput.checked = true;

        // Append information to book card
        bookCard.appendChild(bTitle);
        bookCard.appendChild(bAuthor);
        bookCard.appendChild(bPages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(bRem);

        // Append book card to books div
        return books.appendChild(bookCard);
    });
};

addBtn.addEventListener('click', addBookToLibrary);
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

// Function that displays the add book form when you click add book
addBook.addEventListener('click', () => {
    if(addBookDiv.style.display === "none") {
        console.log('click')
        return addBookDiv.style.display = "block";
        
    }
    else return addBookDiv.style.display = "none";
});

