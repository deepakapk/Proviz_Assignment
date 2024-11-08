import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [applications, setApplications] = useState([])

  const fetchApplications = async()=>{
    try{
      const {data} = await axios.get("https://proviz-assignment-backend.onrender.com/api/v1/user/get/application",{withCredentials:true})
      setApplications(data.applications)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchApplications()
  },[])
  return (
    <div className="w-screen bg-slate-600 min-h-screen p-3 mx-auto">
      <div className=" my-8 p-4">
        <table className="min-w-full bg-white rounded-lg shadow-lg ">
          <thead className="hidden sm:table-header-group">
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-6">First Name</th>
              <th className="py-3 px-6">Last Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Message</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              return (
                <tr
                className="border-b hover:bg-gray-100 flex flex-col sm:table-row sm:flex-row"
                  key={index}
                >
                  <td className="py-4 px-6 before:content-['Name:'] before:font-semibold sm:before:content-none">
                    {application.firstname}
                  </td>
                  <td className="py-4 px-6 before:content-['Name:'] before:font-semibold sm:before:content-none">
                    {application.lastname}
                  </td>
                  <td className="py-4 px-6 before:content-['Email:'] before:font-semibold sm:before:content-none">
                    {application.email}
                  </td>
                  <td className="py-4 px-6 before:content-['Query:'] before:font-semibold sm:before:content-none">
                    {application.phone}
                  </td>
                  <td className="py-4 px-6 before:content-['Query:'] before:font-semibold sm:before:content-none">
                    {application.message}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
