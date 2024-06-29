import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div className='mt-5'>

                <div className="bg-[url('./hero.png')] rounded-3xl h-96 bg-cover bg-center flex justify-center items-center" >
                    <div className='bg-white relative top-48 rounded-full shadow-2xl border-2 py-5   px-10 border-gray-300 flex justify-center items-center'>
                        <input type="text" placeholder='Search Resources.' className=' outline-none w-96  ' />
                        <GoSearch className='pl-2 text-2xl' />
                    </div>
                </div>


                <div className='mt-20 mb-20 flex justify-between flex-wrap  items-center'>
                    <div className="max-w-sm rounded-2xl shadow-2xl ">
                        <img src="./office (1).png" alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-3">

                            <div className="">
                                <h2 className="text-2xl font-bold tracking-wide">Donec lectus leo</h2>  
                            </div>

                            <div className='flex mt-3 justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                <FaLocationDot />
                                Mumbai
                                </div>

                                <button className='bg-primary px-6 py-2 rounded-full text-white shadow-3xl'>View More</button>
                            </div>
                          
                        </div>
                    </div>
                    <div className="max-w-sm rounded-2xl shadow-2xl ">
                        <img src="./office (2).png" alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-3">

                            <div className="">
                                <h2 className="text-2xl font-bold tracking-wide">Donec lectus leo</h2>  
                            </div>

                            <div className='flex mt-3 justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                <FaLocationDot />
                                Mumbai
                                </div>

                                <button className='bg-primary px-6 py-2 rounded-full text-white shadow-3xl'>View More</button>
                            </div>
                          
                        </div>
                    </div>
                    <div className="max-w-sm rounded-2xl shadow-2xl ">
                        <img src="./office (3).png" alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-3">

                            <div className="">
                                <h2 className="text-2xl font-bold tracking-wide">Donec lectus leo</h2>  
                            </div>

                            <div className='flex mt-3 justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                <FaLocationDot />
                                Mumbai
                                </div>

                                <button className='bg-primary px-6 py-2 rounded-full text-white shadow-3xl'>View More</button>
                            </div>
                          
                        </div>
                    </div>
                    
                    <div className="max-w-sm rounded-2xl shadow-2xl ">
                        <img src="./office (4).png" alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-3">

                            <div className="">
                                <h2 className="text-2xl font-bold tracking-wide">Donec lectus leo</h2>  
                            </div>

                            <div className='flex mt-3 justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                <FaLocationDot />
                                Mumbai
                                </div>

                                <button className='bg-primary px-6 py-2 rounded-full text-white shadow-3xl'>View More</button>
                            </div>
                          
                        </div>
                    </div>
                    <div className="max-w-sm rounded-2xl shadow-2xl ">
                        <img src="./office (5).png" alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-3">

                            <div className="">
                                <h2 className="text-2xl font-bold tracking-wide">Donec lectus leo</h2>  
                            </div>

                            <div className='flex mt-3 justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                <FaLocationDot />
                                Mumbai
                                </div>

                                <button className='bg-primary px-6 py-2 rounded-full text-white shadow-3xl'>View More</button>
                            </div>
                          
                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}

export default Hero