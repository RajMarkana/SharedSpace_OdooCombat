
import React, { useState } from "react";
import { FaLocationDot, FaCheck } from "react-icons/fa6";
import { AiOutlineNumber } from "react-icons/ai";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const Dashboard = () => {
  return (
    <>

      <section class="text-secondary body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap justify-between gap-5 -m-4 text-center">
            <div class="bg-slate-100 rounded-2xl p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">2.7K</h2>
              <p class="leading-relaxed">Resource</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">1.8K</h2>
              <p class="leading-relaxed">Clients</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="bg-slate-100 rounded-2xl  p-10 sm:w-1/5 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-primary">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>


      <div className='mt-10'>
        <h1 className='text-2xl font-semibold'>Recently Added Resource</h1>
      </div>

      <div className="mt-10 flex gap-8 justify-between flex-wrap mb-8">
     
            <div
              
              className="w-fit bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src="../hero.png"
                    alt="People working on laptops"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                  Category

                  </div>
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                  Lyft launching cross-platform
                  </div>
                  <div className="mt-4 gap-2 items-center justify-between">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center justify-center">
                        <FaLocationDot />changa
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <AiOutlineNumber /> 50
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <RiMoneyRupeeCircleFill /> 1999
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCheck />
                      {true ? "Available" : "Not Available"}
                    </div>
                  </div>

              
                </div>
              </div>
            </div>
          
        </div>


    </>
  )
}

export default Dashboard