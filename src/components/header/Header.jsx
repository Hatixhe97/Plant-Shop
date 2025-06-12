import { useEffect, useRef, useState } from "react";
import addToCart from "../../assets/icons/add-to-cart.svg";
import Login from "../../assets/icons/LogIn.svg";
import styles from "./Header.module.css";
import { FaChevronDown } from 'react-icons/fa';
import { CUSTOM_ROUTES } from "../constants/custom-routes";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/authProvider";
import menu from "../../assets/icons/menu.svg"
import {logout} from "../../services/authServices"


const Header = () =>{

    
  const [submenu, setSubmenu]= useState(false);
  const [showUserMenu,setShowUserMenu]=useState(false); 

  const { user} = useAuth();

  const userMenuRef=useRef();

    const handleMouseEnter =()=> setSubmenu(true);
    const handleMouseLeave =()=> setSubmenu(false);

    
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(CUSTOM_ROUTES.LOGIN);
  }

  const handleLogout = async () => {
  try {
    await logout(); 
    setUser(null); 
    setShowUserMenu(false); 
    navigate(CUSTOM_ROUTES.HOME); 
  } catch (error) {
    console.error("Logout failed", error);
  }
 };


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShowUserMenu(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
 }, []);

  

    return(
        < >
      <div className={styles.innercontainer}>
        <div className={styles.header}>
            
            <div className={styles.thetop}>
               <h1><span style={{color:'rgb(34, 156, 103)'}}>GREEN</span>MIND</h1> 

                <div >
                    

                    <ul className={styles.options}>
                     <li>
                      <Link to={CUSTOM_ROUTES.HOME} style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                      </li>
                      <div className={styles.plantMenuWrapper}
                        onMouseEnter={()=>setSubmenu(true)}
                        onMouseLeave={()=>setSubmenu(false)}>

                        <li  className={styles.menuItem}>Plants <span className={styles.arrow}>  <FaChevronDown style={{ fontSize: '12px' }} /> </span>
                      
                       {submenu &&(
                          <ul className={styles.submenu}>
                            <li>Natural Plants</li>
                            <li>Plant Accessories</li>
                            <li style={{ borderBottom: 'none' }}>Artificial Plants</li>
                          </ul>
                          )
                        }
                        </li>
                      </div>
                     <li>
                      <Link to ={CUSTOM_ROUTES.FAQ} style={{ textDecoration: 'none', color: 'inherit' }}>Faq</Link>
                      </li>
                     <li>
                      <Link to={CUSTOM_ROUTES.CONTACT} style={{ textDecoration: 'none', color: 'inherit' }}>Contacts</Link>
                     </li>
                   </ul>
                    
                 
              </div>
            </div>

            <div className={styles.icons}>
                <img src={addToCart} alt="AddToCart" />

                <div className={styles.userMenuWrapper} ref={userMenuRef}>
                    {user ? (
                   <div className={styles.dropdownContainer}>
                      <img
                      src={menu}
                      alt="User Menu"
                      onClick={() => setShowUserMenu(prev => !prev)}
                     className={styles.userIcon}
                      />
                      {showUserMenu && (
                        <ul className={styles.dropdownMenu}>
                          <li><Link to="/personal-settings">Personal Settings</Link></li>
                          <li><Link to="/orders">Orders</Link></li>
                          <li><Link to="/product-base">Product Base</Link></li>
                          <li><Link to="/support">Contact Support</Link></li>
                          <li onClick={handleLogout}>Logout</li>
                        </ul>
                     )}
                   </div> ) : ( <img onClick={handleLogin} src={Login} alt="Login" />)}
                 </div>
               </div>

        </div>
      </div>

        </>
    )
}


export default Header;