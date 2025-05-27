
import styles from "./Hero.module.css";
import heroPlant from "../../assets/images/heroPlant.svg";
import Line from "../../assets/icons/Line.svg"
import VectorUp from "../../assets/icons/VectorUp.svg"
import VectorDown from "../../assets/icons/VectorDown.svg"


const Hero = () => {

    return (
        <>

        <div className={styles.hero}>

            <div>
              <div className={styles.herotitle}>
                  <h1>Buy your dream plants</h1>
                  <div className={styles.heroFlex}>
                      <div>
                         <h2>50+</h2>
                         <p>Plant Species</p>
                      </div>
                      <div>
                        <img src={Line} alt="" />
                      </div>

                      <div>
                        <h2>100+</h2>
                        <p>Customers</p>
                      </div>
                  </div>
              </div>


            </div>

            <div >
              <div className={styles.vector1}>
                 <img src={VectorUp} alt="" />
              </div>

              <div className={styles.heroPlant}>
                 <img src={heroPlant } alt="Plant" />
              </div>

              <div className={styles.vector2}> 
                 <img src={VectorDown} alt="" />
              </div>
            </div>


            
            
        </div>
        </>
    )
};

export default Hero;