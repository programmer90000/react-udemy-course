import profile from "./profile.jpeg";
import "./App.css";

const skill = [
    {
        skill: "React",
        level: "beginner",
        color: "blue",
    },
    {
        skill: "HTML+CSS",
        level: "intermediate",
        color: "orange",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "yellow",
    },
    {
        skill: "Svelte",
        level: "advanced",
        color: "orangered",
    },
]

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

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>{level === "beginner" && "👶"}</span>
            <span>{level === "intermediate" && "👍"}</span>
            <span>{level === "advanced" && "💪"}</span>
        </div>
    )
}

function SkillsList() {
    return (
        <div className="skill-list">
            {skill.map((skill) => <Skill skill={skill.skill} level={skill.level} color={skill.color} />)}
        </div>
    )
}
export default App;
