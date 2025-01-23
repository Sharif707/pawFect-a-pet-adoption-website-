import React from 'react';
import PetListingCard from '../PetListingCard/PetListingCard';

const PetsGrid = ({pets}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <PetListingCard key={pet._id} pet={pet} />
          ))
        ) : (
          <p className="text-center text-gray-500">No campaigns found.</p>
        )}
      </div>
    );
};

export default PetsGrid;