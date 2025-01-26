import React, { useState } from "react";
import { Select, Option, Input } from "@material-tailwind/react";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const AllDonations = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

  const {
    data: donations = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-donations", search, sortOption],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-donations?search=${search}&sort=${sortOption}`
      );
      console.log("all donations", data);
      return data;
    },
  });

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  if (isLoading)
    return (
      <LoadingSpinner count={5} width={300} height={30} message="Loading data" />
    );

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <div className="text-red-500">
          Error fetching donations. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
              <title>
               All Donations
              </title>
            </Helmet>
      <div className="max-w-screen-xl mx-auto my-8 p-4">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          All Pet Campaigns Getting Funded
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            label="Search by name"
            placeholder="Type pet name..."
            className="w-full"
          />
          <button
            onClick={handleSearch}
            className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            Search
          </button>

          <Select
            label="Sort by"
            onChange={handleSortChange}
            value={sortOption}
            className="w-full"
          >
            <Option value="date-desc">Newest Campaign</Option>
            <Option value="date-asc">Oldest Campaign</Option>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.length > 0 ? (
            donations.map((donation) => (
              <DonationCard key={donation._id} donation={donation} />
            ))
          ) : (
            <p className="text-center text-gray-500">No campaigns found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDonations;
