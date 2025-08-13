import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📚 BookHub</h1>
      <div className="flex items-center space-x-4">
        <a href="/" className="text-gray-800 dark:text-white hover:text-blue-500">
          Home
        </a>
        <a href="/shop" className="text-gray-800 dark:text-white hover:text-blue-500">
          Shop
        </a>
        <a href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">
          About
        </a>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
