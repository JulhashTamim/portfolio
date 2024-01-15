import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Information from "@/components/Information/Information";
import Skills from "@/components/Skills/Skills";

const Home = () => {
  return (
    <div className="space-y-28">
      <Information />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
