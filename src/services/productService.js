
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/firebase/firebase";

export const getProductsByCategory = async (category) => {
  try {
    const q = query(collection(db, "products"), where("category", "==", category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Gabim gjatë marrjes së produkteve:", error);
    return [];
  }
};


export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Gabim gjatë marrjes së produkteve:", error);
    return [];
  }
};
