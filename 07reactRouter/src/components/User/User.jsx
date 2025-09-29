import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
  const { userid } = useParams();
  return (
    // Add a container to center the box on the page
    <div className="flex justify-center p-8 bg-gray-50 min-h-[calc(100vh-145px)]">
      {/* This is the main box with styling */}
      <div className="p-6 bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-2xl font-medium text-black bg-gray-600">
            User ID:
            {/* Style the actual ID differently to make it stand out */}
            <span className="ml-2 font-bold text-3xl text-orange-600">
              {userid}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
