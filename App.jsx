import React, { useState } from 'react';
import './App.css';
import Flashcard from './component/FlashCard';

function App() {
  const flashcards = [
    {question: 'Start', answer : ''},
    { question: 'Python', answer: 'A high-level, versatile programming language known for its readability and simplicity, suitable for a wide range of applications, from web development to data analysis' },
    { question: 'JavaScript', answer: 'A widely-used scripting language for web development, enabling dynamic and interactive content in web browsers.' },
    { question: 'Java', answer: 'An object-oriented, platform-independent language often used for building enterprise-level applications, mobile apps (Android), and web services.' },
    { question: 'C#', answer: 'A language developed by Microsoft, primarily used for developing Windows applications, games (with Unity), and web services (with ASP.NET).' },
    { question: 'C++', answer: 'An extension of the C programming language with added support for object-oriented programming, commonly used in system software, game development, and embedded systems.' },
    { question: 'Ruby', answer: 'A dynamic, object-oriented language known for its elegant syntax and used primarily in web development with the Ruby on Rails framework.' },
    { question: 'PHP', answer: 'A server-side scripting language commonly used for web development to create dynamic web pages and web applications.' },
    { question: 'Go (Golang)', answer: 'A statically-typed language created by Google, designed for simplicity and efficiency in systems programming and web services.' },
    { question: 'Rust', answer: ' A systems programming language known for its focus on memory safety and performance, suitable for building high-performance applications and systems.' },
    { question: 'MATLAB:', answer: ' A high-level language and environment for numerical computing, widely used in academia and industry for data analysis, simulations, and scientific computing.' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleNextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);

    setCurrentCardIndex(newIndex);
    setShowQuestion(true);
  };

  const handlePreCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowQuestion(true);
    }
  };

  const toggleCard = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <>
      <h1>Pragramming Language</h1>
      <h4>Have Fun to know some programming language!</h4>
      <h5>Number of cards: {flashcards.length}</h5>
      <div>
        {currentCardIndex < flashcards.length && (
          <Flashcard
            question={flashcards[currentCardIndex].question}
            answer={flashcards[currentCardIndex].answer}
            onClick={toggleCard}
            showQuestion={showQuestion}
          />
        )}
      </div>

      <div className='button-container'>
        
        {currentCardIndex > 0 && (
          <button onClick={handlePreCard} type='button' className='prevCard'>
            Previous
          </button>
        )}

        {currentCardIndex < flashcards.length - 1 && (
          <button onClick={handleNextCard} type='button' className='nextCard'>
            Next
          </button>
        )}

      </div>
    </>
  );
}

export default App;
