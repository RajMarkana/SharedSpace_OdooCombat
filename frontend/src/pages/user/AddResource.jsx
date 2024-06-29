import React,{useState} from 'react'

const AddResource = () => {
  const [resourceData, setResourceData] = useState({
    title: "",
    description: "",
    quantity: "",
    date: "",
    image: "",
    category: "",
    condition: "",
    location: "",
    availability: "",
    purchaseDate: "",
    cost: "",
    supplier: "",
    maintenanceHistory: "",
    usageNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResourceData({
      ...resourceData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Resource Data:", resourceData);
    // Reset form fields or perform other actions after submission
    setResourceData({
      title: "",
      description: "",
      quantity: "",
      date: "",
      image: "",
      category: "",
      condition: "",
      location: "",
      availability: "",
      purchaseDate: "",
      cost: "",
      supplier: "",
      maintenanceHistory: "",
      usageNotes: "",
    });
  };
  return (
    
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Resource Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={resourceData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter resource title"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={resourceData.quantity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter quantity"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={resourceData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={resourceData.category}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter category"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={resourceData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label
                htmlFor="availability"
                className="block text-sm font-medium text-gray-700"
              >
                Availability
              </label>
              <input
                type="text"
                id="availability"
                name="availability"
                value={resourceData.availability}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter availability"
              />
            </div>
            <div>
              <label
                htmlFor="purchaseDate"
                className="block text-sm font-medium text-gray-700"
              >
                Purchase Date
              </label>
              <input
                type="date"
                id="purchaseDate"
                name="purchaseDate"
                value={resourceData.purchaseDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-gray-700"
              >
                Cost
              </label>
              <input
                type="text"
                id="cost"
                name="cost"
                value={resourceData.cost}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter cost"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={resourceData.description}
                onChange={handleChange}
                rows={5} // Increased the number of rows for larger field
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter resource description"
              />
            </div>
            <div className="w-[100%] col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Resource Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
              />
              {resourceData.image && (
                <img
                  src={URL.createObjectURL(resourceData.image)}
                  alt="Selected Image"
                  className="mt-2 rounded-lg"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
            </div>
            <div className="col-span-2">
              <label
                htmlFor="usageNotes"
                className="block text-sm font-medium text-gray-700"
              >
                Usage Notes
              </label>
              <textarea
                id="usageNotes"
                name="usageNotes"
                value={resourceData.usageNotes}
                onChange={handleChange}
                rows={5} // Increased the number of rows for larger field
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 placeholder-gray-400 sm:text-sm"
                placeholder="Enter usage notes"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className=" px-4 py-2 text-base font-medium text-white bg-primary rounded-full shadow-3xl "
            >
              Add Resource
            </button>
          </div>
        </form>
      
  )
}

export default AddResource