import React from "react";

const skillsect = () => {
  return (
    <section>
      <h2 className="skills_title">Skills</h2>
      <div className="container skill__section">
        <div className="section__card">
          <h4>
            <b>Soft Skills</b>
          </h4>
          <ul>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Research</li>
          </ul>
        </div>
        <div className="section__card">
          <h4>
            <b>Hard Skills</b>
          </h4>
          <ul>
            <li>UI/UX Design</li>
            <li>Web Programming</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default skillsect;
