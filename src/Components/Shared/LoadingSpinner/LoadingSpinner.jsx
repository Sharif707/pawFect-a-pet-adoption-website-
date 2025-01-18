import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSpinner = ({ count, width, height }) => {
    console.log('it is loadinggggggggggg');
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-900">
       
      <Skeleton count={count} width={width} height={height} />
    </div>
  );
};

export default LoadingSpinner;