import React from "react";
import ReactDOM from "react-dom";
import SkillsGrid from "./SkillsGrid";

const SKILLS = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 87 },
  { type: "jQuery", level: 92 },
  { type: "BootStrap", level: 90 },
  { type: "Photoshop", level: 100 },
  { type: "Angular.js", level: 16 },
  { type: "React.js", level: 25 },
  { type: "PHP", level: 36 },
  { type: "Ruby", level: 11 },
];

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    this.setState({ collapsed: false });
  }
  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:items-normal px-8">
        <div
          id="skills"
          className={`container px-5 ${
            collapsed ? "w-0" : "lg:w-[40vw] w-full"
          }`}
        >
          <h1 className="text-xl text-textwhite">Skill</h1>
          <p className="text-sm text-gray-600">
            Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code>{" "}
            instance and let the component deal with the shades
          </p>
          <hr className="my-5 border-t border-gray-300" />
          <ul className="skills m-0 p-0 w-11/12">
            {skills.map((skill, index) => (
              <li
                ref={(el) => (this.myElement = el)}
                key={skill.type}
                className={`block relative bg-gray-500 text-white my-2 transition-all duration-300 ${
                  collapsed ? "w-0" : ""
                }`}
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${
                    100 / (index + 3.5)
                  }%)`,
                }}
              >
                <p className="p-2 m-0 font-bold">
                  {skill.type}
                  <span className="absolute right-2 inline-block w-7 top-3 text-right font-normal text-white text-xs">
                    {skill.level}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <SkillsGrid />
      </div>
    );
  }
}

const Skills = () => {
  return (
    <div>
      <SkillBars hue="300" saturation="40" skills={SKILLS} />
    </div>
  );
};

export default Skills;
