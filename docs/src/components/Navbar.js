import { useState } from "react";

function Navbar({ toggleTheme }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold dark:text-white">📚 My Bookstore</h1>
      <div className="space-x-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
