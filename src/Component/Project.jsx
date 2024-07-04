import { Button, Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
// import project1 from "../assets/projects/screencapture-restaurant-managemnet-netlify-app-2024-06-05-11_03_12.png";
// import project2 from "../assets/projects/screencapture-smartticketreact-netlify-app-2024-06-05-11_02_08.png";
import project3 from "../assets/projects/screencapture-assignment-nine-ha-netlify-app-2024-06-05-11_31_23.png";
import project4 from "../assets/projects/screencapture-artcraft-store-netlify-app-2024-06-05-11_34_01.png";
// import project5 from "../assets/projects/screencapture-haqueashraful-github-io-legal-solution-2024-06-05-11_13_09.png";
// import project6 from "../assets/projects/screencapture-haqueashraful-github-io-assignment-two-2024-06-05-11_45_20.png";
// import project7 from "../assets/projects/screencapture-social-portal-react-netlify-app-2024-06-05-11_09_53.png";
import project8 from "../assets/projects/screencapture-employeecare-ha-netlify-app-2024-07-04-09_08_30.png";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Title from "antd/es/skeleton/Title";
// import { Link } from "react-router-dom";

const Projects = () => {
  const [modalR, setModalR] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalE, setModalE] = useState(false);
  return (
    <div id="project" className="text-left px-8 lg:px-24 py-10 w-full">
      <Heading text="My Projects" />
      <div className="my-10 flex justify-center items-center flex-wrap gap-8">
        {/* dine craft */}
        {/* <Card
        onClick={() => setModal2Open(true)}
          className=" overflow-hidden !border-blue-700/80 w-full"
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
          <Meta title="Dine Craft" description="Restaurant management system" />
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://restaurant-managemnet.netlify.app/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/final-project-ha"
            >
              View code
            </Link>
          </div>
        </Card> */}
        {/* modal one */}

        {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}

        {/* <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal> */}

        {/* smart ticket */}
        {/* <Card
          className=" overflow-hidden !border-blue-700/80 w-full"
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
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://smartticketreact.netlify.app/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/smart-ticket-react"
            >
              View code
            </Link>
          </div>
        </Card> */}

        {/* employee management */}
        <Card
          onClick={() => setModalE(true)}
          className=" overflow-hidden !border-blue-700/80 w-full"
          hoverable
          style={{
            width: 340,
          }}
          cover={
            <img
              src={project8}
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
          <Meta title="Dev Care" description="Real State Business platform" />
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://employeecare-ha.netlify.app/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/employee-management-client"
            >
              Client code
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/employee-management-admin"
            >
              Server code
            </Link>
          </div>
        </Card>
        {/* modal R */}
        <Modal
          title="Dev Dare"
          open={modalE}
          onCancel={() => setModalE(false)}
          footer={[
            <Button
              key="link"
              target="_blank"
              href="https://employeecare-ha.netlify.app/"
            >
              Go live
            </Button>,
            <Button
              key="link"
              target="_blank"
              href="https://github.com/haqueashraful/employee-management-client"
              type="primary"
            >
              View code
            </Button>,
          ]}
        >
          <img
            className="w-full h-[200px] object-cover object-top"
            src={project8}
            alt="R-estate"
          />
          <p className="text-lg py-3">
            Employee Management System. With this system, you can manage your
            Employee work and salary. This has a Dashboard for Admin, Employee
            and HR. Hr can verify Employee and pay their salary.
          </p>

          <ul className="list-disc list-inside">
            <h1 className="text-xl font-bold">Features: </h1>
            <li>Payment integrate For pay Employees salary</li>
            <li>Authentication Implement with Firebase and BackEnd.</li>
            <li>Dashboard system separate for Admin , User and Employee.</li>
            <li>Verify Employee HR can verify the Employee.</li>
            <li>Hr can Pay to Verified Employee</li>
            <li>Hr Cannot pay to one Employee in Same Month twice.</li>
            <li>Employee can submit their Daily Task or Work.</li>
            <li>Admin Can Fire A employee.</li>
            <li>Fired Employee Cannot Login with same email.</li>
            <li>Admin adjust salary for employee.</li>
          </ul>

          <div>
            <ul className=" flex-wrap list-inside flex justify-between items-center">
              <h1 className="text-xl font-bold">Technologies: </h1>
              <li> React</li>
              <li> Tailwind</li>
              <li> React-Router</li>
              <li> Firebase</li>
              <li> React-Query</li>
            </ul>
          </div>
        </Modal>

        {/* R-Estate */}
        <Card
          onClick={() => setModalR(true)}
          className=" overflow-hidden !border-blue-700/80 w-full"
          hoverable
          style={{
            width: 340,
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
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://assignment-nine-ha.netlify.app/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/real-estate-management"
            >
              Client code
            </Link>
          </div>
        </Card>

        {/* modal R */}
        <Modal
          title="R-Estate"
          open={modalR}
          onCancel={() => setModalR(false)}
          footer={[
            <Button
              key="link"
              target="_blank"
              href="https://assignment-nine-ha.netlify.app/"
            >
              Go live
            </Button>,
            <Button
              key="link"
              target="_blank"
              href="https://github.com/haqueashraful/real-estate-management"
              type="primary"
            >
              View code
            </Button>,
          ]}
        >
          <img
            className="w-full h-[200px] object-cover object-top"
            src={project3}
            alt="R-estate"
          />
          <p className="text-lg py-3">
            Real State Business platform. It Developed with react and firebase.
            It Developed for managing Real state business.
          </p>

          <ul className="list-disc list-inside">
            <h1 className="text-xl font-bold">Features: </h1>
            <li>You can Sign in with Email And Password</li>
            <li>You can sign in with google</li>

            <li>You cannot See Estate details without Login</li>
            <li>
              You can edit you Login info in update profile Name and Phot o_Url
            </li>
          </ul>

          <div>
            <ul className=" flex-wrap list-inside flex justify-between items-center">
              <h1 className="text-xl font-bold">Technologies: </h1>
              <li> React</li>
              <li> Tailwind</li>
              <li> React-Router</li>
              <li> Firebase</li>
              <li> React-Query</li>
            </ul>
          </div>
        </Modal>

        {/* art craft */}
        <Card
          className=" overflow-hidden !border-blue-700/80 w-full"
          hoverable
          onClick={() => setModalA(true)}
          style={{
            width: 340,
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
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://artcraft-store.netlify.app/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/art-craft-client"
            >
              Client code
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/art-craft-server"
            >
              Server code
            </Link>
          </div>
        </Card>

        {/* modal A */}
        <Modal
          title="ArtCraft Store"
          open={modalA}
          onCancel={() => setModalA(false)}
          footer={[
            <Button
              key="link"
              target="_blank"
              href="https://artcraft-store.netlify.app/"
            >
              Go live
            </Button>,
            <Button
              key="link"
              target="_blank"
              href="https://github.com/haqueashraful/art-craft-client"
              type="primary"
            >
              View code
            </Button>,
          ]}
        >
          <img
            className="w-full h-[200px] object-cover object-top"
            src={project4}
            alt="R-estate"
          />
          <p className="text-lg py-3">
            Buy and sell your art. It Developed with react and firebase. It
            Developed for Buy and sell your art.
          </p>

          <ul className="list-disc list-inside">
            <h1 className="text-xl font-bold">Features: </h1>
            <li>
              Diverse Collection: Explore a wide range of stunning landscape
              paintings.
            </li>
            <li>
              Breathtaking Scenes: Discover scenes from majestic mountains to
              serene forests.
            </li>
            <li>
              Talented Artists: Each painting is meticulously crafted by skilled
              artists.
            </li>
            <li>
              Customization Options: Customize your order with size and framing
              options.
            </li>
            <li>
              Worldwide Shipping: Enjoy fast and secure shipping to your
              doorstep.
            </li>
          </ul>

          <div>
            <ul className=" flex-wrap list-inside flex justify-between items-center">
              <h1 className="text-xl font-bold">Technologies: </h1>
              <li> React</li>
              <li> Tailwind</li>
              <li> React-Router</li>
              <li> Firebase</li>
              <li> React-Query</li>
            </ul>
          </div>
        </Modal>

        {/* Legal solutions */}
        {/* <Card
          className=" overflow-hidden !border-blue-700/80 w-full"
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
          <div className=" flex justify-between items-center  py-4">
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://haqueashraful.github.io/legal-solution/"
            >
              Go live
            </Link>
            <Link
              target="_blank"
              className=" text-blue-700/50 font-bold underline block"
              to="https://github.com/haqueashraful/legal-solution"
            >
              View code
            </Link>
          </div>
        </Card> */}

        {/* Haque Travel */}
        {/* <Card
          className=" overflow-hidden !border-blue-700/80 w-full"
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
          <div className=" flex justify-between items-center  py-4">
          <Link
            target="_blank"
            className=" text-blue-700/50 font-bold underline block"
            to="https://haqueashraful.github.io/assignment-two/"
          >
            Go live
          </Link>
          <Link
            target="_blank"
            className=" text-blue-700/50 font-bold underline block"
            to="https://github.com/haqueashraful/assignment-two"
          >
            View code
          </Link>
          </div>

        </Card> */}

        {/* Social Portal */}

        {/* <Card
          className=" overflow-hidden !border-blue-700/80 w-full"
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
        <div className=" flex justify-between items-center  py-4">
        <Link
            target="_blank"
            className=" text-blue-700/50 font-bold underline block"
            to="https://social-portal-react.netlify.app/"
          >
            Go live
          </Link>
          <Link
            target="_blank"
            className=" text-blue-700/50 font-bold underline block"
            to="https://github.com/haqueashraful/social-portal-react"
          >
            View code
          </Link>
        </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Projects;
