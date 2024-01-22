import React, { useState , useContext } from 'react';
import leaderContex from './leaderContex';
import backendContext from '../backend/backendContext';

export const LeadersState = (props) => {
  const context = useContext(backendContext);
  const { host } = context;
    // const host = 'http://localhost:5000'; // replace with your actual backend URL

     const initilaLeaders = [


     ]

     const [leaders, setLeaders] = useState(initilaLeaders);

     const getDefultBoard = async () => {
        try {
          const response = await fetch(`${host}/api/leaderboard/defultLeaderboard`, {
            method: 'get'
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching leaderboard: ${response.status}`);
          }
      
          const json = await response.json();
          console.log('leaderboard Data:', json);
          setLeaders(json);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }

      
      };


      const getLoginLeaderBoard = async () => {
        try {
          const response = await fetch(`${host}/api/leaderboard/getleaderboard`, {
            method: 'post',
            headers: {
                'auth-token': localStorage.getItem('token2'), // make sure to handle authentication
              },
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching leaderboard: ${response.status}`);
          }
      
          const json = await response.json();
          console.log('leaderboard Data:', json);
          setLeaders(json);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }

      
      };

      return(
        <leaderContex.Provider
        value={{
            leaders,
          getDefultBoard,
          getLoginLeaderBoard,
         
        }}
      >
        {props.children}
      </leaderContex.Provider>
    );

};
