import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div className=" back-shape">
          <div className=" flex justify-between items-center w-full h-full px-24">
            <div className="w-full space-y-5">
              <h1 className="text-6xl text-white/80 font-black">Ashraful Haque</h1>
    
              {/* type writer */}
              <div>
                <h1 className="text-2xl text-white/80 font-black ">
                  Passionate
                  <span
                    style={{
                      color: "cyan",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["JavaScript", "React", "Node", "MongoDB"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      color="white"
                    />
                  </span>
                </h1>
              </div>
    
              <p className="text-md text-left text-white/80">
                Hi, I'm Ashraful Haque. I'm a Front End Web Developer. I'm a skilled
                React developer with expertise in building modern web applications
                using React.js, JavaScript, and related technologies. With several
                years of experience in front-end development, I specialize in
                creating interactive user interfaces that enhance user experiences
                and drive engagement.
              </p>
    
              {/* socila link */}
              <div className="">
                <ul className=" flex justify-start items-center gap-6">
                  {/* github */}
                  <li className="text-3xl text-white bg-white/80 p-3 rounded-full hover:bg-white">
                    <a
                      href="https://github.com/haqueashraful"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="#F26C5A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </li>
    
                  {/* facebook */}
                  <li className="text-3xl text-white bg-white/80 p-3 rounded-full hover:bg-white">
                    <a
                      className=" block"
                      href="https://www.facebook.com/profile.php?id=100051858772605"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="#F26C5A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </li>
    
                  {/* linkedin */}
                  <li className="text-3xl text-white bg-white/80 p-3 rounded-full hover:bg-white">
                    <a
                      className=" block"
                      href="https://www.linkedin.com/in/a-h-rana"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="#F26C5A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </li>
    
                  {/* <li className="text-3xl text-white bg-white/80 p-4 rounded-full hover:bg-[#F956B3]">
                    <a
                    className=" block"
                      href="https://github.com/haqueashraful"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      </a>
                      </li> */}
                </ul>
              </div>
            </div>
            <div className="w-full flex  justify-end items-center">
              <img
                className="rounded-full shadow-xl"
                src="https://avatars.githubusercontent.com/u/139930811?v=4"
                alt=""
              />
            </div>
          </div>
        </div>
      );
};

export default Banner;