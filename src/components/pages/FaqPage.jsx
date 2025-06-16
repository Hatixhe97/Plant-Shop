import { fetchFAQs } from '../../firebase/firebase'
import React, { useEffect, useState } from 'react';
import FAQ from '../../components/FAQ/Faq';
import styles from '../../components/FAQ/Faq.module.css'


const FAQPage = ()=>{

    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFAQs = async () => {
      try {
        const data = await fetchFAQs();

        setFaqData(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    getFAQs();
  }, []);

    return(
        <>
        

     <div className={styles.faqpage}>
         <h2>Frequently Asked Questions</h2>
          {loading ? <p>Loading FAQs...</p> : <FAQ data={faqData} />}
     </div>

        </>
    )
}

export default FAQPage;