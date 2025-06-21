import React, { useEffect, useState } from "react";
import styles from "./BestSelling.module.css";
import { getAllProducts } from "../../services/productService";
import { CUSTOM_ROUTES } from "../constants/custom-routes";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useCart } from "../../Store/cartContext";

const BestSelling = () => {
  const [plants, setPlants] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPlants = async () => {
      const data = await getAllProducts();
      setPlants(data);
    };
    fetchPlants();
  }, []);

  const handleAddToCart = (plantId) => {
    const selected = plants.find((p) => p.id === plantId);
    if (selected) {
      addToCart(selected);
    }
  };

  const bestSellers = plants.filter((plant) => (plant.soldCount || 0) >= 5);

  return (
    <>
      <section className={styles.bestselling}>
        <button className={styles.arrowback}>
          <Link to={CUSTOM_ROUTES.HOME} className={styles.link}>
            <FaArrowLeft /> Back to Home
          </Link>
        </button>
        <h2>Best Selling Plants</h2>
        {bestSellers.length === 0 ? (
          <p>No best sellers yet.</p>
        ) : (
          <div className={styles.plantgrid}>
            {bestSellers.map((plant) => (
              <div className={styles.plantcard} key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
              </div>
            ))}
          </div>
        )}

        <h2 style={{ marginTop: "40px" }}>All Plants</h2>
        <div className={styles.plantgrid}>
          {plants.map((plant) => (
            <div className={styles.plantcard} key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <p>{plant.name}</p>
              <p>{plant.price}€</p>
              <button
                className={styles.addtocart}
                onClick={() => handleAddToCart(plant.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSelling;
