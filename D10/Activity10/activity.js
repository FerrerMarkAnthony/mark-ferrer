function Book(title, author, genre) {
  let availability = true;

  this.getTitle = function () {
    return title;
  };

  this.getAuthor = function () {
    return author;
  };

  this.getGenre = function () {
    return genre;
  };

  this.isAvailable = function () {
    return availability;
  };

  this.borrowBook = function () {
    if (!availability) {
      throw new Error(`"${title}" is not available.`);
    }
    availability = false;
    console.log(`You have successfully borrowed "${title}"`);
  };

  this.returnBook = function () {
    if (availability) {
      throw new Error(`"${title}" is already returned.`);
    }
    availability = true;
    console.log(`"${title}" has been returned`);
  };

  this.displayInfo = function () {
    console.log(`Title: ${title}`);
    console.log(`Author: ${author}`);
    console.log(`Genre: ${genre}`);
    console.log(
      `Availability: ${availability ? "Available" : "Not Available"}`
    );
  };
}

function Library() {
  let books = [];

  this.addBook = function (title, author, genre) {
    const newBook = new Book(title, author, genre);
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author}`);
  };

  this.searchBook = function (title) {
    const book = books.find(
      (book) => book.getTitle().toLowerCase() === title.toLowerCase()
    );
    if (book) {
      book.displayInfo();
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  };

  this.searchTitleOfTheBook = function (title) {
    const book = books.find(
      (book) => book.getTitle().toLowerCase() === title.toLowerCase()
    );

    return book;
  };

  //   =================

  this.displayBooks = function () {
    console.log("Books in the library:");
    books.forEach((book) => {
      if (book.isAvailable()) {
        book.displayInfo();
        console.log("******************************");
      }
    });
  };

  // Borrow a book
  this.borrowBookByTitle = function (title) {
    const book = this.searchTitleOfTheBook(title);
    if (!book) {
      throw new Error(`Book titled "${title}" not found in the library.`);
    }
    book.borrowBook();
    book.displayInfo();
  };

  // Return a book
  this.returnBookByTitle = function (title) {
    const book = this.searchTitleOfTheBook(title);
    if (!book) {
      throw new Error(`Book titled "${title}" not found in the library.`);
    }
    book.returnBook();
    book.displayInfo();
  };

  //   ================
}

const library = new Library();

library.addBook(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  "Fantasy"
);

library.borrowBookByTitle("Harry Potter and the Philosopher's Stone");
