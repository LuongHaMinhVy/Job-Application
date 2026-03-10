import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, query, where } from 'firebase/firestore';

// Collection reference
const userCertificatesCollection = collection(db, "userCertificates");

// Lấy tất cả userCertificates
export const getUserCertificatesApi = async () => {
  try {
    const snapshot = await getDocs(userCertificatesCollection);
    const userCertificates = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return userCertificates;
  } catch (error) {
    console.error("Error getting user certificates:", error);
  }
};

// Lấy thông tin chi tiết của một userCertificate theo ID
export const getUserCertificateApi = async (id) => {
  try {
    const userCertificateDoc = await getDoc(doc(userCertificatesCollection, id));
    return userCertificateDoc.exists() ? { id: userCertificateDoc.id, ...userCertificateDoc.data() } : null;
  } catch (error) {
    console.error("Error getting user certificate:", error);
  }
};

// Tạo mới một userCertificate
export const createUserCertificateApi = async (payload) => {
  try {
    const newUserCertificateRef = await addDoc(userCertificatesCollection, payload);
    return { id: newUserCertificateRef.id, ...payload };
  } catch (error) {
    console.error("Error creating user certificate:", error);
  }
};

// Cập nhật thông tin một userCertificate theo ID
export const updateUserCertificateApi = async (payload) => {
  try {
    const userCertificateRef = doc(userCertificatesCollection, payload.id);
    await updateDoc(userCertificateRef, payload);
    return payload;
  } catch (error) {
    console.error("Error updating user certificate:", error);
  }
};

// Tìm userCertificates dựa vào userId
export const findUserCertificateByUserIdApi = async (userId) => {
  try {
    const q = query(userCertificatesCollection, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error finding user certificate by userId:", error);
  }
};
