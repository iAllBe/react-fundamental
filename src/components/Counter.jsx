import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
};

export default Counter;