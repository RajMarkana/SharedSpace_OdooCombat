import React, { useState } from "react";
import { FaLocationDot, FaCheck } from "react-icons/fa6";
import { AiOutlineNumber } from "react-icons/ai";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ViewResource = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    {
      id: 1,
      category: "Category",
      title: "Lyft launching cross-platform",
      location: "changa",
      number: 50,
      price: 1999,
      availability: true,
      description:
        "This is a detailed description of the resource, including various details and specifications that are important to know.",
      notes: "Keep in a dry place.",
    },
    // Add more resources as needed
  ];

  const openModal = (resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedResource(null);
  };

  const handleEdit = () => {
    // Handle the edit action
    console.log("Edit clicked for", selectedResource);
  };

  const handleDelete = () => {
    // Handle the delete action
    console.log("Delete clicked for", selectedResource);
  };

  const Modal = ({ isOpen, onClose, resource }) => {
    if (!isOpen) return null;

    return (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        ></div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full mx-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <ImCross size={20} />
            </button>
            <div className="bg-[url('../hero.png')] rounded-3xl h-96 bg-cover bg-center flex justify-center items-center">
              {/* Optional: Add any overlay or content on top of the background image here */}
            </div>
            <div className="uppercase tracking-wide text-sm text-primary font-semibold mt-4">
              {resource.category}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black">
              {resource.title}
            </div>
            <div className="mt-4 text-gray-700">{resource.description}</div>
            <div className="mt-4 flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center justify-center">
                <FaLocationDot /> {resource.location}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <AiOutlineNumber /> {resource.number}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <RiMoneyRupeeCircleFill /> {resource.price}
              </div>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <FaCheck />{" "}
              {resource.availability ? "Available" : "Not Available"}
            </div>
            <div className="mt-4 text-gray-700">{resource.notes}</div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-primary text-white rounded-lg  flex flex-row items-center justify-center gap-2"
              >
                <MdEdit />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg  flex flex-row items-center justify-center gap-2"
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center mb-8 gap-5">
        <div className="flex max-w-md rounded-full p-2 bg-gray-100">
          <input
            type="text"
            className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none bg-gray-100"
            placeholder="Search..."
          />
          <button className="bg-[#2498b6] text-white rounded-full p-2 focus:outline-none ">
            <IoSearchSharp />
          </button>
        </div>

        <div className="bg-slate-100 rounded-2xl sm:w-1/6 w-1/6">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary text-center">
            4
          </h2>
          <p className="leading-relaxed text-center">Resources</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="flex gap-8 justify-between flex-wrap mb-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
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
                    {resource.category}
                  </div>
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    {resource.title}
                  </div>
                  <div className="mt-4 gap-2 items-center justify-between">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center justify-center">
                        <FaLocationDot /> {resource.location}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <AiOutlineNumber /> {resource.number}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <RiMoneyRupeeCircleFill /> {resource.price}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCheck />{" "}
                      {resource.availability ? "Available" : "Not Available"}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(resource)}
                    className="mt-4 inline-block text-primary font-semibold"
                  >
                    VIEW MORE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-8 justify-between flex-wrap mb-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="w-fit bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all "
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
                    {resource.category}
                  </div>
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    {resource.title}
                  </div>
                  <div className="mt-4 gap-2 items-center justify-between">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center justify-center">
                        <FaLocationDot /> {resource.location}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <AiOutlineNumber /> {resource.number}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <RiMoneyRupeeCircleFill /> {resource.price}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCheck />{" "}
                      {resource.availability ? "Available" : "Not Available"}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(resource)}
                    className="mt-4 inline-block text-primary font-semibold"
                  >
                    VIEW MORE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-8 justify-between flex-wrap mb-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="w-fit bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all "
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
                    {resource.category}
                  </div>
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    {resource.title}
                  </div>
                  <div className="mt-4 gap-2 items-center justify-between">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center justify-center">
                        <FaLocationDot /> {resource.location}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <AiOutlineNumber /> {resource.number}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <RiMoneyRupeeCircleFill /> {resource.price}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCheck />{" "}
                      {resource.availability ? "Available" : "Not Available"}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(resource)}
                    className="mt-4 inline-block text-primary font-semibold"
                  >
                    VIEW MORE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-8 justify-between flex-wrap mb-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="w-fit bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all "
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
                    {resource.category}
                  </div>
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    {resource.title}
                  </div>
                  <div className="mt-4 gap-2 items-center justify-between">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center justify-center">
                        <FaLocationDot /> {resource.location}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <AiOutlineNumber /> {resource.number}
                      </div>
                      <div className="flex gap-2 items-center justify-center">
                        <RiMoneyRupeeCircleFill /> {resource.price}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCheck />{" "}
                      {resource.availability ? "Available" : "Not Available"}
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(resource)}
                    className="mt-4 inline-block text-primary font-semibold"
                  >
                    VIEW MORE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedResource && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          resource={selectedResource}
        />
      )}
    </>
  );
};

export default ViewResource;