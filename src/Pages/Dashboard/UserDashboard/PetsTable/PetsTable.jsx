import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useAuth from "../../../../Hooks/useAuth";

const PetsTable = () => {
  const navigate = useNavigate();
  const [petsData, setPetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useAuth()

  // Fetch pets data
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-pets/${user?.email}`);
        setPetsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch pets:", error);
        setIsLoading(false);
      }
    };
    fetchPets();
  }, []);

  // Handle deletion
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/pets/${id}`);
        // Update state after deletion
        setPetsData((prevPets) => prevPets.filter((pet) => pet._id !== id));
      } catch (error) {
        console.error("Failed to delete the pet:", error);
      }
    }
  };

  // Handle marking as adopted
  const handleAdopt = async (id) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/api/pets/${id}`, {
        isAdopted: true,
      });
      // Update state after marking as adopted
      setPetsData((prevPets) =>
        prevPets.map((pet) =>
          pet._id === id ? { ...pet, isAdopted: true } : pet
        )
      );
    } catch (error) {
      console.error("Failed to mark the pet as adopted:", error);
    }
  };

  const columns = [
    {
      header: "Name",
      accessorKey: "petName", // Matches the "petName" field in your response
    },
    {
      header: "Category",
      accessorKey: "petCategory", // Matches the "petCategory" field
    },
    {
      header: "Age",
      accessorKey: "petAge", // Matches the "petAge" field
    },
    {
      header: "Location",
      accessorKey: "petLocation", // Matches the "petLocation" field
    },
    {
      header: "Short Description",
      accessorKey: "shortDescription", // Matches the "shortDescription" field
    },
    {
      header: "Image",
      accessorKey: "image", // Matches the "image" field
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
      accessorKey: "isAdopted", // Matches the "isAdopted" field
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
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => handleAdopt(row.original._id)}
          >
            Adopt
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleDelete(row.original._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: petsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Loading Pets...</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Added Pets</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-gray-300 px-4 py-2"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PetsTable;
