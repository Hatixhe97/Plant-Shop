
import styles from './AboutUs.module.css';
import LargeAssortment from '../../assets/icons/LargeAssortment.svg';
import FreeShipping from '../../assets/icons/FreeShipping.svg'
import Support from '../../assets/icons/Support.svg'

const AboutUs =()=>{
    return(
        <>
        <div className={styles.description}>
            <h1>About Us</h1>
            <p>Order now and appreciate the beauty of nature</p>
        </div>

        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={LargeAssortment} alt="" />
                <p>Large Assortment</p>
                <p>we offer many different types of products with fewer variations in each category.</p>
            </div>

            <div className={styles.card}>
                <img src={FreeShipping} alt="" />
                <p>Fast & Free Shipping</p>
                <p>4-day or less delivery time, free shipping and an expedited delivery option.</p>
            </div>

            <div className={styles.card} >
                <img src={Support} alt="" />
                <p>24/7 Support</p>
                <p>answers to any business related inquiry 24/7 and in real-time.</p>
            </div>
            
        </div>
        
        </>
    )
}

export default AboutUs;