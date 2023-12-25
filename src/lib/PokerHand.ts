interface Card {
  suit: string;
  rank: string;
}

interface Obj {
  [key: string]: number
}
class PokerHand {
  constructor(public cards: Card[] ) {}

  getOutcome(){


    const hasOnePair = () => {
      const obj:Obj = {};
      for (const item of this.cards) {
        if (obj[item.rank] === undefined) {
          obj[item.rank] = 1;
        } else {
          obj[item.rank]++;
        }
      }
      return Object.values(obj).includes(2);
    };

    const hasTwoPairs = () => {
      const obj:Obj = {};
      for (const item of this.cards) {
        if (obj[item.rank] === undefined) {
          obj[item.rank] = 1;
        } else {
          obj[item.rank]++;
        }
      }
      const size = Object.values(obj).filter((item) => item === 2);
      return size.length === 2;
    };

    const threeOfKind = () => {
      const obj:Obj = {};
      for (const item of this.cards) {
        if (obj[item.rank] === undefined) {
          obj[item.rank] = 1;
        } else {
          obj[item.rank]++;
        }
      }
      const size = Object.values(obj).filter((item) => item === 3);
      return size.length !== 0;
    };

    const flush = () => {
      const obj:Obj = {};
      for (const item of this.cards) {
        if (obj[item.suit] === undefined) {
          obj[item.suit] = 1;
        } else {
          obj[item.suit]++;
        }
      }
      const size = Object.values(obj).filter((item) => item === 5);
      return size.length !== 0;
    };

    //

    if (flush()) {
      return 'Flush';
    }

    if (threeOfKind()) {
      return 'Three of a kind';
    }

    if (hasTwoPairs()) {
      return 'Two pairs';
    }
    if (hasOnePair()) {
      return 'One pair';
    } else {
      return 'Senior card';
    }
  }
}

export default PokerHand;