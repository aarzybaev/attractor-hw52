import './App.css';
import  './Card/Card.tsx';
import Card from './Card/Card.tsx';
import {useState} from 'react';
import CardDeck from './lib/CardDeck.ts';
import PokerHand from './lib/PokerHand.ts';

interface CardInterface {
  suit: string;
  rank: string;
}
function App() {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const dealCards = () => {
    const cardDeck = new CardDeck();
    const rndCards: CardInterface[] = cardDeck.getCards(5);
    setCards(rndCards);
    const pokerHand = new PokerHand(rndCards);
    setAnswer(pokerHand.getOutcome());
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
        <button className="btn-deal" onClick={dealCards}>Deal cards</button>
        <p>Combination: <b>{answer}</b></p>
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
