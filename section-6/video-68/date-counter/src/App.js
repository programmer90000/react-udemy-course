import { useState } from "react";
import "./style.css";

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    function incrementStep() {
        setStep(step => step + count);
    }

    function decrementStep() {
        if (step >= count) {
            setStep(step => step - count);
        }
    }

    function incrementCount() {
        setCount(count => count + 1);
    }

    function decrementCount() {
        if (count >= 1) {
            setCount(count => count - 1);
        }
    }

    return (
        <div>
            <div><button onClick={decrementStep}>-</button> <span>Step: {step}</span> <button onClick={incrementStep}>+</button></div>
            <br />
            <div><button onClick={decrementCount}>-</button> <span>Count: {count}</span> <button onClick={incrementCount}>+</button></div>
        </div>
    )
}

export default App;
