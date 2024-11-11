import React from 'react';

function EndBanner({gameStatus, numberOfguesses}) {
  const sadEnd = gameStatus === 'lost'
  const running = gameStatus === 'running'
  return (
      sadEnd && !running ? (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
        </div>
      ) : (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numberOfguesses} guess{numberOfguesses > 1 ? 'es' : ''}</strong>.
          </p>
        </div>
      )
  );
}

export default EndBanner;
