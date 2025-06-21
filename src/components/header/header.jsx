import { useEffect, useRef, useState } from "react";
import addToCart from "../../assets/icons/add-to-cart.svg";
import Login from "../../assets/icons/LogIn.svg";
import styles from "./Header.module.css";
import { FaChevronDown } from "react-icons/fa";
import { CUSTOM_ROUTES } from "../constants/custom-routes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/authProvider";
import menu from "../../assets/icons/menu.svg";
import { logout } from "../../services/authServices";
import userIcon from "../../assets/icons/user.svg";
import orders from "../../assets/icons/orders.svg";
import mail from "../../assets/icons/mail.svg";
import productbase from "../../assets/icons/productbase.svg";
import logOut from "../../assets/icons/log-out.svg";
import { useCart } from "../../Store/cartContext";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { user } = useAuth();

  const { cartItems } = useCart();

  const userMenuRef = useRef();

  const handleMouseEnter = () => setSubmenu(true);
  const handleMouseLeave = () => setSubmenu(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(CUSTOM_ROUTES.LOGIN);
  };

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

  return (
    <>
      <div className={styles.innercontainer}>
        <div className={styles.header}>
          <div className={styles.thetop}>
            <h1>
              <span style={{ color: "rgb(34, 156, 103)" }}>GREEN</span>MIND
            </h1>

            <div>
              <ul className={styles.options}>
                <li>
                  <Link
                    to={CUSTOM_ROUTES.HOME}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </li>
                <div
                  className={styles.plantMenuWrapper}
                  onMouseEnter={() => setSubmenu(true)}
                  onMouseLeave={() => setSubmenu(false)}
                >
                  <li className={styles.menuItem}>
                    Plants{" "}
                    <span className={styles.arrow}>
                      {" "}
                      <FaChevronDown style={{ fontSize: "12px" }} />{" "}
                    </span>
                    {submenu && (
                      <ul className={styles.submenu}>
                        <li>
                          <Link
                            to={CUSTOM_ROUTES.NATURAL_PLANTS}
                            className={styles.linkItem}
                          >
                            Natural Plants
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            to={CUSTOM_ROUTES.ACCESSORIES}
                            className={styles.linkItem}
                          >
                            Plant Accessories
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={CUSTOM_ROUTES.ARTIFICIAL}
                            className={styles.linkItem}
                          >
                            Artificial Plants
                          </Link>
                        </li>
                        <li style={{ borderBottom: "none" }}>
                          <Link
                            to={CUSTOM_ROUTES.ALL_PRODUCTS}
                            className={styles.linkItem}
                          >
                            All Products
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </div>
                <li>
                  <Link
                    to={CUSTOM_ROUTES.FAQ}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    to={CUSTOM_ROUTES.CONTACT}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.icons}>
            <Link to={CUSTOM_ROUTES.CART}>
              <img className={styles.cart} src={addToCart} alt="AddToCart" />
            </Link>
            <div className={styles.cartitem}>{cartItems.length}</div>

            <div className={styles.userMenuWrapper} ref={userMenuRef}>
              {user ? (
                <div className={styles.dropdownContainer}>
                  <img
                    src={menu}
                    alt="User Menu"
                    onClick={() => setShowUserMenu((prev) => !prev)}
                    className={styles.userIcon}
                  />
                  {showUserMenu && (
                    <ul className={styles.dropdownMenu}>
                      <li className={styles.textdecoration}>
                        <Link
                          to="/personal-settings"
                          className={styles.menuicon}
                        >
                          <img src={userIcon} alt="User" /> Personal Settings
                        </Link>
                      </li>
                      <li className={styles.textdecoration}>
                        <Link to="/orders" className={styles.menuicon}>
                          <img src={orders} alt="Orders" /> Orders
                        </Link>
                      </li>
                      <li
                        style={{ color: "rgb(34, 156, 103)", fontSize: "19px" }}
                      >
                        Product Support
                      </li>
                      <li>
                        <Link to="/product-base" className={styles.menuicon}>
                          <img src={productbase} alt="Productbase" /> Product
                          Base
                        </Link>
                      </li>
                      <li>
                        <Link to="/support" className={styles.menuicon}>
                          {" "}
                          <img src={mail} alt="Contact" /> Contact Support
                        </Link>
                      </li>
                      <li
                        className={`${styles.textdecoration} ${styles.menuicon}`}
                        style={{ marginBottom: "30px" }}
                        onClick={handleLogout}
                      >
                        <img src={logOut} alt="Log Out" />
                        Logout
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <img onClick={handleLogin} src={Login} alt="Login" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
