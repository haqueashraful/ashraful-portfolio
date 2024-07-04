import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className=" grid grid-cols-1 lg:grid-cols-4 items-start py-5 space-y-5 px-8 lg:px-24 w-full">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-tl from-[#f956b3] to-[#ec7a1d] text-transparent bg-clip-text ">
          <span className="text-[#6E06F2]">&lt;</span>Rana
          <span className="text-[#6E06F2]">/&gt;</span>
        </h2>
      </div>
     <div className=" col-span-2 grid grid-cols-2 items-start w-full">
     <div>
        <ul className=" space-y-3">
            <li className="text-xl"><Link target="_blank" className=" flex justify-start gap-4 items-center" to="https://github.com/haqueashraful"><FaGithub />
            Github</Link></li>
            <li className="text-xl"><Link target="_blank" className=" flex justify-start gap-4 items-center" to="https://www.linkedin.com/in/a-h-rana/"><FaLinkedin />
            LinkedIn</Link></li>
            <li className="text-xl"><Link target="_blank" className=" flex justify-start gap-4 items-center" to="https://www.facebook.com/haqueashraful"><FaFacebook />
            Facebook</Link></li>
        </ul>
      </div>
      <div>
        <ul className=" space-y-3">
          <li className="text-xl font-medium ">
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>
              Home
            </a>
          </li>
          <li className="text-xl font-medium ">
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li className="text-xl font-medium ">
            <a href="#skill" onClick={(e) => handleScroll(e, "skill")}>
              Skill
            </a>
          </li>
        </ul>
      </div>
     </div>
      <div>
        <p className="text-black">Made with ❤️ by Rana</p>
      </div>
    </footer>
  );
};

export default Footer;
