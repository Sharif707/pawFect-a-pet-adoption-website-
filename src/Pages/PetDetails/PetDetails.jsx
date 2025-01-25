import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner/LoadingSpinner";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import SubmitModal from "../../Components/SubmitModal/SubmitModal";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const PetDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [formData, setformData] = useState({
    phone: "",
    address: "",
  });
  const {
    data: pet = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pet-details", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/pet-detaills/${id}`);
      console.log("pet details", data);
      return data;
    },
  });
  const toggleModal = () => setIsOpen(!isOpen);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({ ...prev, [name]: value }));
  };
  const { _id, petName, petAge, image } = pet;
  const handleSubmit = async (e) => {
    const updatedDoc = {
      ...formData,

      petDetails: {
        email: user?.email,
        petId: _id,
        petName,
        petAge,
        image,
      },
    };
    console.log("updatedoc", updatedDoc);
    const { data } = axiosSecure.post("/adoption-requested-pets", updatedDoc);
    if(data?.insertedId) {
      
    toast.success("successfully submitted")
    }
    console.log("request status", data);
    toggleModal();
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
          Error fetching donations. Please try again later.
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader floated={false} className="relative">
          <img
            src={pet.image}
            alt={pet.petName}
            className="h-64 w-full object-cover"
          />
        </CardHeader>

        <CardBody>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{pet.petName}</h1>
            <p className="text-gray-500 text-sm uppercase">{pet.petCategory}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              About {pet.petName}
            </h2>
            <p className="text-gray-600 mt-2">{pet.shortDescription}</p>
            <p className="text-gray-600 mt-4">{pet.longDescription}</p>
          </div>

          <div className="text-center">
            <Button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              onClick={toggleModal}
            >
              Adopt {pet.petName}
            </Button>
          </div>
        </CardBody>
      </Card>
      <SubmitModal
        toggleModal={toggleModal}
        isOpen={isOpen}
        pet={pet}
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        user={user}
      />
    </div>
  );
};

export default PetDetails;
