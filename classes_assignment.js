class Person {
    constructor(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
    }
    fullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}
let female = new Person ('Jackie', 'Jones', 'Jillien')
let male = new Person('James', 'Johnson', 'Jacob')
console.log(female.firstName)
console.log(male.fullName())
console.log(female.fullName())

class Book {
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
    isGood(rating) {
        if(rating >= 7) {
            return true
        }else{
            return false
        }
    }
}
let novel = new Book ('The Catcher In The Rye', 'J.D. Salinger', 10)
let memoir = new Book ('Shoe Dog', 'Phil Knight', 5.5)
console.log(novel.isGood(memoir.rating))

