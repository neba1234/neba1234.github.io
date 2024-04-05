import React, { useState } from 'react';
/*
Q3. Build a component that generates a random number between 1 and 100 when a
 button is clicked. Display the generated number using useState.
*/

function App1() {

    const [randomNumber, setrandomNumber] = useState(1);
    const randomNumberGenerator = () => {
        const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
        setrandomNumber(randomNumber);
        console.log(randomNumber);

    };


    return (
        <div className="App">
            {randomNumber}
            <button onClick={randomNumberGenerator}>Generate Random number</button>
        </div>
    );
}

export default App1;
