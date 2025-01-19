import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useAuth from "../../../../Hooks/useAuth";
import TableSkeleton from "../../../../Components/Loader/TableSkeleton";
import Swal from "sweetalert2";

const PetsTable = () => {
  const navigate = useNavigate();
  const [petsData, setPetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  // Fetch pets data
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-pets/${user?.email}`
        );
        setPetsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch pets:", error);
        setIsLoading(false);
      }
    };
    fetchPets();
  }, []);
  const handleUpdate = (id) => {
    console.log(id);
  };
  // Handle deletion
  const handleDelete = async (id) => {
    console.log("deletedId", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/delete-pets/${id}`
        );
        console.log("deletd data", data);
        setPetsData((prevPets) => {
          return prevPets.filter((pet) => pet._id !== id);
        });
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  // Handle marking as adopted
  const handleAdopt = async (id) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/pet-info-update/${id}`, {
        isAdopted: true,
      });
   
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
      accessorKey: "petCategory",
    },
    {
      header: "Age",
      accessorKey: "petAge",
    },
    {
      header: "Location",
      accessorKey: "petLocation",
    },
    {
      header: "Short Description",
      accessorKey: "shortDescription",
    },
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
            onClick={() => handleUpdate(row.original._id)}
          >
            Update
          </button>
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
        <h1 className="text-2xl font-bold mb-4">Added Pets</h1>
        <TableSkeleton rowsCount={5} columnsCount={6} />
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
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
