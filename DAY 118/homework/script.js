// Base class representing a general library item
class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true;
    }
  
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`The item '${this.title}' has been borrowed.`);
      } else {
        console.log(`Sorry, '${this.title}' is currently not available.`);
      }
    }
  
    returnItem() {
      this.isAvailable = true;
      console.log(`The item '${this.title}' has been returned.`);
    }
  }
  
  // Subclass representing a Book
  class Book extends LibraryItem {
    constructor(title, year, author, genre) {
      super(title, year);
      this.author = author;
      this.genre = genre;
    }
  
    getSummary() {
      return `Book: ${this.title}\nAuthor: ${this.author}\nGenre: ${this.genre}\nYear: ${this.year}`;
    }
  }
  
  // Subclass representing a Magazine
  class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
      super(title, year);
      this.issueNumber = issueNumber;
    }
  
    getSummary() {
      return `Magazine: ${this.title}\nIssue Number: ${this.issueNumber}\nYear: ${this.year}`;
    }
  }
  
  // Test the system
  
  // Create instances of Book and Magazine
  let book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction");
  let magazine1 = new Magazine("National Geographic", 2024, 101);
  
  // Display details using getSummary
  console.log(book1.getSummary());
  console.log(magazine1.getSummary());
  
  // Test borrowing and returning items
  book1.borrowItem();  // Borrow the book
  book1.borrowItem();  // Try borrowing the book again (should show it's not available)
  
  magazine1.borrowItem();  // Borrow the magazine
  magazine1.returnItem();  // Return the magazine
  magazine1.borrowItem();  // Now, borrow it again (should be available)
  