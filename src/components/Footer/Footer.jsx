
import styles from './Footer.module.css'
import facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/insta.svg'
import twitter from '../../assets/icons/twitter.svg'

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
                     <p>About</p>
                     <p>Product</p>
                     <p>Blog</p>
                    </div>
                    
                </div>

                <div>
                    <p className={styles.p}>Company</p>
                    <div className={styles.p1}>
                      <p>Community</p>
                      <p>Career</p>
                      <p>Our story</p>
                    </div>

                </div>

                <div >
                    <p className={styles.p}>Contact</p>
                    <div className={styles.p1}>
                     <p>Getting Started</p>
                     <p>Pricing</p>
                     <p>Resources</p>
                    </div>
                    
                </div>

            </div>

            
        </div>

         <p className={styles.p3}>2023 all Right Reserved Term of use GREENMIND</p>
        </div>
    )
}


export default Footer;