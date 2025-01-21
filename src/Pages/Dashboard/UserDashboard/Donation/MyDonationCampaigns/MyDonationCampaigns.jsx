// DonationCampaigns.jsx
import React, { useState } from "react";
import { PauseCircle, PlayCircle, Edit, Users } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ProgressBar from "../../../../../Components/ProgressBar/ProgressBar";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";
import toast from "react-hot-toast";
import DonatorsModal from "../../../../../Components/Modal/DonatorsModal";
import axios from "axios";

const DonationCampaigns = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showDonators, setShowDonators] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const {
    data: donations = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myDonations", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/my-donation-campaigns/${user?.email}`
      );
      console.log("responsed", response);
      return response.data;
    },
    enabled: !!user?.email,
  });

  // Mutation for toggling pause state
  const togglePauseMutation = useMutation({
    mutationFn: (donationId) =>
      axiosSecure.patch(`/donations/${donationId}/toggle-pause`),
    onSuccess: () => {
      queryClient.invalidateQueries(["myDonations", user?.email]);
      toast.success("Donation status updated successfully");
    },
    onError: (error) => {
      toast.error("Failed to update donation status");
      console.error("Error:", error);
    },
  });

  const handlePauseToggle = async (donationId) => {
    // togglePauseMutation.mutate(donationId);
    console.log("donation id", donationId);
    const { data } = await axiosSecure.patch(`/toggle-pause/${donationId}`, {
      isPaused: true,
    });
    refetch();
    console.log(data);
  };

  const handleEdit = (donationId) => {
    // Navigate to edit page with the donation ID
    console.log("Navigate to edit page for donation:", donationId);
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
        console.log("donation doc", donation);
        return (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => handlePauseToggle(donation._id)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title={donation.isPaused ? "Resume Donation" : "Pause Donation"}
              disabled={donation.isPaused}
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
    data: donations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">My Donation Campaigns</h2>
        {donations.length > 0 ? (
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

export default DonationCampaigns;
