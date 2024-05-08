import { StrictMode } from "react";
import { React } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import App from "./App";

function App() {
  return (
    // card is the profile card
    <div className="card">
      <Avatar name="./img/Branding_Profile_Image.JPG" />
      <div className="data">
        <Intro name="As a Software Engineer, looking to create an app to automate and showcase games I've built in my spare time." />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillName="React-JS🏆🧑‍🚀🧠" />
        <SkillList skillName="JavaScript💪💪💪💪" />
        <SkillList skillName="Game Dev🏆🏆🏆" />
        <SkillList skillName="Cypress✅🐛🐜🐞🪳" />
      </div>
    </div>
  );
}
function SkillList(props) {
  // const getData = dataSkills;
  //  const numSkills = getData.length;
  return (
    <div
      className="skill SkillList card"
      style={{ backgroundColor: "white", width: 120, height: 80 }}
    >
      {props.skillName}
    </div>
  );
}

function Skill() {
  return <div></div>;
}
function Avatar(props) {
  return (
    <div>
      <img
        className="avatar"
        src={props.name}
        // style={{ width: 445, height: 470 }}
        alt="Franklyn Reyes"
      />
    </div>
  );
}

function Intro(props) {
  console.log(props);
  return (
    <div>
      <h1>Franklyn Reyes</h1>
      <p>{props.name}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
