import Education from "@/components/Education/Education";
import Information from "@/components/Information/Information";
import Skills from "@/components/Skills/Skills";

const Home = () => {
  return (
    <div className="space-y-28">
      <Information />
      <Skills />
      <Education />
    </div>
  );
};

export default Home;
