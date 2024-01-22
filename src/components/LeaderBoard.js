import React, { useContext, useState, useEffect } from 'react';
import leaderContex from '../contex/leaders/leaderContex';
import quizContex from '../contex/quiz/quizContext';
const LeaderBoard = () => {
  const context = useContext(leaderContex);
  const { getDefultBoard, leaders, getLoginLeaderBoard } = context;

  const quizContext = useContext(quizContex);
  const { getUserCurrentLanguage, userLanguage } = quizContext;

  useEffect(() => {
    if (localStorage.getItem('token2')) {
      getLoginLeaderBoard();
      getUserCurrentLanguage();
    } else {
      // Redirecting to the login page
      getDefultBoard();
    }
  }, []);

  return (
    <div className="leaderboard centering">
      <h2>Leaderboard of {userLanguage} language</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaders.length > 0 ? (
            leaders.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.scores[userLanguage]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
