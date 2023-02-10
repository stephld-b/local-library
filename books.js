function findAuthorById(authors, id) {
  const author = authors.find((author) => author.id === id);
  return author;
}

function findBookById(books, id) {
  const book = books.find((book) => book.id === id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) =>  book.borrows[0].returned === false); 
  const returnedBooks = books.filter((book) =>  book.borrows[0].returned === true);
  const allBooks = [borrowedBooks, returnedBooks];
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  const bookBorrowed = book.borrows.slice(0,10);
  let newAccounts = [];
  const borrowedBook = bookBorrowed.forEach((book) => {
    let account = findAccount(book.id, accounts); 
    account['returned'] = book.returned;
    newAccounts.push(account);
  });
return newAccounts;
}

function findAccount(bookID, accounts){ //helper funcion 
const account = accounts.find((account) => account.id === bookID);
return account;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
