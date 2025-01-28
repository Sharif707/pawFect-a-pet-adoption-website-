import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const AnimalVisionSection = () => {
    const {data: categoryImages, isLoading, error} = useQuery({
        queryKey: ['categoryImages'],
        queryFn: async() => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/category-images`)
            console.log('category images', data);
            return data

        }
    })
    if (isLoading)
    return (
      <LoadingSpinner count={5} width={300} height={30} message="Loading data" />
    );
  return (
    <section className="bg-cream text-center py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Our vision is for all animals to live a life free of cruelty and suffering.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {
        categoryImages.length > 0 && categoryImages.map((category) =>  <div className="group relative">
        <img
          src={category.image}
          alt="Kindness"
          className="w-full h-24 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
        />
        <h3 className="mt-4 text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
          Kindness
        </h3>
      </div>)
       }

      

    

       
      </div>
    </section>
  );
};

export default AnimalVisionSection;
