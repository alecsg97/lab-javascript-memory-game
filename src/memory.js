class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      let original = this.cards.length, shuffled, shuffler; 
      while (original) { 
        shuffler = Math.floor(Math.random()  * original--);
        shuffled = this.cards[original]; 
        this.cards[original] = this.cards[shuffler];
        this.cards[shuffler] = shuffled;
      } 
      return this.cards 
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true
      } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2){
    return true
    }      
    return false
  }
}
