// components/TableSkeleton.jsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TableSkeleton = ({ rowsCount = 5, columnsCount = 6 }) => (
  <div className="w-full">
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          {[...Array(columnsCount)].map((_, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2">
              <Skeleton height={24} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(rowsCount)].map((_, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              <Skeleton height={24} /> {/* S.No */}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <Skeleton height={24} /> {/* Pet Name */}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <Skeleton height={24} /> {/* Category */}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <Skeleton height={64} width={64} circle /> {/* Image */}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <Skeleton height={24} /> {/* Status */}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <div className="flex gap-2">
                <Skeleton height={32} width={60} /> {/* Update button */}
                <Skeleton height={32} width={60} /> {/* Delete button */}
                <Skeleton height={32} width={60} /> {/* Adopt button */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 flex gap-2">
      <Skeleton width={80} height={35} /> {/* Previous button */}
      <Skeleton width={80} height={35} /> {/* Next button */}
    </div>
  </div>
);

export default TableSkeleton;