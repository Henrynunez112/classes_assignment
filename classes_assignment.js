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
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
    isGood() {
        if (this.rating >= 7) {
            return true
        } else {
            return false
        }
    }
}
let novel = new Book ('The Catcher In The Rye', 'J.D. Salinger', 10)
let memoir = new Book ('Shoe Dog', 'Phil Knight', 5.5)
console.log(novel.isGood())

class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry
    }
    playFetch() {
        this.hungry = true; 
        this.mood = "playful"
        return "ruff"
    }
    feed() {
        if (this.hungry) {
            return "woof"
        } else if (this.hungry === false) {
        return "The dog doesn't look hungry"
        }
    }
    toString() {
        return `${this.name} ${this.breed} ${this.mood} ${this.hungry} `
    }
}

let puppy = new Dog("Charles", "Shibainu", "playful", true);
console.log(puppy.playFetch());



let freezingPoint = {
    celsius : 0,
    farenheit : 32,
    kelvin : 273
}

class Celsius {
    constructor(celsius) {
        this.celsius = celsius
    }
    getFahrenheitTemp(){
        return 1.8 * this.celsius + 32
    }
    getKelvinTemp(){
        return this.celsius + 273
    }
    isBelowFreezing(){
        if(this.celsius < freezingPoint['celsius']){
            return 'Bool'
        }
    }
}
let outsideTempt = new Celsius(-10)
console.log(outsideTempt.isBelowFreezing())

 class Movie {
     constructor(name, year, genre, cast, description){
         this.name = name;
         this.year = year;
         this.genre = genre;
         this.cast = cast;
         this.description = description;
     }
     blurb(){
        return `${this.name} came out in ${this.year} it was an ${this.genre} film starring ${this.cast} as ${this.description}`
     }
 }
 let joker = new Movie('Joker', 2019, 'suspence', 'Joaquin Phoenix','Arthur Fleck is a man struggling to find his way in Gotham’s fractured society. A clown-for-hire by day, he aspires to be a stand-up comic at night...but finds the joke always seems to be on him. Caught in a cyclical existence between apathy and cruelty, Arthur makes one bad decision that brings about a chain reaction of escalating events')
 console.log(joker.blurb())

 
 
 class Vector {
     constructor(x, y) {
         this.x = x;
         this.y = y;
     }
     plus(num) {
         let nX = this.x + num.x;
         let nY = this.y + num.y;
         let newAddVec = new Vector (nX, nY);
         return newAddVec

     }
     minus(min) {
         let newX = this.x - min.x;
         let newY = this.y - min.y;
         let newMinVec = new Vector (newX, newY);
         return newMinVec
     }
     getLength() {
         let vecX = Math.pow(this.x)
         let vecY = Math.pow(this.y)
         let newVec = Math.sqrt(vecX + vecY);
         return newVec

        
     }
 }

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
console.log(v1.minus(v2));
var v3 = new Vector(3, 4)
console.log(v3.getLength());