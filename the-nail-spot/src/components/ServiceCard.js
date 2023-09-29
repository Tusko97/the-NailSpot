import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="w-72 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="h-24 w-72">
        <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
      </div>
      {/* Title */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800 text-center w-full">
          {title}
        </h2>
      </div>
      {/* Description */}
      <div className="px-4 py-2">
        <p className="text-gray-600">{description}</p>
      </div>
      {/* "Book Now" Button */}
      <div className="px-4 py-2 flex justify-end">
        <Link to="/BookASlot">
          <button className="bg-rose-600 hover:opacity-80 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;

