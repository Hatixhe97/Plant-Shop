
import React, { useState, useEffect, useRef } from 'react';
import styles from './MenuCart.module.css'; 
import menu from '../../../assets/icons/menu.svg'

const MenuCart = () => {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.menucontainer}>
      
      <img onClick={toggleMenu} src={menu} alt="Menu"/>

      {open && (
        <div className={styles.menucart} ref={cartRef}>
          <ul>
            <li>Personal Settings</li>
            <li>Orders</li>
            <li>Product Base</li>
            <li>Contact Support</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCart;