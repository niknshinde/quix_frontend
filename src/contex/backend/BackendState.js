import React from 'react';
import backendContext from './backendContext';
export const BackendState = (props) => {

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