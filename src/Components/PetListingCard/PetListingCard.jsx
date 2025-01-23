import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
const PetListingCard = ({pet}) => {
    const {
        petCategory, image, petName,
        petLocation, petAge, shortDescription, longDescription} = pet || {}
    return (
        <Card className="max-w-sm p-4 shadow-lg">
    
        <div className="relative">
          <img
            src={image}
            alt="Emergency Veterinary Costs"
            className="rounded-t-lg object-cover w-full h-48"
          />
      
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow-md">
            <Typography className="text-xs font-bold">🇦🇹 AT</Typography>
          </div>
        </div>
  
      
        <div className="p-4">

          <Typography
            variant="small"
            className="text-yellow-500 uppercase font-bold tracking-wide"
          >
           {petName}
          </Typography>
  
      
          <Typography variant="h5" className="mt-2 font-semibold text-gray-800">
           let's see
          </Typography>
  
     
          <Typography variant="paragraph" className="mt-1 text-gray-600 text-sm">
           {longDescription}
          </Typography>
  
   
          
  
        
  
          {/* Fundraising Info */}
          {/* <Typography className="mt-2 text-gray-800 font-semibold">
            €587 raised
          </Typography>
          <Typography className="text-gray-500 text-sm">97% funded</Typography> */}
        </div>
      </Card>
    );
};

export default PetListingCard;