import React from "react";
import { Input, Select, Option } from "@material-tailwind/react";

const SearchSort = ({ onSearchChange, onCategoryChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
    <Input
     
      onChange={(e) => onSearchChange(e.target.value)}
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
      label="Filter By Category"
      onChange={(value) => onCategoryChange(value)}
      
      className="w-full"
    >
       <Option value="">All Categories</Option>
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="bird">Bird</Option>
    </Select>
  </div>
  );
};

export default SearchSort;