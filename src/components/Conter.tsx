import * as React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void
  onDecrease: () => void
  increaseBy: (diff: number) => void
}

function Counter({ 
  count, 
  onIncrease, 
  onDecrease, 
  increaseBy
}: CounterProps) {

  return (
    <div>
        <p>count : {count}</p>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => increaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;