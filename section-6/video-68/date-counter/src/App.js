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
        setStep(step => step + 1);
    }

    function decrementStep() {
        if (step >= 1) {
            setStep(step => step - 1);
        }
    }

    function incrementCount() {
        setCount(count => count + 1);
    }

    function decrementCount() {
        setCount(count => count + 1);
    }

    return (
        <div>
            <div><button>-</button> <span>Step: {step}</span> <button>+</button></div>
            <br />
            <div><button>-</button> <span>Count: {count}</span> <button>+</button></div>
        </div>
    )
}

export default App;
