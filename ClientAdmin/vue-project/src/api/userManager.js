import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, query, where } from 'firebase/firestore';

// Collection reference
const usersCollection = collection(db, "users");

// Lấy tất cả người dùng
export const getUsersApi = async () => {
  try {
    const snapshot = await getDocs(usersCollection);
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(111,users);
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

// Lấy thông tin người dùng theo ID
export const getUserApi = async (userId) => {
  try {
    const userDoc = await getDoc(doc(usersCollection, userId));
    return userDoc.exists() ? { id: userDoc.id, ...userDoc.data() } : null;
  } catch (error) {
    console.error("Error getting user:", error);
  }
};

// Cập nhật người dùng theo ID
export const updateUserApi = async (userData) => {
  try {
    const userRef = doc(usersCollection, userData.id);
    await updateDoc(userRef, userData);
    return userData;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

// Tìm kiếm người dùng theo username
export const searchUserByApi = async (username) => {
  try {
    const q = query(usersCollection, where("username", "==", username));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching user:", error);
  }
};

// Lấy danh sách ứng viên có trạng thái "true"
export const candidateShowApi = async () => {
  try {
    const q = query(usersCollection, where("status", "==", true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting candidates:", error);
  }
};

// Lấy thông tin chi tiết ứng viên
export const CandidateDetailApi = async (candidateId) => {
  try {
    const candidateDoc = await getDoc(doc(usersCollection, candidateId));
    return candidateDoc.exists() ? { id: candidateDoc.id, ...candidateDoc.data() } : null;
  } catch (error) {
    console.error("Error getting candidate detail:", error);
  }
};
