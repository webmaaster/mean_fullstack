//Example-03
// ES 6
class Person {
  constructor(name, age){
    this.name = name
    this.age = age 

  }
  speak = function(){
    console.log("Hi, my name is", this.name)
  }
  static boring(){
    console.log("Hi, my name is not", this.name)
  }
}

class Mailman extends Person {
  constructor(name, age){
    super(name, age)
    this.salary = 15
  }
  job(){
    console.log('I am Mailman')
  }
  speak(){
    console.log('Neither snow nor rain can stop us')
  }
  get salary(){
    return this._salary

  }
  set salary(raise){
    if(raise < 25){
      this._salary = raise 

    }
  }
}

bob = new Mailman('bob', 12)
console.log(bob.salary)
bob.salary = 24.75
console.log(bob.salary)