import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div className=" back-shape">
          <div className="flex  lg:justify-between items-center lg:flex-row flex-col-reverse w-full h-full px-8 lg:px-24 gap-8 lg:gap-0">
            <div className="w-full space-y-3 lg:space-y-5">
              <h1 className="lg:text-2xl text-lg font-bold text-black">Hi, I am Ashraful Haque <span className="text-[#6E06F2]">👋</span> </h1>
                <h1 className="lg:text-7xl text-4xl font-black bg-gradient-to-tl from-[#f956b3] to-[#ec7a1d] text-transparent bg-clip-text "><span className="text-[#6E06F2]">Front-End</span> Web Developer</h1>
    
              {/* type writer */}
              <div>
                <h1 className="text-2xl text-black font-black ">
                  Passionate at 
                  <span
                    style={{
                      color: "#6E06F2",
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
    
    
              {/* socila link */}
              <div className="">
                <ul className=" flex justify-start items-center gap-6">
                  {/* github */}
                  <li>
                    <a
                      className="btn"
                      href="https://github.com/haqueashraful"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6E06F2"
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
                  <li>
                    <a
                      className="btn"
                      href="https://www.facebook.com/profile.php?id=100051858772605"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6E06F2"
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
                  <li>
                    <a
                      className=" btn"
                      href="https://www.linkedin.com/in/a-h-rana"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6E06F2"
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
    
                 <li className="download-btn">
                    <a className="text-white text-xl font-bold"  href="https://drive.google.com/uc?export=download&id=1e7r-Yb6lI6QhtR0j5nHbs5fq8FEuh_8R">Download CV</a>
                 </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex relative lg:justify-end items-center">
             <div className="border-img">
             <img
                className="rounded-full  p-5 drop-shadow-lg"
                src="https://avatars.githubusercontent.com/u/139930811?v=4"
                alt=""
              />
             </div>
            </div>
          </div>
        </div>
      );
};

export default Banner;