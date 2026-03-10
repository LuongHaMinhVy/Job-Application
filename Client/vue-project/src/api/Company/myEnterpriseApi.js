import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ENTERPRISE_COLLECTION = "enterprises";

export default {
  async fetchEnterprises() {
    const enterprisesCollection = collection(db, ENTERPRISE_COLLECTION);
    const snapshot = await getDocs(enterprisesCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async fetchEnterprise(id) {
    const enterpriseDoc = doc(db, ENTERPRISE_COLLECTION, id);
    const snapshot = await getDoc(enterpriseDoc);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error("Enterprise not found");
    }
  },

  async addEnterprise(enterpriseData) {
    const enterprisesCollection = collection(db, ENTERPRISE_COLLECTION);
    const docRef = await addDoc(enterprisesCollection, enterpriseData);
    return { id: docRef.id, ...enterpriseData };
  },

  async updateEnterprise(id, updatedData) {
    const enterpriseDoc = doc(db, ENTERPRISE_COLLECTION, id);
    await updateDoc(enterpriseDoc, updatedData);
    return { id, ...updatedData };
  },

  async deleteEnterprise(id) {
    const enterpriseDoc = doc(db, ENTERPRISE_COLLECTION, id);
    await deleteDoc(enterpriseDoc);
    return id;
  },
};
