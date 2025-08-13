import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard"
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const darkMode = useDarkMode(false);

  const books = [
    { id: 1, title: "Law of Banking and Insurance", price: 25000 },
    { id: 2, title: "Book Two", price: 3000 },
  ];

  return (
    <div className={darkMode.value ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar toggleTheme={darkMode.toggle} />
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} title={book.title} price={book.price} />
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;