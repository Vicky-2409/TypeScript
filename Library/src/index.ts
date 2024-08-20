class Person{
    constructor(public name:string,public id:number){}

    displayInfo(){
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}

class Member extends Person{
    private borrowedBooks:Book[] = [];

    borrowBook(book:Book){
        if(book.isAvailable()){
            book.borrow()
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`); 
        } else {
            console.log(`Sorry ${book.title} is not available `); 
        }
        
    }   

    returnBook(book:Book){
        const index = this.borrowedBooks.indexOf(book)
        if(index>-1){
            book.return()
            this.borrowedBooks.splice(index,1)
            console.log(`${this.name} returned the book ${book.title}`);
        } else {
            console.log(`${this.name} has not borrowed the book ${book.title}`);
            
        }   
    }
}

class Staff extends Person{

    addBook(book:Book,library:Library){
        library.addBook(book)
    }

    removeBook(book:Book,library:Library){
        library.removeBook(book)
    }
}

class Book{
    constructor(
        public title:string,
        public author:string,
        public isbn:number,
    ){}

    private available:boolean = true;

    borrow(){
        this.available = false
    }

    return(){
        this.available = true;
    }

    isAvailable(){
        return this.available;
    }
}

class Library{
        private books:Book[] = []
        private members:Member[] = []
        private staff:Staff[] = []


    addBook(newbook:Book){
        this.books.push(newbook)
    }

    removeBook(newbook:Book){
        const index = this.books.indexOf(newbook)
        this.books.splice(index,1)
    }


    addMember(newMember: Member){
        this.members.push(newMember)
    }

    addStaff(newStaff: Staff){
        this.staff.push(newStaff)
    }
    
    listBooks(){
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} ISBN:${book.isbn} - Available:${book.isAvailable()}`);
        })
    }

    listMembers(){
        this.members.forEach(member => {
            member.displayInfo()
        })
    }

    listStaff(){
        this.staff.forEach(member => member.displayInfo())
    }
}



const library = new Library();

const staff1 = new Staff("Staff1",1);

library.addStaff(staff1);


const member1 = new Member("Member1",2)
const member2 = new Member("Member2",3)

library.addMember(member1)
library.addMember(member2)


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456789)
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 987654321);


staff1.addBook(book1,library);
staff1.addBook(book2,library);

library.listBooks()

member1.borrowBook(book1)

library.listBooks()

member1.returnBook(book1)




library.listBooks()
library.listMembers()
library.listStaff()