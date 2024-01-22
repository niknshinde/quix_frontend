import React from 'react';
import backendContext from './backendContext';
export const BackendState = (props) => {

  const host = 'http://localhost:4000';

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