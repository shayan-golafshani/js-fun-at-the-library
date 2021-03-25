function createTitle(bookName) {
return `The ${bookName}`;
}

function buildMainCharacter(name, age, pronouns) {
return character = {
  name: name,
  age: age,
  pronouns: pronouns,
  }
}

function saveReview(reviewMessage, reviewArray) {
  if (!reviewArray.includes(reviewMessage)) {
      reviewArray.push(reviewMessage);
  } else {}
  return reviewArray;
}


function calculatePageCount(bookTitle) {
  var bookTitleLength = bookTitle.length * 20;

  return bookTitleLength

  //return title.length * 20;
}

function writeBook(title, character, genre) {
  return book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
