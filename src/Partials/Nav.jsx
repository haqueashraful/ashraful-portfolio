import { FaHamburger } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar  px-8 lg:px-24 w-full">
      <div className="navbar-start justify-between w-full flex-row-reverse">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <IoMenu className="text-3xl" />

          </div>
          <ul
            tabIndex={0}
            className="dropdown-content rounded-box z-[1] mt-3 p-2 shadow bg-white/80 drop-shadow-2xl"
          >
            <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
              <NavLink href="#about" onClick={(e) => handleScroll(e, "about")}>
                About
              </NavLink>
            </li>
            <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
              <NavLink href="#skill" onClick={(e) => handleScroll(e, "skill")}>
                Skill
              </NavLink>
            </li>
            <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
              <NavLink
                href="#project"
                onClick={(e) => handleScroll(e, "project")}
              >
                Project
              </NavLink>
            </li>
            <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
              <NavLink
                href="#education"
                onClick={(e) => handleScroll(e, "education")}
              >
                Education
              </NavLink>
            </li>
            <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
              <NavLink
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-tl from-[#f956b3] to-[#ec7a1d] text-transparent bg-clip-text">
          <span className="text-[#6E06F2]">&lt;</span>Rana{" "}
          <span className="text-[#6E06F2]">/&gt;</span>
        </h2>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex justify-center items-center gap-5 px-1">
          <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
            <NavLink className="!bg-none" href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </NavLink>
          </li>
          <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
            <NavLink href="#skill" onClick={(e) => handleScroll(e, "skill")}>
              Skill
            </NavLink>
          </li>
          <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
            <NavLink
              href="#project"
              onClick={(e) => handleScroll(e, "project")}
            >
              Project
            </NavLink>
          </li>
          <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
            <NavLink
              href="#education"
              onClick={(e) => handleScroll(e, "education")}
            >
              Education
            </NavLink>
          </li>
          <li className="text-xl font-medium text-[#6E06F2] hover:text-[#F26964]">
            <NavLink
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
