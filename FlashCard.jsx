// Flashcard.js
import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={toggleAnswer}>
      <div className={showAnswer ? 'front' : 'back'}>
        {showAnswer ? answer : question}
      </div>
    </div>
  );
}

export default Flashcard;
