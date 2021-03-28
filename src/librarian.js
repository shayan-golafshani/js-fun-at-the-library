class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name,isMorning){
    if(isMorning){
      return `Good morning, ${name}!`
    } else {
        return `Hello, ${name}!`
    }
  }


  // const keys = Object.keys(fruits)
  // for (const key of keys) {
  //   console.log(key)
  // }

  findBook(title){
    //console logging to deconstruct the object
    //console.log(this.library.shelves)
    // console.log(this.library.shelves.nonFiction)
    // console.log(this.library.shelves.fiction)
    // console.log(this.library.shelves.fantasy)

    //declare boolean to keep track of if the library has book on shelf
    var hasBook = false;

      //declare a constant of the keys inside the shelves.
      const keys = Object.keys(this.library.shelves)
      //loop through the various and access the different shelves
      for(const key of keys){
        //check that the shelf is not empty and that it contains a mtaching title
        if(this.library.shelves[key].length !== 0  && this.library.shelves[key][0].title === title){
            //assign the tracker boolean to true and pop the book off the shelf
            hasBook = true;
            library.shelves[key].pop(book)
            return `Yes, we have ${title}`
          }
      }
      // if flag is false, tell patron we don't have the book
      if (hasBook === false){
        return `Sorry, we do not have ${title}`
      }
  }

  calculateLateFee(daysLate){
    return Math.ceil(daysLate * 0.25)
  }

}

module.exports = Librarian;
