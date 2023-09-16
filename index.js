// Your code here
class Cat {
    constructor (name, sex){
        this.name = name;
        this.sex = sex,
        this.language = `meow`,
        this.species = `cat`,
        this.speak = () => {
            
            if (this.sex === `female`){
            return `${this.name} says ${this.language}!`
            }
            else {
              return  `$It's me! ${this.name}, the ${this.species}`
            }
    }
  }
}

class Dog {
    constructor (name, sex){
        this.name = name;
        this.sex = sex,
        this.language = `woof`,
        this.species = `dog`,
        this.speak = () => {
            
            if (this.sex === `male`){
            return `${this.name} says ${this.language}!`
            }
            else {
              return  `It's me! ${this.name}, the ${this.species}!`
            }
    }
  }
}

class Bird {
    constructor (name, sex){
        this.name = name;
        this.sex = sex,
        this.language = `squawk`,
        this.species = `parrot`,
        this.speak = () => {
            
            if (this.sex === `female`){
            return `${this.name} says ${this.language}!`
            }
            else {
              return  `It's me! ${this.name}, the ${this.species}!`
            }
    }
  }
}
