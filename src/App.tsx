import './App.css';
import  './Card/Card.tsx';
import Card from './Card/Card.tsx';
import {useState} from 'react';
import CardDeck from './lib/CardDeck.ts';
import PokerHand from './lib/PokerHand.ts';

interface Foo {
  suit: string;
  rank: string;
}
function App() {
  const [cards, setCards] = useState<Foo[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const dealCards = () => {
    const newCardDeck = new CardDeck();
    const rndCards: Foo[] = newCardDeck.getCards(5);
    setCards(rndCards);
    const output = new PokerHand(rndCards);
    setAnswer(output.getOutcome());
  };

  if (cards.length) {
    return (
      <>
        <div className="playingCards faceImages">
          <Card rank={cards[0].rank} suit={cards[0].suit}/>
          <Card rank={cards[1].rank} suit={cards[1].suit}/>
          <Card rank={cards[2].rank} suit={cards[2].suit}/>
          <Card rank={cards[3].rank} suit={cards[3].suit}/>
          <Card rank={cards[4].rank} suit={cards[4].suit}/>
        </div>
        <button onClick={dealCards}>Deal cards</button>
        <div>
          {answer}
        </div>
      </>
    );
  } else {
    return (
      <>
        <button onClick={dealCards}>Deal cards</button>
      </>
    );
  }

}

export default App;
