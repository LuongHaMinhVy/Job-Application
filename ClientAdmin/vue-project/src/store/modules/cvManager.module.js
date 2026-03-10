import {
  updatedAdminCvApi,
  createAdminCvApi,
  getAllAdminCvApi,
  getAdminCvApi,
  searchCvByTitleApi,
  filterCvsByStatusApi,
} from "@/api/cvApi";

const adminCvModule = {
  state: {
    adminCvs: [],
    adminCv: null,
    filteredCv: [],
  },
  getters: {
    getAdminCvs: (state) => state.adminCvs,
    getAdminCv: (state) => state.adminCv,
  },
  mutations: {
    SET_ADMIN_CVS: (state, payload) => {
      state.adminCvs = payload;
    },
    SET_ADMIN_CV: (state, payload) => {
      state.adminCv = payload;
    },
    CREATE_ADMIN_CV: (state, payload) => {
      state.adminCvs.push(payload);
    },
    UPDATE_ADMIN_CV: (state, payload) => {
      const index = state.adminCvs.findIndex((cv) => cv.id === payload.id);
      if (index !== -1) {
        state.adminCvs.splice(index, 1, payload);
      }
      if (state.adminCv && payload.id === state.adminCv.id) {
        state.adminCv = payload;
      }
    },
    FILTER_CV_BY_STATUS: (state, payload) => {
      state.adminCvs = payload;
    },
  },
  actions: {
    async fetchAdminCvs({ commit }) {
      try {
        const response = await getAllAdminCvApi();
        console.log(response);
        
        commit("SET_ADMIN_CVS", response);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAdminCv({ commit }, cvId) {
      try {
        const response = await getAdminCvApi(cvId);
        commit("SET_ADMIN_CV", response);
      } catch (error) {
        console.error(error);
      }
    },
    async createAdminCv({ commit }, payload) {
      try {
        const response = await createAdminCvApi(payload);
        commit("CREATE_ADMIN_CV", response);
      } catch (error) {
        console.error(error);
      }
    },
    async updateAdminCv({ commit }, payload) {
      try {
        const response = await updatedAdminCvApi(payload);
        commit("UPDATE_ADMIN_CV", response);
      } catch (error) {
        console.error(error);
      }
    },
    async filterCvByStatus({ commit }, payload) {
      try {
        const res = await filterCvsByStatusApi(payload);
        commit("FILTER_CV_BY_STATUS", res);
      } catch (error) {
        console.error(error);
      }
    },
    async searchCvByTitle({ commit }, payload) {
      try {
        const response = await searchCvByTitleApi(payload);
        commit("SET_ADMIN_CVS", response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
export default adminCvModule;
