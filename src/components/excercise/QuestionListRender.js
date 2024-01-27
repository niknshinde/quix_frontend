// QuestionListRender.js
import React, { useState, useContext } from "react";
import backendContext from "../../contex/backend/backendContext";

const QuestionListRender = (props) => {
  // Accessing context to get the backend host
  const context = useContext(backendContext);
  const { host } = context;

  // State for storing user score, answers, and submission status
  const [score, setScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Destructuring quiz and level from props
  const { quiz, level } = props;

  // Total score possible based on the quiz length and difficulty level
  const outOff =
    quiz.length *
    (level === "easy" ? 1 : level === "medium" ? 3 : level === "hard" ? 5 : 1);

  // Function to handle user selection of an answer for a question
  const handleAnswerSelection = (questionId, selectedOption) => {
    if (!submitted) {
      setUserAnswers({ ...userAnswers, [questionId]: selectedOption });
    }
  };

  // Function to submit the quiz and update user scores
  const handleSubmitQuiz = async () => {
    try {
      // Fetching the user's current score
      const getscore = await fetch(`${host}/api/quiz/getScores`, {
        method: "get",
        headers: {
          "auth-token": localStorage.getItem("token2"),
        },
      });

      const score = await getscore.json();
      const currentScore = score.values;


      // If the score is undefined, set it to 0
      if (score.values === undefined) {
        currentScore = 0;
      }

      // Making a PUT request to update the user's score
      const response = await fetch(`${host}/api/quiz/updateScores`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token2"),
        },
        body: JSON.stringify({
          score: calculateScore() + currentScore,
        }),
      });

      const updatedUser = await response.json();

      // Extracting the new score for the current language
      const language = "english";
      const newScore = updatedUser.scores[language];

      // Setting the new score and marking the quiz as submitted
      setScore(newScore);
      setSubmitted(true);
    } catch (error) {
      console.error("Error updating user scores:", error);
    }
  };

  // Function to calculate the user's score based on selected answers
  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.forEach((question) => {
      const userAnswer = userAnswers[question._id];
      if (
        userAnswer &&
        userAnswer === getCorrectOption(question.options)._id
      ) {
        if (level === "easy") {
          correctAnswers += 1;
        } else if (level === "medium") {
          correctAnswers += 3;
        } else if (level === "hard") {
          correctAnswers += 5;
        }
      }
    });
    return correctAnswers;
  };

  // Function to get the correct option for a question
  const getCorrectOption = (options) => {
    return options.find((option) => option.isCorrect);
  };

  // Rendering the component
  return (
    <div className="questionrender">
      {!submitted && quiz && quiz.length > 0 ? (
        // Render questions if quiz exists and is not submitted
        quiz.map((question, index) => (
          <div key={question._id} className="question-container">
            <p className="question-text">
              {" "}
              {"Q" + (index + 1) + " " + question.question}{" "}
            </p>
            {question.options.map((option) => (
              <div
                key={option._id}
                className={`option-container ${
                  userAnswers[question._id] === option._id
                    ? "selected-option"
                    : ""
                }`}
                onClick={() =>
                  handleAnswerSelection(question._id, option._id)
                }
              >
                <input
                  type="radio"
                  name={`question_${question._id}`}
                  className="radio-input"
                  disabled={submitted}
                  checked={userAnswers[question._id] === option._id}
                />
                {option.text}
              </div>
            ))}
          </div>
        ))
      ) : (
        // Render results if quiz is submitted
        submitted && (
          <div>
            <p>
              Your Score: {calculateScore()} / {outOff}
            </p>
            <p>Report Card:</p>
            {quiz.map((question, index) => (
              <div key={question._id} className="question-container">
                <p className="question-text">
                  {" "}
                  {"Q" + (index + 1) + " " + question.question}{" "}
                </p>
                <div className="correct-answer">
                  Correct Answer: {getCorrectOption(question.options).text}
                </div>
                <div
                  className={
                    userAnswers[question._id] ===
                    getCorrectOption(question.options)._id
                      ? "correct-answer"
                      : "your-answer"
                  }
                >
                  Your Answer:{" "}
                  {userAnswers[question._id]
                    ? question.options.find(
                        (option) => option._id === userAnswers[question._id]
                      ).text
                    : "Not attempted"}
                </div>
              </div>
            ))}
          </div>
        )
      )}
      {!submitted && (
        // Render submit button if quiz is not submitted
        <button
          className="submit-button"
          onClick={handleSubmitQuiz}
          disabled={submitted}
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
};

export default QuestionListRender;
