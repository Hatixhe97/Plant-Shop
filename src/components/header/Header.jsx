import { useEffect, useRef, useState } from "react";
import addToCart from "../../assets/icons/add-to-cart.svg";
import Login from "../../assets/icons/LogIn.svg";
import styles from "./Header.module.css";
import { FaChevronDown } from 'react-icons/fa';
import { CUSTOM_ROUTES } from "../constants/custom-routes";
import { Link } from 'react-router-dom';


const Header = () =>{

    
  const [submenu, setSubmenu]= useState(false); 

  const ref = useRef ();
    const handleMouseEnter =()=> setSubmenu(true);
    const handleMouseLeave =()=> setSubmenu(false);

    useEffect(()=>{
     const refCopy = ref.current ;
     if (!refCopy) return;

     refCopy.addEventListener("mouseenter", handleMouseEnter );
     refCopy.addEventListener("mouseleave", handleMouseLeave);

     return () => {
        refCopy.removeEventListener("mouseenter", handleMouseEnter );
        refCopy.removeEventListener("mouseleave", handleMouseLeave);

      }

    },[])

    return(
        < >
      <div className={styles.innercontainer}>
        <div className={styles.header}>
            
            <div className={styles.thetop}>
               <h1><span style={{color:'rgb(34, 156, 103)'}}>GREEN</span>MIND</h1> 

                <div >
                    

                    <ul className={styles.options}>
                     <li>
                      <Link to={CUSTOM_ROUTES.HOME}>Home</Link>
                      </li>
                     <li ref={ref}>Plants <span className="arrow">  <FaChevronDown style={{ fontSize: '12px' }} /> </span></li>
                     <li>
                      <Link to ={CUSTOM_ROUTES.FAQ}>Faq</Link>
                      </li>
                     <li>
                      <Link to={CUSTOM_ROUTES.CONTACT}>Contacts</Link>
                     </li>
                   </ul>
                    
                 {submenu && (
                   <ul className={styles.submenu}>
                    <li>Natural Plants</li>
                    <li>Plant Accessories</li>
                    <li style={{ borderBottom:'none' }}>Artificial Plants</li>
                   </ul>) }
              </div>
            </div>

            <div className={styles.icons}>
                <img src={addToCart} alt="AddToCart" />
                <img src={Login } alt="Login" />
            </div>

        </div>
      </div>

        </>
    )
}


export default Header;