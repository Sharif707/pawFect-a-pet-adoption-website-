import React, { useEffect, useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import Swal from 'sweetalert2'
import axios from "axios";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../../Components/Shared/LoadingSpinner/LoadingSpinner";


const AdoptionRequestTable = () => {
  const [adoptionData, setAdoptionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const userEmail = user?.email;
  console.log("user email", userEmail);
  const axiosSecure = useAxiosSecure();

  const fetchAdoptionData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/adoption-request/${userEmail}`
      );
      setAdoptionData(data);
    } catch (error) {
      console.error("Couldn't fetch adoption data", error);
      setError("Failed to fetch adoption requests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchAdoptionData();
    }
  }, [userEmail]);



  const handleDelete = async (id) => {
    // Display SweetAlert confirmation dialog
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
        try {
       
          const { data } = await axiosSecure.delete(`/delete-adoption/${id}`);
          if (data?.deletedCount === 1) {
            setAdoptionData((prev) => {
              return prev.filter((adoption) => adoption._id !== id);
            });
      
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting adoption:", error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting the record.",
            icon: "error",
          });
        }
      }
    });
  };
  
  const columns = [
    {
      accessorKey: "petDetails.petName",
      header: "Pet Name",
      cell: ({ row }) => row.original.petDetails?.petName || "N/A",
    },
    {
      accessorKey: "petDetails.email",
      header: "Email",
      cell: ({ row }) => row.original.petDetails?.email || "N/A",
    },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "address", header: "Address" },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleAccept(row.original._id)}
            className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Accept
          </button>
          <button onClick={() => handleDelete(row.original._id)} className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
            Reject
          </button>
        </div>
      ),
    },
  ];

  // Initialize the table
  const table = useReactTable({
    data: adoptionData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Adoption Requests</h1>
      {loading ? (
        <LoadingSpinner
          count={5}
          width={300}
          height={30}
          message="Loading data"
        />
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup._id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header._id}
                      className="text-left px-4 py-2 border border-gray-300 text-gray-700 font-semibold"
                    >
                      {flexRender(
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
                <tr key={row._id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell._id}
                      className="px-4 py-2 border border-gray-300 text-gray-600"
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
      )}
    </div>
  );
};

export default AdoptionRequestTable;
