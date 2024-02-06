import { useState } from "react";

function App() {
    const [advice, setAdvice] = useState("");

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        console.log(data.slip.advice);
    }

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
        </div>
    )
}

export default App;