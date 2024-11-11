import React from 'react';

function UserGuess({handleSubmitAnswer, gameStatus}) {
  const [userAnswer, setUserAnswer] = React.useState('');

  function handleGuess(e) {
    e.preventDefault();
    if(userAnswer.length < 5){
      window.alert('Should be 5 characters');
      return
    }
    
    handleSubmitAnswer(userAnswer);
    setUserAnswer('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        required
        minLength={5}
        maxLength={5}
        id="guess-input" 
        type="text" 
        value={userAnswer} 
        onChange={(event) => {
          const nextAnswer = event.target.value.toUpperCase();
          setUserAnswer(nextAnswer)
        }}
      />
    </form>
  )
}

export default UserGuess;
