import React from "react";

import { Card, Typography, Progress } from "@material-tailwind/react";
const DonationCard = ({donation}) => {
  
   const {petImage, campaignName, email, fullName, donationAmount, longDescription} = donation || {}

  
  return (
    <Card className="max-w-sm p-4 shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={petImage}
          alt="Emergency Veterinary Costs"
          className="rounded-t-lg object-cover w-full h-48"
        />
        {/* Country Badge */}
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow-md">
          <Typography className="text-xs font-bold">🇦🇹 AT</Typography>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Category */}
        <Typography
          variant="small"
          className="text-yellow-500 uppercase font-bold tracking-wide"
        >
          Animals & Pets
        </Typography>

        {/* Title */}
        <Typography variant="h5" className="mt-2 font-semibold text-gray-800">
          {campaignName}
        </Typography>

   
        <Typography variant="paragraph" className="mt-1 text-gray-600 text-sm">
         {longDescription}
        </Typography>

 
        <Typography className="mt-4 text-gray-600 text-sm">
          <strong>26 Donors</strong>
        </Typography>

        {/* Progress Bar */}
        <div className="mt-2">
          <Progress value={87} color="green" />
        </div>

        {/* Fundraising Info */}
        <Typography className="mt-2 text-gray-800 font-semibold">
          €587 raised
        </Typography>
        <Typography className="text-gray-500 text-sm">97% funded</Typography>
      </div>
    </Card>
  );
};

export default DonationCard;
