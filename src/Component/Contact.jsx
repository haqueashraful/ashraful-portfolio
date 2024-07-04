import { Card } from "antd";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="text-center py-10 px-8 lg:px-24 w-full">
      <Heading text={"Contact"} />
      
      {/* Form and Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        <Card hoverable className="border-gre drop-shadow-xl">
          <h1 className="text-2xl my-4 font-bold text-blue-400">Send us a message</h1>
          <form className="flex flex-col justify-center items-center gap-5">
            <input
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              name="email"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              placeholder="Message"
              name="message"
              rows="5"
            ></textarea>
            <button className="w-full p-2 bg-blue-500/50 text-white">Submit</button>
          </form>
        </Card>

        {/* Contact Information Cards */}
        <div className="flex flex-col justify-between gap-5 lg:gap-0 w-full">
          <Card hoverable className="border-gre drop-shadow-lg">
            <h1 className="text-2xl font-bold text-blue-400">Phone</h1>
            <p className="text-xl">+880 185632 8101</p>
          </Card>
          <Card hoverable className="border-gre drop-shadow-xl">
            <h1 className="text-2xl font-bold text-blue-400">Email</h1>
            <p className="text-xl">123ashrafulhaque@gmail.com</p>
          </Card>
          <Card hoverable className="border-gre drop-shadow-xl">
            <h1 className="text-2xl font-bold text-blue-400">Address</h1>
            <p className="text-xl">Dhaka, Bangladesh</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
