import React from 'react';
interface Props extends React.PropsWithChildren {
  rank: string;
  suit: string;
}

interface Suit {
  [key: string]: string
}

const Card: React.FC<Props> = props => {
  const suit: Suit = {
    '♦': 'diams',
    '♥': 'hearts',
    '♣': 'clubs',
    '♠': 'spades'
  };

  const rank = props.rank.toString().toUpperCase();
  const cardClassName = `card rank-${props.rank} ${suit[props.suit]}`;

  return (
    <span className={cardClassName}>
      <span className="rank">{rank}</span>
      <span className="suit">{props.suit}</span>
    </span>
  );
};

export default Card;