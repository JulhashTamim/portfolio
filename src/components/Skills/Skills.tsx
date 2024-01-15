import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData = [
    {
      skillName: "Data Entry",
      skillImg: "https://i.postimg.cc/rw17xbqL/image-2.png",
    },
    {
      skillName: "Canva",
      skillImg: "https://i.postimg.cc/wjk22YZg/image-3.png",
    },
    {
      skillName: "Microsoft Office",
      skillImg: "https://i.postimg.cc/tgzX9kJ9/image-4.png",
    },
  ];
  return (
    <div id="skills">
      <SectionTitle heading="Skills" subheading="Areas of Expertise" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {skillsData.map((skill) => (
          <SkillCard skillName={skill.skillName} skillImg={skill.skillImg} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
