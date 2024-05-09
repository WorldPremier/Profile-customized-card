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
        <Intro
          nameOne="As a Software Engineer, looking to create an app to automate and showcase games I've built in my spare time."
          nameTwo="Franklyn Reyes"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
        {/* <SkillList skillName="JavaScript💪💪💪💪" {color}/> */}
        {/* <SkillList skillName="Game Dev🏆🏆🏆" />
        <SkillList skillName="Cypress✅🐛🐜🐞🪳" /> */}
      </div>
    </div>
  );
}

function Avatar({ name }) {
  return (
    <div>
      <img
        className="avatar"
        src={name}
        // style={{ width: 445, height: 470 }}
        alt="Franklyn Reyes"
        cy-data="worldPremier"
      />
    </div>
  );
}

function Intro({ nameOne, nameTwo }) {
  // console.log(props);
  return (
    <div className="avatar">
      <h1>{nameTwo}</h1>
      <p>{nameOne}</p>
    </div>
  );
}

function SkillList() {
  // const getData = dataSkills;
  //  const numSkills = getData.length;
  return (
    <div
      className="skill-list"
      // style={{ backgroundColor: "white", width: 105, height: 26 }}
    >
      {/* 💪 = advnaced, 👍= intermediate 👶= beginner; */}
      <Skill skill="React " emoji="💪" color="teal" />
      <Skill skill="Game Dev " emoji="👍" color=" red" />
      <Skill skill="Cypress" emoji="💪" color="lightblue" />
      <Skill skill="Playwright" emoji="👶" color="green" />
      <Skill skill="C Sharp" emoji="👍" color="blue" />
      <Skill skill="Game Dev" emoji="👶" color="yellow" />
      {/* {skillName} */}
      {/* <Skill skill="HTML+CSS" emoji="💪" color="blue" /> */}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
    </div>
  );
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
