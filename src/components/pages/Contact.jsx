import styles from "./Contact.module.css"
import location from "../../assets/icons/Location.svg";
import phone from "../../assets/icons/Phone.svg";
import email from "../../assets/icons/Email.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/twitter.svg";
import { useState } from "react";


const Contact = () => {
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.contactcontainer}>
        <div >
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="Email" placeholder="Email" />
            <input type="text" name="Message" placeholder="Message" />
            <label>
              <input style={{marginRight:'10px'}} type="checkbox" checked={agreed} onChange={handleChange} />
              I would like to receive the newsletter.
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.details}>
          <p>
            <img src={location} alt="locationicon" />
            NYC, United States
          </p>
          <p>
            <img src={phone} alt="phoneicon" />
            000111222333
          </p>
          <p>
            <img src={email} alt="emailicon" />
            somebody@gmail.com
          </p>

          <div className={styles.icon}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="instagram" />
            </a>

            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
