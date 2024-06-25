import Heading from "./Heading";

const About = () => {
    return (
        <div className="text-center py-10 px-8 lg:px-24 w-full">
            <Heading text="About Me" />
                <div>
                <p className="text-xl text-left text-black py-10">
                Hi, I'm Ashraful Haque. I'm a Front End Web Developer. I'm a skilled
                React developer with expertise in building modern web applications
                using React.js, JavaScript, and related technologies. With one
                years of experience in front-end development, I specialize in
                creating interactive user interfaces that enhance user experiences
                and drive engagement.
              </p>
                </div>
        </div>
    );
};

export default About;