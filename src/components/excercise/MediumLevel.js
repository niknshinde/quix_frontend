import React , {useContext,useState, useEffect } from 'react'
import quizContex from '../../contex/quiz/quizContext';
import { useNavigate } from 'react-router-dom';
import QuestionListRender from './QuestionListRender';

const MediumLevel = () => {

  const context = useContext(quizContex);
  const { quiz , getQuiz } = context;
  let navigate = useNavigate();

  useEffect(() => {
      if (localStorage.getItem('token2')) {
          let difficulty = 'medium';
          getQuiz(difficulty);
      } else {
        // Redirecting to login page
        navigate('/login');
      }
    }, []);

  

  return (
     <>
     <h1>
      medium level quiz
     </h1>

     <QuestionListRender quiz = {quiz} level = 'medium' />
     </>
  );
}

export default MediumLevel