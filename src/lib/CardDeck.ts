import Card from './Card.ts';

interface CardInterface {
  suit: string;
  rank: string;
}

class CardDeck {
  public cardDeck: object[];

  constructor() {
    const suit = ['♦', '♥', '♣', '♠'];
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    this.cardDeck = [];

    for (const itemSuit of suit) {
      for (const itemRank of rank) {
        this.cardDeck.push(new Card(itemSuit, itemRank));
      }
    }
  }

  getCard() {
    const randomInteger = (min: number, max: number) => {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
    const randomCardNumber = randomInteger(0, this.cardDeck.length - 1);
    const extractedCard = this.cardDeck.splice(randomCardNumber, 1);
    return <CardInterface>extractedCard[0];
  }

  getCards(howMany: number) {
    const randomCards: CardInterface[] = [];
    for (let i = 0; i < howMany; i++) {
      randomCards.push(this.getCard());
    }
    return <CardInterface[]>randomCards;
  }
}

export default CardDeck;