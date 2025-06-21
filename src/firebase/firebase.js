
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection, getDocs  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_aRiDPxvMYfqAzHShm08km2RRUg4Cu5c",
  authDomain: "plant-shop-81939.firebaseapp.com",
  projectId: "plant-shop-81939",
  storageBucket: "plant-shop-81939.firebasestorage.app",
  messagingSenderId: "859009204374",
  appId: "1:859009204374:web:913d310dc78c15a28402b7"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);



export const fetchFAQs = async () => {
  const faqCollection = collection(db, 'faqs');
  const faqSnapshot = await getDocs(faqCollection);
  return faqSnapshot.docs.map(doc => doc.data());
};