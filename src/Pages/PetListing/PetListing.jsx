import React, { useState } from "react";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner/LoadingSpinner";


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PetListingCard from "../../Components/PetListingCard/PetListingCard";
import { Input, Select } from "@material-tailwind/react";

const PetListing = () => {

 const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");
  const [category, setCategory] = useState("");
  const {
    data: pets = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-pets", search,  category],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/pet-listings?search=${search}&category=${category}`
      );
    
      return data;
    },
  });
  const handleCategoryChange = (value) => setCategory(value);

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };
  if (isLoading)
    return (
      <LoadingSpinner
        count={5}
        width={300}
        height={30}
        message="Loading data"
      />
    );

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 text-center">
        <div className="text-red-500">
          Error fetching Pet Datas. Please try again later.
        </div>
      </div>
    );
  }
  return (
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
        label="Filter by category"
        onChange={(value) => handleCategoryChange(value)}
        className="w-full"
      >
        <Option value="">All Categories</Option>
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="bird">Bird</Option>
      </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.length > 0 ? (
            pets.map((pet) => (
                <PetListingCard key={pet._id} pet={pet} />
            ))
          ) : (
            <p className="text-center text-gray-500">No campaigns found.</p>
          )}
        </div>
    </div>
  );
};

export default PetListing;
