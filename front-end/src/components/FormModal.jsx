import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";


const FormModal = ({ closeModal }) => {
    const form = useRef(null);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://proviz-assignment-backend.onrender.com/api/v1/user/post/application",{firstname,lastname,email,phone,message},{withCredentials:true,headers:{
                "Content-Type":"application/json"
            }})
            toast.success(response.data.message)
            setFirstname("")
            setLastname("")
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (error) {
            toast.error(error.response.data.message)
        }
      
    }
    
  return ReactDOM.createPortal(
    <div
      className="absolute inset-0 flex justify-center items-center h-screen w-screen pt-10"
      onClick={closeModal} // Close modal on overlay click
     
    >
      <div className="relative flex bg-black text-white h-[90%] overflow-auto md:h-fit w-screen md:max-w-[1200px] rounded-2xl opacity-[0.87] "
      onClick={(e) => e.stopPropagation()}> 
      <section className="bg-gray-900 py-10 px-6 md:px-10 lg:px-20 text-white w-screen">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">First Name</label>
              <input 
                type="text" 
                placeholder="Deepak" 
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Last Name</label>
              <input 
                type="text" 
                placeholder="Baghel"
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)} 
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input 
              type="email" 
              placeholder="example@example.com" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Phone</label>
            <input 
              type="tel" 
              placeholder="+1234567890"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Message</label>
            <textarea 
              placeholder="Your message here..." 
              value={message}
                onChange={(e)=>setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>

        <button onClick={closeModal}  className=" p-2 group transition-all text-2xl text-white right-3 top-3 z-40 rounded-full bg-gray-800 absolute "><IoClose className="group-hover:rotate-180 duration-150 ease-in-out"/></button>
        
      </div>
      
    </div>,
    document.getElementById("portal-root")
  );
};

export default FormModal;
