import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const getEnterpriseById = async (id) => {
  try {
    const enterpriseDoc = doc(db, 'enterprise', id);
    const docSnapshot = await getDoc(enterpriseDoc);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      throw new Error('Enterprise not found');
    }
  } catch (error) {
    console.error('Error fetching enterprise data:', error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const userDoc = doc(db, 'users', userId);
    const docSnapshot = await getDoc(userDoc);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const updateEnterprise = async (id, updatedData) => {
  try {
    const enterpriseDoc = doc(db, 'enterprise', id);
    await updateDoc(enterpriseDoc, updatedData);
    return { id, ...updatedData };
  } catch (error) {
    console.error('Error updating enterprise data:', error);
    throw error;
  }
};
