import React, { useState, useEffect } from "react";
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

    const [monthNames, setMonthNames] = useState([]);
    const [dayNames, setDayNames] = useState([]);

    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    useEffect(() => {
        setDayNames(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
        setMonthNames(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
        const today = new Date();

        setDay(dayNames[today.getDay()]);
        setMonth(monthNames[today.getMonth()]);
        setDate(today.getDate());
        setYear(today.getFullYear());
    })

    function incrementStep() {
        setStep(step => step + 1);
    }

    function decrementStep() {
        if (step >= count) {
            setStep(step => step - 1);
        }
    }

    function incrementCount() {
        setCount(count => count + step);
    }

    function decrementCount() {
        if (count >= 1) {
            setCount(count => count - step);
        }
    }

    return (
        <div>
            <div><button onClick={decrementStep}>-</button> <span>Step: {step}</span> <button onClick={incrementStep}>+</button></div>
            <br />
            <div><button onClick={decrementCount}>-</button> <span>Count: {count}</span> <button onClick={incrementCount}>+</button></div>
            <br />
            <div>Today is {day} {month} {date} {year}</div>
        </div>
    )
}

export default App;