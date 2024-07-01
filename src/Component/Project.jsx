import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import project1 from "../assets/projects/screencapture-restaurant-managemnet-netlify-app-2024-06-05-11_03_12.png";
import project2 from "../assets/projects/screencapture-smartticketreact-netlify-app-2024-06-05-11_02_08.png";
import project3 from "../assets/projects/screencapture-assignment-nine-ha-netlify-app-2024-06-05-11_31_23.png";
import project4 from "../assets/projects/screencapture-artcraft-store-netlify-app-2024-06-05-11_34_01.png";
import project5 from "../assets/projects/screencapture-haqueashraful-github-io-legal-solution-2024-06-05-11_13_09.png";
import project6 from "../assets/projects/screencapture-haqueashraful-github-io-assignment-two-2024-06-05-11_45_20.png";
import project7 from "../assets/projects/screencapture-social-portal-react-netlify-app-2024-06-05-11_09_53.png";
import Heading from "./Heading";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="text-left px-8 lg:px-24 py-10 w-full">
      <Heading text="My Projects" />
      <div className="my-10 flex justify-center items-center flex-wrap gap-8 px-0 lg:px-10">
        {/* dine craft */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project1}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta
            title="Dine Craft"
            description="Restaurant management system"
          />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://restaurant-managemnet.netlify.app/">Go live</a>
        </Card>

        {/* smart ticket */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project2}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="Smart Ticket" description="Ticket booking system" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://smartticketreact.netlify.app/">Go live</a>
        </Card>

        {/* R-Estate */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project3}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="R-Estate" description="Real State Business platform" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://assignment-nine-ha.netlify.app/">Go live</a>
        </Card>

        {/* R-Estate */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project4}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="ArtCraft Store" description="Buy and sell your art" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://artcraft-store.netlify.app/">Go live</a>
        </Card>

        {/* Legal solutions */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project5}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="Legal Solutions" description="Legal Solutions" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://haqueashraful.github.io/legal-solution/">Go live</a>
        </Card>

        {/* Haque Travel */}
        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project6}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="Haque Travel" description=" Travel solutions Projects" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://haqueashraful.github.io/assignment-two/">Go live</a>
        </Card>

        {/* Social Portal */}

        <Card
          className=" overflow-hidden !border-blue-700/50 w-full"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              src={project7}
              alt="example"
              style={{
                height: "200px",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          }
        >
          <Meta title="Social Portal" description="A normal News portal" />
          <a target="_blank" className=" text-blue-700/50 font-bold underline block py-4" href="https://social-portal-react.netlify.app/">Go live</a>
        </Card>
      </div>
    </div>
  );
};

export default Projects;