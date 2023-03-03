import React, { useState } from "react";
import "./SkillsPage.css";

function SkillsPage() {
  const [skills, setSkills] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSkill = event.target.elements.skill.value;
    setSkills([...skills, newSkill]);
    event.target.reset();
  };

  return (
    <div className="skills-page">
      <h1>Enter Skills</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="skill" placeholder="Enter a new skill" />
        <button type="submit">Add Skill</button>
      </form>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsPage;
