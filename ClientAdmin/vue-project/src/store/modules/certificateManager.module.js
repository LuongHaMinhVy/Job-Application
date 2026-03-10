import {
  createCertificateApi,
  getCertificateApi,
  getCertificatesApi,
  searchCertificateByValue,
  updateCertificateApi,
} from "@/api/certificateManager";

const certificateModule = {
  state: {
    certificates: [],
    certificate: null,
    certificateClass: [],
  },
  getters: {
    getCertificates: (state) => state.certificates,
    getCertificate: (state) => state.certificate,
  },
  mutations: {
    SET_CERTIFICATES(state, payload) {
      state.certificates = payload;
      console.log(payload);
    },
    SET_CERTIFICATE(state, payload) {
      state.certificate = payload;
    },
    CREATE_CERTIFICATE(state, payload) {
      state.certificates.push(payload);
    },
    UPDATE_CERTIFICATE(state, payload) {
      const index = state.certificates.findIndex(
        (certificate) => certificate.id === payload.id
      );
      if (index !== -1) {
        state.certificates.splice(index, 1, payload);
      }
      if (state.certificate.id === state.certificates) {
        state.certificate = payload;
      }
    },
    SET_CERTIFICATE_CLASS(state, payload) {
      state.certificateClass = payload;
    },
  },
  actions: {
    async fetchCertificates({ commit }) {
      try {
        const res = await getCertificatesApi();
        commit("SET_CERTIFICATES", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCertificate({ commit }, payload) {
      try {
        const res = await getCertificateApi(payload);
        console.log(res);

        commit("SET_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCreateCertificate({ commit }, payload) {
      try {
        const res = await createCertificateApi(payload);
        commit("CREATE_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUpdateCertificate({ commit }, payload) {
      try {
        const res = await updateCertificateApi(payload);
        commit("UPDATE_CERTIFICATE", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSearchCertificate({ commit }, payload) {
      try {
        const res = await searchCertificateByValue(payload);
        commit("SET_CERTIFICATES", res);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
export default certificateModule;
