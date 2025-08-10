import React from "react";

const Contact = () => {
  return (
    
    <div className=" flex justfiy-content-center items-center  border p-20">
      <h1 className="px-40 font-semibold text-orange-900">Have Question In Mind?
     Let Us Help You</h1>
      <div className="items-center justify-content-left ">
        <input type="text" className="items-center justify-content-left border"  placeholder="yourmail@gmail.com" />
        <button className="px-10 mt-2 bg-[#1d133a] text-white px-5 py-3 text-lg rounded-full">Submit</button>
      </div>
    </div>
  );

};

export default Contact;