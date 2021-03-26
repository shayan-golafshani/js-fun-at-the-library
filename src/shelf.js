function shelfBook(book, shelf) {
if(shelf.length < 3){
  return shelf.unshift(book)
} else {}
}

function unshelfBook(book, shelf){
// loop through shelf array and find the spot in the array
// that corresponds to the book title
//Then splice out the object at that index in shelf.
  for(var i = 0; i < shelf.length; i++){
    if (shelf[i].title === book) {
      shelf.splice(i,1)
    }
  }
}

function listTitles(shelf){
  var titles =[]

  for(var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
}

//console.log(titles.toString());
// adds a space between the commas to make it pass the test cases
  return titles.toString().replace(/,/g, ', ');
}


function searchShelf(shelf, book){

  var isOnShelf = false;

  for(var i = 0; i < shelf.length; i++){
    if(shelf[i].title === book) {
        isOnShelf = true;
    }
  }
  return isOnShelf;
  //
  // shelf.indexOf()
  //
  // if(shelf.indexOf(book) !== -1){
  //   return true;
  // } else {
  //   return false;
  // }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
