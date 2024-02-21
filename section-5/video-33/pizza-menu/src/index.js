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
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className="pizzas">
                {numPizzas > 0 ? (pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)) : <p>We're still working on our menu. Please come back later :)</p>}
            </ul>
        </main>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="footer">
            {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
        </footer>
    )
}

function Order(props) {
    return (
        <div className="order">
            <p>We're open until {props.closeHour}:00. Come visit us or order online</p>
            <button className="btn">Order</button>
        </div>
    )
}

function Pizza({ pizzaObj }) {
    console.log(pizzaObj);

    if (pizzaObj.soldOut) return null;
    return (
        <li className="pizza">
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.price}</span>
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