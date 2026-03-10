import { db } from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

// Collection reference
const cvCollection = collection(db, "cv");

// Lấy tất cả CVs
export const getAllAdminCvApi = async () => {
  try {
    const snapshot = await getDocs(cvCollection);
    const cvs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return cvs;
  } catch (error) {
    console.error("Error getting CVs:", error);
  }
};

export const searchCvByTitleApi = async (title) => {
  try {
    const q = query(cvCollection, where("title", "==", title));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching user:", error);
  }
};
export const filterCvsByStatusApi = async (status) => {
  try {
    const q = query(cvCollection, where("status", "==", status));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching user:", error);
  }
};

// Lấy thông tin chi tiết của một CV theo ID
export const getAdminCvApi = async (id) => {
  try {
    const cvDoc = await getDoc(doc(cvCollection, id));
    return cvDoc.exists() ? { id: cvDoc.id, ...cvDoc.data() } : null;
  } catch (error) {
    console.error("Error getting CV:", error);
  }
};

// Tạo mới một CV
export const createAdminCvApi = async (payload) => {
  try {
    const newCvRef = await addDoc(cvCollection, payload);
    return { id: newCvRef.id, ...payload };
  } catch (error) {
    console.error("Error creating CV:", error);
  }
};

// Cập nhật thông tin một CV theo ID
export const updatedAdminCvApi = async (payload) => {
  try {
    const cvRef = doc(cvCollection, payload.id);
    await updateDoc(cvRef, payload);
    return payload;
  } catch (error) {
    console.error("Error updating CV:", error);
  }
};

// Xóa một CV theo ID
export const deleteAdminCvApi = async (id) => {
  try {
    await deleteDoc(doc(cvCollection, id));
    const snapshot = await getDocs(cvCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error deleting CV:", error);
  }
};
