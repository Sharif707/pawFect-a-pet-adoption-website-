// ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ current, max }) => {
  const percentage = Math.round((current / max) * 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span>${current.toLocaleString()}</span>
        <span>${max.toLocaleString()}</span>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300 ease-in-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute w-full h-full flex items-center justify-center text-xs font-medium">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;