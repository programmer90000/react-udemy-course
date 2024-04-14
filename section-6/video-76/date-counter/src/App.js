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
    // Define States
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    const [monthNames, setMonthNames] = useState([]);
    const [dayNames, setDayNames] = useState([]);

    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [dateText, setDateText] = useState("");

    // Set date as soon as page loads
    useEffect(() => {
        setDayNames(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
        setMonthNames(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
        const today = new Date();

        today.setDate(today.getDate() + count);
        setDay(dayNames[today.getDay()]);
        setMonth(monthNames[today.getMonth()]);
        setDate(today.getDate());
        setYear(today.getFullYear());

        if (count === 0) {
            setDateText(`Today is ${day} ${month} ${date} ${year}`);
        } else {
            today.setDate(today.getDate() + count);
            setDay(dayNames[today.getDay()]);
            setMonth(monthNames[today.getMonth()]);
            setDate(today.getDate());
            setYear(today.getFullYear());
            setDateText(`${count} days from now is ${day} ${month} ${date} ${year}`);
        }
    })

    // Functions to increment and decrement the step and count values
    function incrementStep() {
        setStep(step => step + 1);
    }

    function decrementStep() {
        if (step > 1) {
            setStep(step => step - 1);
        }
    }

    function incrementCount() {
        setCount(count => count + step);
    }

    function decrementCount() {
        if (count >= step) {
            setCount(count => count - step);
        }
    }

    return (
        <div>
            <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} /> <span>Step: {step}</span>
            <br />
            <div><button onClick={decrementCount}>-</button> <span>Count: {count}</span> <button onClick={incrementCount}>+</button></div>
            <br />
            <div>{dateText}</div>
        </div>
    )
}

export default App;