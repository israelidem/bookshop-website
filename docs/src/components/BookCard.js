// src/components/BookCard.js
import React from "react";

const BookCard = ({ item }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
    <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-cover rounded" />
    <h3 className="text-lg font-bold mt-2 text-gray-800 dark:text-white">{item.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{item.author}</p>
    <p className="mt-1 font-semibold text-gray-900 dark:text-white">₦{item.price}</p>
    <a
      href={`/checkout?id=${item.id}`}
      className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded"
    >
      Buy Now
    </a>
  </div>
);

export default BookCard;
