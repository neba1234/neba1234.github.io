import React, { useState } from 'react';


/*
1. Create a simple React component called Counter that displays a counter 
value initialized to 0.Include two buttons: one for incrementing the counter and
 another for decrementing it. Use useState to manage the counter state.
*/



function App0() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);

  };
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
