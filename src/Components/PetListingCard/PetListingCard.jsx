import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PetListingCard = ({ pet }) => {
  const {
    petCategory,
    image,
    petName,
    petLocation,
    petAge,
    longDescription,
    _id,
  } = pet || {};

  return (
    <Card className="max-w-sm p-4 shadow-lg hover:shadow-xl transition duration-300 bg-white">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={petName}
          className="rounded-t-lg object-cover w-full h-48"
        />

        {/* Pet Category Badge */}
        <div className="absolute top-2 left-2 bg-yellow-500 px-3 py-1 rounded-md shadow-md">
          <Typography className="text-xs font-bold text-white uppercase">
            {petCategory}
          </Typography>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Pet Name */}
        <Typography
          variant="h6"
          className="font-bold text-gray-800 mb-1 capitalize"
        >
          {petName}
        </Typography>

        {/* Pet Location */}
        <Typography
          variant="small"
          className="text-gray-600 uppercase tracking-wide"
        >
          Location: {petLocation}
        </Typography>

        <Typography variant="small" className="text-gray-500 mt-1">
          Age: {petAge}
        </Typography>

        <Typography
          variant="paragraph"
          className="mt-2 text-sm text-gray-700 line-clamp-3"
        >
          {longDescription}
        </Typography>

        <Link to={`/pet-details/${_id}`}>
          <Button color="blue" size="sm" ripple={true} className="mt-4 w-full">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PetListingCard;
