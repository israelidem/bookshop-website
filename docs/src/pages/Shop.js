import React, { useState, useEffect } from "react";

function Shop({ cart, setCart }) {
  const [books, setBooks] = useState([]);

  // Load books from public/books.json
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  // Add book to cart
  const addToCart = (book) => {
    setCart((prevCart) => {
      // Prevent duplicates
      const alreadyInCart = prevCart.some((item) => item.id === book.id);
      if (alreadyInCart) {
        console.log(`"${book.title}" is already in the cart.`);
        return prevCart;
      }
      const updatedCart = [...prevCart, book];
      console.log("Cart now:", updatedCart);
      return updatedCart;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop</h1>
      <p>Welcome to Idem's Library! Browse and buy amazing books and articles.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              {/* Show image if available */}
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              )}

              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>₦{book.price}</p>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
