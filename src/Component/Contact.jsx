// import { useRef } from 'react';
// import emailjs from 'emailjs-com';
// import { Card, message as AntdMessage } from 'antd';
// import Heading from './Heading';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_a6t47ve',
//       'template_oz3eakf',
//       form.current,
//       'hQJkCESozsSk3i6M1'
//     )
//     .then(
//       () => {
//         AntdMessage.success('Email successfully sent!');
//         form.current.reset();
//       },
//       (error) => {
//         AntdMessage.error('Email sending failed, please try again.');
//         console.log('FAILED...', error.text);
//       }
//     );
//   };

//   return (
//     <div className="text-center py-10 px-8 lg:px-24 w-full">
//       <Heading text={"Contact"} />
      
//       {/* Form and Contact Cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
//         <Card hoverable className="border-gre drop-shadow-xl">
//           <h1 className="text-2xl my-4 font-bold text-blue-400">Send us a message</h1>
//           <form ref={form} className="flex flex-col justify-center items-center gap-5" onSubmit={sendEmail}>
//             <input
//               className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
//               name="from_name"
//               type="text"
//               placeholder="Name"
//             />
//             <input
//               className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
//               name="reply_to"
//               type="email"
//               placeholder="Email"
//             />
//             <textarea
//               className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
//               placeholder="Message"
//               name="message"
//               rows="5"
//             ></textarea>
//             <button className="w-full p-2 bg-blue-500/50 text-white" type="submit">Submit</button>
//           </form>
//         </Card>

//         {/* Contact Information Cards */}
//         <div className="flex flex-col justify-between gap-5 lg:gap-0 w-full">
//           <Card hoverable className="border-gre drop-shadow-lg">
//             <h1 className="text-2xl font-bold text-blue-400">Phone</h1>
//             <p className="text-xl">+880 185632 8101</p>
//           </Card>
//           <Card hoverable className="border-gre drop-shadow-xl">
//             <h1 className="text-2xl font-bold text-blue-400">Email</h1>
//             <p className="text-xl">123ashrafulhaque@gmail.com</p>
//           </Card>
//           <Card hoverable className="border-gre drop-shadow-xl">
//             <h1 className="text-2xl font-bold text-blue-400">Address</h1>
//             <p className="text-xl">Dhaka, Bangladesh</p>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Card, message as AntdMessage } from 'antd';
import Heading from './Heading';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m1y0nao',
      'template_oz3eakf',
      form.current,
      'hQJkCESozsSk3i6M1'
    )
    .then(
      () => {
        AntdMessage.success('Email successfully sent!');
        setFormData({ from_name: '', reply_to: '', message: '' });
      },
      (error) => {
        AntdMessage.error('Email sending failed, please try again.');
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div className="text-center py-10 px-8 lg:px-24 w-full">
      <Heading text={"Contact"} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        <Card hoverable  className=" rounded-lg drop-shadow-xl z-0 p-6">
          <h1 className="text-2xl my-4 font-bold text-blue-400">Send us a message</h1>
          <form ref={form} className="flex flex-col justify-center items-center gap-5" onSubmit={sendEmail}>
            <input
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              name="from_name"
              type="text"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              name="reply_to"
              type="email"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
            />
            <textarea
              className="w-full p-2 border border-blue-700/50 rounded-md focus:outline-none"
              placeholder="Message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="w-full p-2 bg-blue-500/50 text-white" type="submit">Submit</button>
          </form>
        </Card>

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
