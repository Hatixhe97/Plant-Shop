
import styles from './Categories.module.css'
import { FaArrowRight } from 'react-icons/fa';
import NaturalPlants from '../../assets/images/NaturalPlants.svg'
import PlantAccessories from '../../assets/images/PlantAccessories.svg'
import ArtificialPlants from '../../assets/images/ArtificialPlants.svg'


const Categories =()=>{
    return(
        <div>

        <div className={styles.title}>
            <h1>Categories</h1>
            <p>Find what you are looking for</p>
        </div>
        <div className={styles.categories}>

            <div className={styles.card1}>
                <img src={NaturalPlants} alt="" />
                <p>Natural Plants</p>
            </div>

            <div className={styles.card2}>
                <img src={PlantAccessories} alt="" />
                <p>Plant Accessories</p>
                <p style={{marginTop:'-30px', opacity:'50%'}}>Let nature bloom in your space – choose the finest flowers.</p>
                <button className={styles.arrow}>Explore<FaArrowRight/></button>
            </div>

            <div className={styles.card3}>
                <img src={ArtificialPlants} alt="" />
                <p>Artificial Plants</p>
            </div>

            
        </div>

        </div>
    )
}

export default Categories;