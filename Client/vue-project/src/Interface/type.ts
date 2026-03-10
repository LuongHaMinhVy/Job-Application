export interface Job {
  id: number; // Số định danh của công việc
  enterpriseId: number; // Khóa ngoại liên kết với bảng Enterprise
  title: string; // Tiêu đề công việc
  salary: string; // Mức lương
  exp: string; // Kinh nghiệm yêu cầu
  createAt: Date; // Thời gian tạo công việc
  expiredAt: Date; // Thời gian hết hạn công việc
  des: string; // Mô tả công việc
  status: 'active' | 'inactive'; // Trạng thái công việc
  quantity: number; // Số lượng tuyển
  gender: 'male' | 'female' | 'any'; // Giới tính yêu cầu (nam, nữ hoặc không yêu cầu)
  level: string; // Cấp bậc (ví dụ: nhân viên, quản lý)
  jobType: string; // Loại công việc (ví dụ: toàn thời gian, bán thời gian)
  currencyType: string; // Loại tiền (ví dụ: VND, USD)
  location: string; // Khu vực làm việc
  requirements: string; // Yêu cầu công việc
  workingHours: string; // Thời gian làm việc (ví dụ: 9:00 - 17:00)
  benefits: string; // Quyền lợi
}
export interface Interview {
  id: number;
  enterpriseId: number;
  status: 'PENDING' | 'VERIFIED_ENTERPRISE' | 'VERIFIED_STUDENT' | 'CANCELLED' | 'DONE';
  createAt: string;
  verifiedEnterpriseAt?: string;
  verifiedStudentAt?: string;
  waitUntilInterviewDayAt?: string;
  interviewingAt?: string;
  waitForResultAt?: string;
  doneAt?: string;
  meetingLink?: string;
  note?: string;
  cancelAt?: string;
  cancelReason?: string;
  meetingStartTime?: string;
  meetingEndTime?: string;
  userId: number;
}

export interface InterviewResponse {
  interviews: Interview[];
  page: number;
  limit: number;
  totalPages: number;
  totalInterviews: number;
}
export interface Enterprise {
  id: number;
  userId: number;
  deletedAt?: string;
  companySize: string;
  industry: string;
  introduction: string;
  websiteUrl: string;
  facebookUrl: string;
  bannerUrl: string;
  avatarUrl: string;
  zaloUrl: string;
  linkedUrl: string;
  twitterUrl: string;
  businessLicense: string;
  status: "active" | "inactive" ;
}
export interface BookingInterview extends Interview {
  title: string;
  salary: string;
  exp: string;
  expiredAt: Date;
  des: string;
  level: string;
  jobType: string;
  currencyType: string;
  location: string;
  requirements: string;
  workingHours: string;
  benefits: string;
}
