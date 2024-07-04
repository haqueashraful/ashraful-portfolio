import About from "../Component/About";
import Banner from "../Component/Banner";
import Projects from "../Component/Project";
// import Nav from "../Component/Nav";
import Skill from "../Component/Skill";

const Home = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Banner />
      <About />
      <Skill />
      <Projects />
    </div>
  );
};

export default Home;
