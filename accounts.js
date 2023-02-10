function findAccountById(accounts, id) {
  const findAccount = accounts.find((account) => account.id === id);
  return findAccount;

}

function sortAccountsByLastName(accounts) {
    const sortAccount = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return sortAccount;
}

function getTotalNumberOfBorrows(account, books) {
  const getID = account.id;
  let totalBorrows = 0;
  const booksBorrowed = books.forEach((book) => {
      book.borrows.forEach((accounts) => {
      if(accounts.returned && accounts.id === getID) totalBorrows++;                        
       });
      
    });
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
    const getID = account.id;
    const allBooksBorrowed = [];
    const booksBorrowed = books.forEach((book) => {
      book.borrows.forEach((accounts) => {
      if(!accounts.returned && accounts.id === getID) allBooksBorrowed.push(book);                        
       });
    });
  let allBooksAndAuthor = allBooksBorrowed.map((book) => {
    return {...book, author: findAuthor(book, authors)};
  });
  return allBooksAndAuthor;
}

function findAuthor(book, authors){ //helper funcion to replace the author section
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
