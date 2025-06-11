
import React, { useState } from 'react';
import styles from './Faq.module.css'; 

const FAQItem = ({ question, answer }) => {

    console.log("Rendering FAQ item:", question, answer);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqitem} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.faqquestion}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.faqanswer}><p>{answer}</p></div>}
    </div>
  );
};

export default function FAQ({ data }) {
  return (
    <div className={styles.faqcontainer}>
      {data.map((item, index) => (
        <FAQItem key={index} question={item.Question} answer={item.Answer} />
      ))}
    </div>
  );
}