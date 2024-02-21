import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul>{pizzaData.map(pizza => <Pizza pizzaObject={pizza} key={pizza.name} />)}</ul>
        </main>
    )
}

function Footer() {
    return <footer className="footer">{new Date().toLocaleTimeString()} We're currently open</footer>;
}

function Pizza(props) {
    console.log(props);
    return (
        <li className="pizza">
            <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
            <div>
                <h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>{props.pizzaObject.price}</span>
            </div>
        </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);