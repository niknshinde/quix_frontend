import React from 'react';
import backendContext from './backendContext';
export const BackendState = (props) => {

  //replace your server link here else you can use this link also as i already deploy server
  //onreander but note that this server is very slow due to free plan it might take time to start
  //hence acccording to me use  local created backend server link
  const host = 'https://quix-backend.onrender.com';

  return (
    <backendContext.Provider
      value={{
        host
        
      }}
    >
      {props.children}
    </backendContext.Provider>
    // <quizContex.Provider

  );
}