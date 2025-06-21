
import styles from './Footer.module.css'
import facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/insta.svg'
import twitter from '../../assets/icons/twitter.svg'
import { Link } from 'react-router-dom'
import { CUSTOM_ROUTES } from '../constants/custom-routes'

const Footer =()=>{
    return(

        <div className={styles.footercontainer}>
        <div className={styles.footer}>
            <div>
                <p>GREENMIND</p>
                <p className={styles.p2}>We help you find your dream plant</p>
                <div className={styles.icons}>
                   <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" />
                   </a>

                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                     <img src={insta} alt="instagram" />
                   </a>

                   <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt="twitter" />
                   </a>
                </div>

            </div>

            <div className={styles.select}>
                <div>
                    <p className={styles.p}>Information</p>
                    <div className={styles.p1}>
                     <Link to={CUSTOM_ROUTES.HOME} style={{ textDecoration: "none", color: "inherit" }}><p>About</p></Link>
                     <Link to={CUSTOM_ROUTES.ALL_PRODUCTS }style={{ textDecoration: "none", color: "inherit" }}><p>Product</p></Link>
                     <Link to={CUSTOM_ROUTES.FAQ} style={{ textDecoration: "none", color: "inherit" }}><p>Faq</p></Link>
                     
                    </div>
                    
                </div>

                

                <div >
                    <p className={styles.p}>Contact</p>
                    <div className={styles.p1}>
                     <p>NYC, United States</p>
                     <p>000111222333</p>
                     <p>somebody@gmail.com</p>
                    </div>
                    
                </div>

            </div>

            
        </div>

         <p className={styles.p3}>2023 all Right Reserved Term of use GREENMIND</p>
        </div>
    )
}


export default Footer;