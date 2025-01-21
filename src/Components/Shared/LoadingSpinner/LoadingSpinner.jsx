import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSpinner = ({ count = 1, width = 200, height = 20, message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Skeleton count={count} width={width} height={height} />
      <p className="mt-4 text-gray-600 text-lg">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
