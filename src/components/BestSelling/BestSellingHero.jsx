import styles from'./BestSellingHero.module.css';
import FiddleLeaf from '../../assets/images/FiddleLeaf.webp'
import SnakePlant from '../../assets/images/SnakePlant.webp'
import PeaceLily from '../../assets/images/PeaceLily.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { CUSTOM_ROUTES } from '../constants/custom-routes';
import { cartContext } from '../../Store/CartContext';
import { useContext } from 'react';



const BestSellingHero = ()=>{

    const BestSellingPlants = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: '29.99',
    image: FiddleLeaf,
    
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: '19.99',
    image: SnakePlant,
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: '24.99',
    image: PeaceLily,
  },
 ];

 

 const handleAddToCart = (plantId) => {
  const selected = BestSellingPlants.find((p) => p.id === plantId);
  if (selected) {
    addToCart(selected);
  }
};

  const { addToCart } = useContext(cartContext);

  
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(CUSTOM_ROUTES.BESTSELLING);
  }



    return(
        <div className={styles.bestselling}>
            <div>
              <h2>Best Selling Plants</h2>
              <p>Easiest way to healthy life by buying your favorite plants </p>
              <button className={styles.arrow} onClick={handleSeeMore}>See more <FaArrowRight/></button>
              
            </div>

         <div className={styles.plantlist}>
             {BestSellingPlants.map((plant) => (
             <div className={styles.plantcard} key={plant.id}>
                 <img src={plant.image} alt={plant.name} />
                 <p>{plant.name}</p>
                 <p>{plant.price}</p>
                 <button onClick={() => handleAddToCart(plant.id)}>Add to Cart</button>
               </div>
             ))}
          </div>
       </div>
  );
}





export default BestSellingHero;