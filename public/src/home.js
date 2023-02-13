function getTotalBooksCount(books) {
  const totalBooks = books.reduce((counter, book) => {
    if(book) counter+=1;
    
    return counter;
  }, 0);

  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for(let account in accounts){
    totalAccounts++;
  }
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let totalBooksCheckedOut = 0;
  const booksBorrowed = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(!borrow.returned) {
        totalBooksCheckedOut++;
      }
      });
  });
  return totalBooksCheckedOut;
}

function getMostCommonGenres(books) {
  const bookResult = [];
  const bookGenre = books.map((book) => book.genre);
  const bookObject = bookGenre.map((genre) => {
    const genreType = bookResult.findIndex((item) => item.name === genre);
    if(genreType >=0) bookResult[genreType].count++;
    else bookResult.push({name: genre, count: 1});
    
  });
  
  bookResult.sort((a, b) => b.count - a.count)
  bookResult.length = 5;
  return bookResult;
}

function getMostPopularBooks(books) {
  const bookPopular = books.map((book) => ({name: book.title, count: book.borrows.length}));
  bookPopular.sort((a, b) => b.count - a.count)
  const bookResult = bookPopular.slice(0, 5); //slice
  return bookResult;
}

function getMostPopularAuthors(books, authors) {
 const authResult = [];
 const product = authors.forEach((author) => {
const authorName = findAuthor(author);

let eachAuthor = {
  name: authorName,
  count: 0
};

    const authObject = books.forEach((book) => {
      let num = book.borrows.length;
      if(book.authorId === author.id ) {
        eachAuthor.count += num;
      }
      
      });
      authResult.push(eachAuthor);
    });

  authResult.sort((a, b) => b.count - a.count);
  const authSliced = authResult.slice(0,5);
  return authSliced;
}

function findAuthor(author){ //helper funcion to get authors name
  const authorName = {name:{first}, name:{last}} = author;
  const authorGetName = `${first} ${last}`;
  return authorGetName;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
