import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PetsTable = () => {
  const [pets, setPets] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [pageSize, setPageSize] = useState(10); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { user } = useAuth();
  const navigate = useNavigate()

  // Fetch data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-pets/${user?.email}`
        );
        setPets(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch pets", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);


  const totalPages = Math.ceil(pets.length / pageSize); 
  const startIndex = (currentPage - 1) * pageSize; 
  console.log(startIndex);
  const currentData = pets.slice(startIndex, startIndex + pageSize); 


  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


 

  const handleAdopt = async (id) => {
    console.log('adopted id', id)
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/pet-info-update/${id}`, {
        isAdopted: true,

      }); // Replace with your adopt API
      setPets((prevPets) =>
        prevPets.map((pet) =>
          pet._id === id ? { ...pet, isAdopted: true } : pet
        )
      );
    } catch (err) {
      console.error("Failed to mark as adopted", err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id)
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/delete-pets/${id}`); // Replace with your delete API
      setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
      toast.success("successfully deleted")
    } catch (err) {
      console.error("Failed to delete pet", err);
    }
  };

  // Columns definition (existing functionality)
  const columns = [
    { header: "Name", accessorKey: "petName" },
    { header: "Category", accessorKey: "petCategory" },
    { header: "Age", accessorKey: "petAge" },
    { header: "Location", accessorKey: "petLocation" },
    { header: "Short Description", accessorKey: "shortDescription" },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ getValue }) => (
        <img
          src={getValue()}
          alt="pet"
          className="w-10 h-10 object-cover rounded"
        />
      ),
    },
    {
      header: "Adoption Status",
      accessorKey: "isAdopted",
      cell: ({ getValue }) =>
        getValue() ? (
          <span className="text-green-500">Adopted</span>
        ) : (
          <span className="text-red-500">Not Adopted</span>
        ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
       
        <div className="flex gap-2">
          <button
            className="bg-lime-500 text-white px-3 py-1 rounded hover:bg-lime-600"
            onClick={() => navigate(`/dashboard/update-pet/${row?._id}`)}
          >
            Update
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => handleAdopt(row?._id)}
          >
            Adopt
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(row?._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading pets: {error.message}</p>;
  }

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-4">Pets Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="border border-gray-300 px-4 py-2"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="border border-gray-300 px-4 py-2">
                  {column.cell
                    ? column.cell({
                        row,
                        getValue: () => row[column.accessorKey],
                      })
                    : row[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {pets.length > 10 && (
        <div className="flex justify-end items-center gap-4 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PetsTable;
