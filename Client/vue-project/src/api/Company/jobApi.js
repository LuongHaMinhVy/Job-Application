import { db } from '@/firebase/config';
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

// Reference đến collection `jobs`
const jobsCollection = collection(db, "jobs");

// Lấy danh sách các công việc với phân trang
export const getJobsApi = async (page = 1, limit = 10) => {
  try {
    // Giới hạn kết quả theo phân trang
    const jobQuery = query(jobsCollection);
    const jobSnapshot = await getDocs(jobQuery);
    const jobs = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Trả về danh sách công việc
    return jobs.slice((page - 1) * limit, page * limit);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Lấy thông tin một công việc theo ID
export const getJobApi = async (id) => {
  try {
    const jobRef = doc(jobsCollection, id);
    const jobSnapshot = await getDoc(jobRef);
    console.log(3333333,jobSnapshot);
    
    if (!jobSnapshot.exists()) {
      throw new Error('Job not found');
    }

    return { id: jobSnapshot.id, ...jobSnapshot.data() };
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

// Sửa thông tin công việc
export const editJobApi = async (job) => {
  try {
    const jobRef = doc(jobsCollection, job.id);
    await updateDoc(jobRef, job);

    return job;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

// Tạo mới công việc
export const createJobApi = async (job) => {
  try {
    const jobRef = await addDoc(jobsCollection, job);
    return { id: jobRef.id, ...job };
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

// Xóa công việc theo ID
export const deleteJobApi = async (id) => {
  try {
    const jobRef = doc(jobsCollection, id);
    await deleteDoc(jobRef);
    return { id };
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};

// Tìm kiếm công việc theo từ khóa
export const searchJobsApi = async (queryText) => {
  try {
    const jobQuery = query(jobsCollection, where("title", "==", queryText));
    const jobSnapshot = await getDocs(jobQuery);
    const jobs = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return jobs;
  } catch (error) {
    console.error('Error searching jobs:', error);
    throw error;
  }
};

// Lấy thông tin chi tiết một công việc
export const jobDetailApi = async (id) => {
  try {
    const jobRef = doc(jobsCollection, id);
    const jobSnapshot = await getDoc(jobRef);

    if (!jobSnapshot.exists()) {
      throw new Error('Job not found');
    }

    return { id: jobSnapshot.id, ...jobSnapshot.data() };
  } catch (error) {
    console.error('Error fetching job detail:', error);
    throw error;
  }
};
export const getAllJobsApi = async () => {
  try {
    const querySnapshot = await getDocs(jobsCollection);
    const jobs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return jobs;
  } catch (error) {
    console.error('Error fetching all jobs:', error);
    throw error;
  }
};
