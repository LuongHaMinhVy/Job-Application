import { createCvApi, deleteCvApi, getAllCvApi, getCvApi } from "@/api/user/cvApi";

const cvmodule = {
  state: {
    cvs: [],
    cv: null,
  },
  mutations: {
    SET_ALL_CV: (state, payload) => {
      state.cvs = payload;
    },
    SET_CV: (state, payload) => {
      state.cv = payload;
    },
    CREATE_CV: (state, payload) => {
      state.cvs.push(payload);
    },
    UPDATE_CV: (state, payload) => {
      const index = state.cvs.findIndex((cv) => cv.id === payload.id);
      if (index !== -1) {
        state.cvs.splice(index, 1, payload);
      }
      if (payload.id === state.cv.id) {
        state.cv = payload;
      }
    },
  },
  actions: {
    async getAllCV({ commit }) {
      try {
        const res = await getAllCvApi();
        commit("SET_ALL_CV", res);
      } catch (error) {
        console.error(error);
      }
    },
    async getCV({ commit }, payload) {
      try {
        const res = await getCvApi(payload);
        commit("SET_CV", res);
      } catch (error) {
        console.error(error);
      }
    },
    async createCV({ commit }, payload) {
      try {
        const res = await createCvApi(payload);
        commit("CREATE_CV", res);
      } catch (error) {
        console.error(error);
      }
    },
    async updateCV({ commit }, payload) {
      try {
        const res = await updateCvApi(payload);
        commit("UPDATE_CV", res);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCV({ commit }, payload) {
      try {
        const res = await deleteCvApi(payload);
        commit("SET_ALL_CV", res);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getAllCv: (state) => state.cvs,
    getCv: (state) => state.cv,
  },
};
export default cvmodule;
