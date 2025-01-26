// DonationCampaigns.jsx
import React, { useState } from "react";
import { PauseCircle, PlayCircle, Edit, Users } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";



import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DonatorsModal from "../../../../Components/Modal/DonatorsModal";
import useAuth from "../../../../Hooks/useAuth";
import LoadingSpinner from "../../../../Components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";


const AllCampaigns = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showDonators, setShowDonators] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: allDonations = [],
    isLoading,
    error,
    
    refetch,
  } = useQuery({
    queryKey: ["alldonations"],
    queryFn: async () => {
      const response = await axiosSecure(
        `/all-donation-campaigns`
      );
      console.log('all donation campaigns', response.data);
  
      return response.data;
    },
  
  });

  const handlePauseToggle = async (donationId) => {

    const { data } = await axiosSecure.patch(`/toggle-pause/${donationId}`);
    if (data?.modifiedCount) {
      toast.success("Button toggled");
    }
    refetch();
  };

  const handleEdit = (donationId) => {
    navigate(`/dashboard/edited-donation/${donationId}`);
  };

  const handleViewDonators = (donation) => {
    setSelectedDonation(donation);
    setShowDonators(true);
  };

  const columnHelper = createColumnHelper();
 

  const columns = [
    columnHelper.accessor("petImage", {
      header: "Pet Image",
      cell: (info) => (
        <img
          src={info.getValue()}
          alt="Pet"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
    }),
    columnHelper.accessor((row) => `${row.fullName}`, {
      id: "fullName",
      header: "Created By",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("donationAmount", {
      header: "Required Amount",
      cell: (info) => <span>${info.getValue()?.toLocaleString() || 0}</span>,
    }),
    columnHelper.accessor("shortDescription", {
      header: "Description",
      cell: (info) => (
        <div className="max-w-xs truncate" title={info.getValue()}>
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("DonationCreated", {
      header: "Created Date",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("_id", {
      header: "Actions",
      cell: (info) => {
        const donation = info.row.original;

        return (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => handlePauseToggle(donation._id)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title={donation.isPaused ? "Resume Donation" : "Pause Donation"}
            >
              {donation.isPaused ? (
                <PlayCircle className="h-5 w-5 text-green-600" />
              ) : (
                <PauseCircle className="h-5 w-5 text-yellow-600" />
              )}
            </button>
            <button
              onClick={() => handleEdit(donation._id)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Edit Donation"
            >
              <Edit className="h-5 w-5 text-blue-600" />
            </button>
            <button
              onClick={() => handleViewDonators(donation)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="View Donators"
            >
              <Users className="h-5 w-5 text-purple-600" />
            </button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: allDonations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <LoadingSpinner count={5} width={300} height={30} message="fetching data" />;
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <div className="text-red-500">
          Error loading donations. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow">
      <Helmet>
        <title>
         All Donations
        </title>
      </Helmet>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">My Donation Campaigns</h2>
        {allDonations.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b">
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="text-left p-4">
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
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-4">
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
        ) : (
          <div className="text-center py-8 text-gray-500">
            No donation campaigns found
          </div>
        )}

        {showDonators && (
          <DonatorsModal
            donation={selectedDonation}
            onClose={() => setShowDonators(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AllCampaigns;
