import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[900px]  bg-[#0a192f] flex justify-center items-center"
    >
      <form
        action=""
        className="flex flex-col  max-w-[600px] w-full py-6 mt[300px]"
      >
        <div className="pb-8">
          <p className=" text-4xl  font-bold inline text-gray-300 border-b-4 border-pink-600">
            Contact Me
          </p>
          <p className="py-4 text-gray-300">
            // Submit the form bellow or shoot me an email on myemail@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 "
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-[#ccd6f6] p-2 my-4 "
        />
        <textarea
          name="message"
          placeholder="message"
          id=""
          rows="10"
          className="bg-[#ccd6f6] py-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600  hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
