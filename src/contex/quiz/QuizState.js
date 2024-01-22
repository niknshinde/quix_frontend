import React, { useState , useContext } from 'react';
import quizContex from './quizContext';
import backendContext from '../backend/backendContext';

export const QuizState = (props) => {
  const context = useContext(backendContext);
  const { host } = context;
  // const host = 'http://localhost:5000'; // replace with your actual backend URL
  const quizInitial = [

    
    
  ];

  const [quiz, setQuiz] = useState(quizInitial);
  const [userLanguage , setLanguage] = useState('english');


  const createQuizQuestion = async (language, difficulty, question, options) => {
    try {
      const response = await fetch(`${host}/api/quiz/creatquizquestion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token2'), // make sure to handle authentication
        },
        body: JSON.stringify({ language, difficulty, question, options }),
      });
      const json = await response.json();
      setQuiz([...quiz, json.exercise]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getQuiz = async (difficulty) => {
    try {
      const response = await fetch(`${host}/api/quiz/getQuiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token2'),
        },
        body: JSON.stringify({ difficulty }),
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching quiz: ${response.status}`);
      }
  
      const json = await response.json();
      console.log('Quiz Data:', json);
      setQuiz(json);
    } catch (error) {
      console.error('Error fetching quiz:', error.message);
    }
  };

  const updateScores = async (language, score) => {
    try {
      const response = await fetch(`${host}/api/quiz/updateScores`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token2'),
        },
        body: JSON.stringify({ language, score }),
      });
      const updatedUser = await response.json();
      // You might want to handle the updated user data accordingly
      console.log('User scores updated:', updatedUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getUserCurrentLanguage = async () => {

  try{
  const response = await fetch(`${host}/api/quiz/getCurrentLanguage`  , {
    method: "get",
    headers: {
      "auth-token": localStorage.getItem("token2"),
    }, 
  }
  );

  const user = await response.json();
  console.log("score of user is User:", user.language);

  setLanguage(user.language);

}catch(error){
  console.error(error.message);

}

};




  return (
    <quizContex.Provider
      value={{
        quiz,
        userLanguage,
        createQuizQuestion,
        getQuiz,
        updateScores,
        getUserCurrentLanguage
      }}
    >
      {props.children}
    </quizContex.Provider>
    // <quizContex.Provider
    //   value={{quiz , setQuiz}}
    // >
    //   {props.children}
    // </quizContex.Provider>
  );
};
