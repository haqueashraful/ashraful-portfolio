import About from "../Component/About";
import Banner from "../Component/Banner";
import Contact from "../Component/Contact";
import Education from "../Component/Education";
import Projects from "../Component/Project";
import Skill from "../Component/Skill";
import Footer from "../Partials/Footer";
import Nav from "../Partials/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
