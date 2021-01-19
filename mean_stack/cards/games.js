//cards 
    //have a suits
    //each suit has 13 01234 .... jack
class Card{
  constructor(suit, value){
    this.suit = suit 
    this.value = value  
  }

  get value(){
    if(this._value === 'ace'){
      return 11
    }else if(this._value === 'jack' || this._value === 'queen' || this._value === 'king'){
      return(10)
    }else{
      return _value 
    }
  }
}

card1 = new Card('spades', 8)
console.log(card1.value)
//dealer
  //has no choice
//player
    //has a choice to hit or stand


//deck
    //has 1 of each card
