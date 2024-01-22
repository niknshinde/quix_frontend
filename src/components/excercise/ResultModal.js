// ResultModal.js
import React from 'react';

const ResultModal = ({ score, outOf, userAnswers, correctOptions, onClose, onViewAnswers }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Your Score: {score} / {outOf}</h2>
        <p>Report Card:</p>
        {userAnswers.map((userAnswer, index) => (
          <div key={index} className='question-result'>
            <p>Your Answer: {userAnswer}</p>
            <p>Correct Answer: {correctOptions[index]}</p>
          </div>
        ))}
        <div className='modal-buttons'>
          <button onClick={onViewAnswers}>View Answers</button>
          <button onClick={onClose}>Go to Home Screen</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
