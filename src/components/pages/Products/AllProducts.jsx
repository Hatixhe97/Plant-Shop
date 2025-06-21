import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import styles from "./Products.module.css";
import { useCart } from "../../../Store/cartContext";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.products}>
      <h2>All Products</h2>
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

export default AllProducts;
