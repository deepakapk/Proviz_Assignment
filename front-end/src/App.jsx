import React from 'react'
import Hero from './Pages/Hero'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from './Pages/Admin';


const App = () => {
  return (
    <>
      <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path='/admin/getapplication' element={<Admin/>}/>
        </Routes>
      </Router>
   
    </>

  )
}

export default App
