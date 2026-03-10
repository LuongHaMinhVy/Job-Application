import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Collection reference
const languagesCollection = collection(db, "languages");

// Lấy tất cả languages
export const getLanguagesApi = async () => {
  try {
    const snapshot = await getDocs(languagesCollection);
    const languages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return languages;
  } catch (error) {
    console.error("Error getting languages:", error);
    throw error;
  }
};

// Lấy thông tin chi tiết của một language theo ID
export const getLanguageApi = async (id) => {
  if (!id) {
    console.error("Invalid ID provided:", id);
    throw new Error("ID is required to fetch a language.");
  }
  try {
    const languageDoc = await getDoc(doc(languagesCollection, id));
    return languageDoc.exists() ? { id: languageDoc.id, ...languageDoc.data() } : null;
  } catch (error) {
    console.error("Error getting language:", error);
    throw error;
  }
};

// Thêm mới một language
export const createLanguageApi = async (payload) => {
  if (!payload || !payload.name || !payload.code) {
    console.error("Invalid payload:", payload);
    throw new Error("Invalid payload. Required fields are missing.");
  }
  try {
    const newLanguageRef = await addDoc(languagesCollection, payload);
    return { id: newLanguageRef.id, ...payload };
  } catch (error) {
    console.error("Error creating language:", error);
    throw error;
  }
};

// Cập nhật thông tin một language theo ID
export const updateLanguageApi = async (payload) => {
  if (!payload || !payload.id) {
    console.error("Invalid payload:", payload);
    throw new Error("ID is required to update a language.");
  }
  try {
    const languageRef = doc(languagesCollection, payload.id);
    await updateDoc(languageRef, payload);
    return payload;
  } catch (error) {
    console.error("Error updating language:", error);
    throw error;
  }
};

// Xóa một language theo ID
export const deleteLanguageApi = async (id) => {
  if (!id) {
    console.error("Invalid ID provided:", id);
    throw new Error("ID is required to delete a language.");
  }
  try {
    const languageRef = doc(languagesCollection, id);
    await deleteDoc(languageRef);
    return { message: `Language with ID ${id} deleted successfully.` };
  } catch (error) {
    console.error("Error deleting language:", error);
    throw error;
  }
};
