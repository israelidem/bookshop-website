function BookCard({ title, price }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg dark:bg-gray-700 dark:text-white">
      <img
        src="https://via.placeholder.com/150"
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 font-bold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">₦{price}</p>
      <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Buy Now
      </button>
    </div>
  );
}

export default BookCard;
