import { useCart } from "../../../Store/CartContext";
import { useEffect, useState } from "react";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const BackToShopping = () => {
    navigate(CUSTOM_ROUTES.HOME);
  };

  // Funksioni për të llogaritur totalin
  const calculateTotal = (items) => {
    const sum = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(sum);
  };

  // Sa herë që ndryshojnë artikujt në karrocë, llogarit totalin
  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className={styles.empty}>
          <p>Cart is empty</p>
          <button onClick={BackToShopping}>Continue Shopping</button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className={styles.cartcontainer} key={item.id}>
              <div className={styles.productscard}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>
                  ${item.price}
                </p>
              </div>

              <div>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
