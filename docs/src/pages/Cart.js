import React from "react";

function Cart({ cart, setCart }) {
  // Remove an item from cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <span>
                  {item.title} - ₦{item.price}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₦{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
