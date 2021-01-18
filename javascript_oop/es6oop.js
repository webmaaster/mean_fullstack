// ES5
/*function personmaker(name, age) {
  this.name = name
  this.age = age 

}
bob = new personmaker('bob', 12)
console.log(bob)

*/
//Example -02
// ES 6
class Person {
  constructor(name, age){
    this.name = name
    this.age = age 

  }
}
bob = new Person('bob', 12)

console.log(bob)

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
bob = new Person('bob', 12)

console.log(bob)