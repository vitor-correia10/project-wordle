import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserGuess from '../UserGuess';
import PrevGuesses from '../PrevGuesses';
import EndBanner from '../EndBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  //running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  const numberOfguesses = guesses.length

  function handleSubmitAnswer(guess) {
    const nextGuesses = [
      ...guesses,
      {
        guess,
        id: Math.random()
      }
    ]
    setGuesses(nextGuesses)
    
    if(guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED && guess !== answer) {
      setGameStatus('lost');
    }
  }

  return (
  <>
    <PrevGuesses guesses={guesses} answer={answer} setGameStatus={setGameStatus}/>
    <UserGuess 
      handleSubmitAnswer={handleSubmitAnswer} 
      gameStatus={gameStatus}
    />
    {
      gameStatus !== 'running' && 
      <EndBanner gameStatus={gameStatus} numberOfguesses={numberOfguesses}/>
    }
  </>
)}

export default Game;
