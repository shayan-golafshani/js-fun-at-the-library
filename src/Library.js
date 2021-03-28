function createLibrary(name){

return library = {
    name:name,
    shelves:{
      fantasy:[],
      fiction:[],
      nonFiction:[],
    },
  }
}

function addBook(library, book){
  library.shelves[`${book.genre}`].push(book);
}


function checkoutBook(library, book, genre){

//check to see if the shelf is empty first or not
var isBookOnShelf = library.shelves[`${genre}`].length !== 0;

//If shelf is not empty then return the book
 if(isBookOnShelf) {
    library.shelves[`${genre}`].pop(book)
    return `You have now checked out ${book} from the ${library.name}`
} else {      //Otherwise tell patron the book is not available
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
