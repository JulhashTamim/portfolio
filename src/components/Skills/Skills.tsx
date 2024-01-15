import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "./SkillCard";
import Aos from "aos";

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
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay="300" id="skills">
      <SectionTitle heading="Skills" subheading="Areas of Expertise" />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {skillsData.map((skill) => (
          <div key={skill.skillName}>
            <SkillCard skillName={skill.skillName} skillImg={skill.skillImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
