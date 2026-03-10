import {
  createUserCertificateApi,
  findUserCertificateByUserIdApi,
  getUserCertificatesApi,
  updateUserCertificateApi,
} from "@/api/user/userCertificateApi";

const userCertificateModule = {
  state: {
    userCertificates: [],
    userCertificate: null,
  },
  mutations: {
    CREATE_USER_CERTIFICATE(state, payload) {
      state.userCertificates.push(payload);
    },
    SET_USER_CERTIFICATES(state, payload) {
      state.userCertificates = payload;   
    },
    SET_USER_CERTIFICATE(state, payload) {
      state.userCertificate = payload;
    },
    UPDATE_CERTIFICATE(state, payload) {
      const index = state.userCertificates.findIndex(
        (item) => item.id === payload.id
      );
      if (index !== -1) {
        state.userCertificates.splice(index, 1, payload);
      }
      if (state.userCertificate.id === payload.id) {
        state.userCertificate = payload;
      }
    },
  },
  actions: {
    async createUserCertificate({ commit }, payload) {
      try {
        const res = await createUserCertificateApi(payload);
        commit("CREATE_USER_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
    async getUserCertificate({ commit }, payload) {
      try {
        const res = await getUserCertificatesApi(payload);
        commit("SET_USER_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
  
    async updateCertificateApi({ commit }, payload) {
      try {
        const res = await updateUserCertificateApi(payload);
        commit("UPDATE_USER_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
    async getUserCertificateByUserId({ commit }, payload) {
      try {
        const res = await findUserCertificateByUserIdApi(payload);
        commit("SET_USER_CERTIFICATES", res);   
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getUserCertificates: (state) => state.userCertificates,
    getUserCertificate: (state) => state.userCertificate,
  },
};
export default userCertificateModule;
