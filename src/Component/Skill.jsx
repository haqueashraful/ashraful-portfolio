import Heading from "./Heading";

const Skill = () => {
  return (
    <div id="skill" className="text-left px-8 lg:px-24 py-10 w-full">
      <Heading text="Skill" />
      <div>
        <div className="flex justify-between items-start flex-wrap  py-10">
          <div>
            <h1 className="text-3xl font-bold pb-4">Design</h1>

            <ul className=" space-y-1 text-lg">
                <li>Figma</li>
                <li>PSD to HTML</li>
                <li>Adobe Photoshop</li>
                <li>Canva</li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold pb-4">Frontend</h1>
            <ul className=" space-y-1 text-lg">
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold pb-4">Backend</h1>
            <ul className=" space-y-1 text-lg">
                <li>Node JS</li>
                <li>Express JS</li>
                <li>MongoDB</li>

            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold pb-4">Soft Skills</h1>
            <ul className=" space-y-1 text-lg">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Fast learner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
