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
}
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.getKelvinTemp())

