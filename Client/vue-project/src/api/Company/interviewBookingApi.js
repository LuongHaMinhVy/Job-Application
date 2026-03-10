import { db } from '../../firebase/config';
import { collection, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';

// Reference đến collection `interviewBookings`
const interviewCollection = collection(db, "interviewBookings");

// Lấy danh sách các cuộc phỏng vấn với phân trang và trạng thái
export const getInterviews = async (page = 1, limit = 10, status = null) => {
  try {
    let interviewQuery = query(interviewCollection, 
      where("status", "==", status || "SCHEDULED")
    );

    // Nếu cần phân trang, bạn sẽ cần thêm các phương thức Firestore để xử lý (ví dụ: sử dụng `startAfter`)
    const interviewSnapshot = await getDocs(interviewQuery);
    const interviews = interviewSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
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
export const createBookingInterviewAPI = async (newBooking) => {
  try {
    const docRef = await addDoc(interviewCollection, newBooking);
    return { id: docRef.id, ...newBooking };
  } catch (error) {
    console.error('Error creating booking interview:', error);
    throw error;
  }
}
export const getEnterprises = async () => {
  try {
    const enterpriseSnapshot = await getDocs(enterpriseCollection);
    const enterprises = enterpriseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return enterprises;
  } catch (error) {
    console.error('Error fetching enterprises:', error);
    throw error;
  }
}
