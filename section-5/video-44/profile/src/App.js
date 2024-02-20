import profile from "./profile.jpeg";
import "./App.css";

function App() {
    return (
        <div className="card">
            <Image />
            <div className="data">
                <Name />
                <About />
                <SkillsList />
            </div>
        </div>
    );
}

function Image() {
    return <img src={profile} alt="" />
}

function Name() {
    return <h1>Jonas Schmedtmann</h1>
}

function About() {
    return <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.</p>
}

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.name}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

function SkillsList() {
    return (
        <div className="skill-list">
            <Skill name="React" emoji="💪" color="blue" />
            <Skill name="HTML+CSS" emoji="💪" color="orange" />
            <Skill name="JavaScript" emoji="💪" color="yellow" />
            <Skill name="Svelte" emoji="👶" color="orangered" />
        </div>
    )
}
export default App;
