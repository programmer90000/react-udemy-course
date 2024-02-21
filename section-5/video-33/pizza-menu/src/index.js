import React from "react";
import ReactDOM from "react-dom/client";
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
            <div></div>
            <Pizza name="Pizza Spinachi" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10} />
            <Pizza name="Pizza Funghi" ingredients="Tomato, mushrooms" price={12} photoName="pizzas/funghi.jpg" />
        </main>
    )
}

function Footer() {
    return <footer className="footer">{new Date().toLocaleTimeString()} We're currently open</footer>;
}

function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);