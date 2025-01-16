import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu";

import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const MenuBar = () => {
  return (
    <DropdownMenu className="md:hidden">
      <DropdownMenuTrigger>
        <MdOutlineMenu className="w-8 h-auto" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuLabel>Pet Listing</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="relative px-4 py-2 rounded-md group">
          Donation Campaigns
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-500"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="relative px-4 py-2 rounded-md group">
          Login
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-500"></div>
        </DropdownMenuItem>
        <DropdownMenuItem className="relative px-4 py-2 rounded-md group">
          Register
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-500"></div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuBar;
