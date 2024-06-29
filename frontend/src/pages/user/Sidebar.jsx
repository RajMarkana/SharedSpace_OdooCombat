import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiHome, HiBookOpen, HiChatAlt, HiLogout } from 'react-icons/hi';
import { PiExam } from "react-icons/pi";

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem("token");
        localStorage.clear();
        navigate("/")
    }

    return (

        <div className=" flex flex-col  px-3 py-3 text-secondary h-screen overflow-hidden">
            <div className='bg-slate-200 rounded-2xl h-screen'>
                <div className="flex items-center justify-center p-10">
                    <span className="text-xl font-bold bg-clip-text">
                        <h1>SharedSpace.</h1>
                    </span>
                </div>
                <nav className="flex-grow  py-4 px-6">
                    <ul className='flex flex-col gap-4'>
                        <li className={`p-4 rounded-lg ${path == "/user" || path == "/user/" ? "bg-primary shadow-3xl text-white" : ""}  `}>
                            <Link
                                to="/user"

                            >
                                <div className="flex items-center space-x-2">
                                    <HiHome className="w-5 h-5" />
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li className={`p-4 rounded-lg ${path == "/user/add-resource" || path == "/user/add-resource" ? "bg-primary shadow-3xl text-white" : ""}  `}>
                            <Link
                                to="./add-resource"

                            >
                                <div className="flex items-center space-x-2">
                                    <PiExam className="w-5 h-5" />
                                    <span>Add Resource</span>
                                </div>
                            </Link>
                        </li>
                        <li className={`p-4 rounded-lg ${path == "/user/view-resource" || path == "/student/view-resource" ? "bg-primary shadow-3xl text-white" : ""}  `}>
                            <Link
                                to="./view-resource"

                            >
                                <div className="flex items-center space-x-2">
                                    <PiExam className="w-5 h-5" />
                                    <span>View Resource</span>
                                </div>
                            </Link>
                        </li>
                        <li className={`p-4 rounded-lg   `}>
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 "
                            >
                                <HiLogout className="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </li>


                    </ul>
                </nav>
               
            </div>
        </div>

    )
}

export default Sidebar