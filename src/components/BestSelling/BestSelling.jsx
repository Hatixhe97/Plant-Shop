
import React, { useState } from 'react';
import styles from'./BestSelling.module.css';
import FiddleLeaf from '../../assets/images/FiddleLeaf.webp'
import SnakePlant from '../../assets/images/SnakePlant.webp'
import PeaceLily from '../../assets/images/PeaceLily.jpg'


const initialPlants = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: '$29.99',
    image: FiddleLeaf,
    soldCount: 0,
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: '$19.99',
    image: SnakePlant,
    soldCount: 0,
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: '$24.99',
    image: PeaceLily,
    soldCount: 0,
  },
];

const BestSelling = () => {
  const [plants, setPlants] = useState(initialPlants);

  const handleAddToCart = (plantId) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId
          ? { ...plant, soldCount: plant.soldCount + 1 }
          : plant
      )
    );
  };

  const bestSellers = plants.filter((plant) => plant.soldCount >= 5);

  return (
    <section className={styles.bestselling}>
      <h2>Best Selling Plants</h2>
      {bestSellers.length === 0 ? (
        <p>No best sellers yet.</p>
      ) : (
        <div className={styles.plantgrid}>
          {bestSellers.map((plant) => (
            <div className={styles.plantcard} key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.price}</p>
            </div>
          ))}
        </div>
      )}

      <h2 style={{ marginTop: '40px' }}>All Plants</h2>
      <div className={styles.plantgrid}>
        {plants.map((plant) => (
          <div className={styles.plantcard} key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
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
  );
};

export default BestSelling;