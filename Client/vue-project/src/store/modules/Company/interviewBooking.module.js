import { createStore } from 'vuex';
import { getInterviewBookings, cancelInterviewBooking, createBookingInterviewAPI,getEnterprises } from '../../../api/Company/interviewBookingApi';

export const interviewBookingStore = createStore({
  state: {
    interviewBookings: [],
    page: 1,
    limit: 10,
    totalPages: 0,
    totalInterviewBookings: 0,
    statusFilter: null,
  },
  mutations: {
    SET_INTERVIEW_BOOKINGS(state, payload) {
      state.interviewBookings = payload.interviews;
      state.page = payload.page;
      state.limit = payload.limit;
      state.totalPages = payload.totalPages;
      state.totalInterviewBookings = payload.totalInterviews;
    },
    ADD_INTERVIEW_BOOKING(state, booking) {
      state.interviewBookings.push(booking);
    },
    CANCEL_INTERVIEW_BOOKING(state, { id, cancelAt, cancelReason }) {
      const index = state.interviewBookings.findIndex((i) => i.id === id);
      if (index !== -1) {
        state.interviewBookings[index] = {
          ...state.interviewBookings[index],
          status: 'CANCELLED',
          cancelAt,
          cancelReason,
        };
      }
    },
    SET_STATUS_FILTER(state, status) {
      state.statusFilter = status;
    },
    SET_ENTERPRISES(state, enterprises) {
      state.enterprises = enterprises;
  },
},
  actions: {
    async fetchInterviewBookings({ commit }, { page = 1, limit = 10, status = null }) {
      try {
        const response = await getInterviewBookings(page, limit, status);
        commit('SET_INTERVIEW_BOOKINGS', response);
      } catch (error) {
        console.error('Failed to fetch interview bookings:', error);
      }
    },
    async createBookingInterview({ commit }, newBooking) {
      try {
        const response = await createBookingInterviewAPI(newBooking);
        commit('ADD_INTERVIEW_BOOKING', response);
      } catch (error) {
        console.error('Failed to create interview booking:', error);
      }
    },
    async cancelInterviewBooking({ commit }, { id, cancelReason }) {
      try {
        const response = await cancelInterviewBooking(id, cancelReason);
        commit('CANCEL_INTERVIEW_BOOKING', {
          id,
          cancelAt: response.cancelAt,
          cancelReason: response.cancelReason,
        });
      } catch (error) {
        console.error('Failed to cancel interview booking:', error);
      }
    },
    async fetchEnterprises({ commit }) {
      try {
        const enterprises = await getEnterprises();
        commit('SET_ENTERPRISES', enterprises);
      } catch (error) {
        console.error('Failed to fetch enterprises:', error);
      }
  },
  getters: {},
},

});

export default interviewBookingStore;
