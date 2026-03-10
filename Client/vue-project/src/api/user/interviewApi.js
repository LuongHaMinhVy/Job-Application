import { db } from '@/firebase/config';
import { collection, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';

// Reference đến collection `interviewBookings`
const interviewCollection = collection(db, "interviews");

// Lấy danh sách các cuộc phỏng vấn với phân trang và trạng thái
export const getInterviews = async (page = 1, limit = 10, status = null) => {
  try {
    const snapshot = await getDocs(interviewCollection);
    const interviews = snapshot.docs.map(doc => ({ id: doc.id,...doc.data() }));
    return interviews;
  } catch (error) {
    console.error('Error fetching interviews:', error);
    throw error;
  }
};

// Hủy cuộc phỏng vấn
export const cancelInterview = async (id, cancelReason) => {
  try {
    const interviewRef = doc(interviewCollection, id);
    const interviewData = {
      status: 'CANCELLED',
      cancelAt: new Date().toISOString(),
      cancelReason,
    };
    await updateDoc(interviewRef, interviewData);
    
    // Trả về thông tin cập nhật của cuộc phỏng vấn
    return { id, ...interviewData };
  } catch (error) {
    console.error('Error cancelling interview:', error);
    throw error;
  }
};
