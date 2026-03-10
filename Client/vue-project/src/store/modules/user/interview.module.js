import { createStore } from "vuex";
import { getInterviews, cancelInterview } from "@/api/user/interviewApi";

export const interviewStore = {
  state: {
    interviews: [],
    
  },
  mutations: {
    SET_INTERVIEWS(state, payload) {
      // console.log(payload);
      
      state.interviews = payload;
      // state.page = payload.page;
      // state.limit = payload.limit;
      // state.totalPages = payload.totalPages;
      // state.totalInterviews = payload.totalInterviews;
    },
    CANCEL_INTERVIEW(state, { id, cancelAt, cancelReason }) {
      const index = state.interviews.findIndex((i) => i.id === id);
      if (index !== -1) {
        state.interviews[index] = {
          ...state.interviews[index],
          status: "CANCELLED",
          cancelAt,
          cancelReason,
        };
      }
    },
    SET_STATUS_FILTER(state, status) {
      state.statusFilter = status;
    },
  },
  actions: {
    async fetchInterviews({ commit }) {
      try {
        const response = await getInterviews();
        commit("SET_INTERVIEWS", response);
      } catch (error) {
        console.error("Failed to fetch interviews:", error);
      }
    },
    async cancelInterview({ commit }, { id, cancelReason }) {
      try {
        const response = await cancelInterview(id, cancelReason);
        commit("CANCEL_INTERVIEW", {
          id,
          cancelAt: response.cancelAt,
          cancelReason: response.cancelReason,
        });
      } catch (error) {
        console.error("Failed to cancel interview:", error);
      }
    },
  },
  getters: {
    getInterviews: (state) => state.interviews,
  },
};

export default interviewStore;
