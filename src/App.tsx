import React from 'react';
import { CounterContainer } from './containers/CounterContainer';
import { TodoContainer } from './containers/TodoContainer';

function App() {

  return (
    <div style={{padding: 50}}>
      <TodoContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
