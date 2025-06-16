
import styles from './Categories.module.css'
import { FaArrowRight } from 'react-icons/fa';
import NaturalPlants from '../../assets/images/NaturalPlants.svg'
import PlantAccessories from '../../assets/images/PlantAccessories.svg'
import ArtificialPlants from '../../assets/images/ArtificialPlants.svg'
import { CUSTOM_ROUTES } from '../constants/custom-routes';
import { Link } from 'react-router-dom';


const Categories =()=>{
    return(
        <div>

        <div className={styles.title}>
            <h1>Categories</h1>
            <p>Find what you are looking for</p>
        </div>
        <div className={styles.categories}>

            <div className={styles.card1}>
                <Link to={CUSTOM_ROUTES.NATURAL_PLANTS} className={styles.linkItem}><img src={NaturalPlants} alt="" />
                <p>Natural Plants</p></Link>
            </div>

            <div className={styles.card2}>
                <Link to={CUSTOM_ROUTES.ACCESSORIES} className={styles.linkItem}>
                <img src={PlantAccessories} alt="" />
                <p>Plant Accessories</p></Link>
                <p style={{marginTop:'-30px', opacity:'50%'}}>Let nature bloom in your space – choose the finest flowers.</p>
                <button className={styles.arrow}><Link to={CUSTOM_ROUTES.ALL_PRODUCTS} className={styles.linkItem}>Explore  <FaArrowRight/></Link></button>
            </div>

            <div className={styles.card3}>
                <Link to={CUSTOM_ROUTES.ARTIFICIAL} className={styles.linkItem}>
                <img src={ArtificialPlants} alt="" />
                <p>Artificial Plants</p></Link>
            </div>

            
        </div>

        </div>
    )
}

export default Categories;