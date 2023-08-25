import React from 'react';
import {BiSolidDashboard} from "react-icons/bi"
import {SiManageiq} from "react-icons/si"
import {RiLockPasswordLine} from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import LS from '../utils';

const Sidebar = () => {
  
  const navigate = useNavigate()

  return (
    <aside className="bg-white p-4">
      <nav>
        <ul>
          <li onClick={()=>navigate("/dashboard")} className="mb-3 border-b px-2 py-1 rounded-md cursor-pointer flex items-center space-x-1 text-blue-500">
            <span className=" hover:underline font-bold text-xl">Job Vacancy</span>
          </li>
          <li className="mb-3 px-2 py-1 rounded-md cursor-pointer flex items-center justify-center space-x-1 text-blue-500">
            <img src={LS("image")} className='w-20 h-20 rounded-lg' alt='profile'/>
          </li>
          <li onClick={()=>navigate("/dashboard")} className="mb-4 mt-7 border shadow px-2 py-1 rounded-md cursor-pointer flex items-center space-x-1 text-blue-500">
            <span><BiSolidDashboard/></span>
            <span className=" hover:underline">Dashboard</span>
          </li>
          <li onClick={()=>navigate("/management-data")} className="mb-4 border shadow px-2 py-1 rounded-md cursor-pointer flex items-center space-x-1 text-blue-500">
            <span><SiManageiq/></span>
            <span className=" hover:underline">Management Data</span>
          </li>
          <li onClick={()=>navigate("/change-password")} className="mb-4 border shadow px-2 py-1 rounded-md cursor-pointer flex items-center space-x-1 text-blue-500">
            <span><RiLockPasswordLine/></span>
            <span className=" hover:underline">Change Password</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
