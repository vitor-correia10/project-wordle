import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers'

function Guess({value, answer}) {
  const result = value && checkGuess(value.guess, answer)

  return ( 
    <p className="guess">
      {range(5).map((num) => (
        <span 
          className={`cell ${result && result[num].status}`} 
          key={num}
        >
          {
            value && value.guess ? value.guess[num] : undefined
          }
        </span>
      ))}
    </p>
  );
}

export default Guess;
