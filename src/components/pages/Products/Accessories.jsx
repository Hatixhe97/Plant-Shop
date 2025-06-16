import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../../../services/productService";
import styles from "./Products.module.css";
import { useCart } from "../../../Store/CartContext";

const PlantAccessories = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory("PlantAccessories");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.products}>
      <h2>Plant Accessories</h2>
      <div className={styles.productgrid}>
        {products.map((product) => (
          <div className={styles.productcard} key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button
              className={styles.addtocart}
              onClick={() => addToCart(product)}
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantAccessories;
