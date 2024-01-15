import { useEffect } from "react";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const educationData = [
    {
      imgLink:
        "https://i.ibb.co/zb4xgMj/323113454-1325448301586663-5004010928649462078-n.jpg",
      duration: "2020 - 2024",
      courseName: "BSc in Computer Science and Engineering",
      location: "Bateshwar, Sylhet-3104, Bangladesh",
      admissionLink: "https://metrouni.edu.bd/",
      institute: "Metropolitan University",
    },
    {
      imgLink: "https://i.postimg.cc/qgVFGnJD/image.png",
      duration: "2016 - 2018",
      courseName: "Higher Secondary School Certificate",
      location: "Bateshwar, Sylhet-3104, Bangladesh",
      admissionLink: "https://jcpscsylhet.edu.bd/#/",
      institute: "Jalalabad Cantonment Public School and College",
    },
    {
      imgLink: "https://i.postimg.cc/qgVFGnJD/image.png",
      duration: "2014 - 2016",
      courseName: "Secondary School Certificate",
      location: "Bateshwar, Sylhet-3104, Bangladesh",
      admissionLink: "https://jcpscsylhet.edu.bd/#/",
      institute: "Jalalabad Cantonment Public School and College",
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="300" id="education">
      <SectionTitle heading={"Education"} subheading={"Academic Background"} />
      <div>
        {educationData.map((education, index) => (
          <Card
            key={index}
            imgLink={education.imgLink}
            duration={education.duration}
            courseName={education.courseName}
            location={education.location}
            admissionLink={education.admissionLink}
            institute={education.institute}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
