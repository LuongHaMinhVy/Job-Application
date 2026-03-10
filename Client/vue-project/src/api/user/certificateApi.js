import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, query, where } from 'firebase/firestore';

// Collection reference
const certificatesCollection = collection(db, "certificates");

// Lấy tất cả certificates
export const getCertificatesApi = async () => {
  try {
    const snapshot = await getDocs(certificatesCollection);
    const certificates = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return certificates;
  } catch (error) {
    console.error("Error getting certificates:", error);
  }
};

// Lấy thông tin chi tiết của một certificate theo ID
export const getCertificateApi = async (id) => {
  try {
    const certificateDoc = await getDoc(doc(certificatesCollection, id));
    return certificateDoc.exists() ? { id: certificateDoc.id, ...certificateDoc.data() } : null;
  } catch (error) {
    console.error("Error getting certificate:", error);
  }
};

// Tạo mới một certificate
export const createCertificateApi = async (payload) => {
  try {
    const newCertificateRef = await addDoc(certificatesCollection, payload);
    return { id: newCertificateRef.id, ...payload };
  } catch (error) {
    console.error("Error creating certificate:", error);
  }
};

// Cập nhật thông tin một certificate theo ID
export const updateCertificateApi = async (payload) => {
  try {
    const certificateRef = doc(certificatesCollection, payload.id);
    await updateDoc(certificateRef, payload);
    return payload;
  } catch (error) {
    console.error("Error updating certificate:", error);
  }
};

// Tìm certificates dựa vào certificateValue
export const searchCertificateByValue = async (certificateValue) => {
  try {
    const q = query(certificatesCollection, where("certificateValue", "==", certificateValue));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching certificate by value:", error);
  }
};

// Lấy danh sách các certificate class (nếu cần sử dụng một lớp certificates cụ thể)
export const getCertificateClassApi = async () => {
  try {
    const snapshot = await getDocs(certificatesCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting certificate classes:", error);
  }
};
