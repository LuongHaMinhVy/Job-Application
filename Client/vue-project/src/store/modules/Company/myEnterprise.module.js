
import enterpriseService from '../../../api/Company/myEnterpriseApi';

const state = {
  enterprises: [],
  enterprise: null,
};

const getters = {
  allEnterprises: (state) => state.enterprises,
  singleEnterprise: (state) => state.enterprise,
};

const actions = {
  // Fetch all enterprises
  async fetchEnterprises({ commit }) {
    try {
      const response = await enterpriseService.fetchEnterprises();
      commit('setEnterprises', response.data);
    } catch (error) {
      console.error("Error fetching enterprises:", error);
    }
  },

  // Fetch a single enterprise by ID
  async fetchEnterprise({ commit }, id) {
    try {
      const response = await enterpriseService.fetchEnterprise(id);
      commit('setEnterprise', response.data);
    } catch (error) {
      console.error("Error fetching enterprise:", error);
    }
  },

  // Add a new enterprise
  async addEnterprise({ commit }, enterpriseData) {
    try {
      const response = await enterpriseService.addEnterprise(enterpriseData);
      commit('newEnterprise', response.data);
    } catch (error) {
      console.error("Error adding enterprise:", error);
    }
  },

  // Update an enterprise by ID
  async updateEnterprise({ commit }, { id, updatedData }) {
    try {
      const response = await enterpriseService.updateEnterprise(id, updatedData);
      commit('updateEnterprise', response.data);
    } catch (error) {
      console.error("Error updating enterprise:", error);
    }
  },

  // Delete an enterprise by ID
  async deleteEnterprise({ commit }, id) {
    try {
      await enterpriseService.deleteEnterprise(id);
      commit('removeEnterprise', id);
    } catch (error) {
      console.error("Error deleting enterprise:", error);
    }
  }
};

const mutations = {
  setEnterprises: (state, enterprises) => (state.enterprises = enterprises),
  setEnterprise: (state, enterprise) => (state.enterprise = enterprise),
  newEnterprise: (state, enterprise) => state.enterprises.push(enterprise),
  updateEnterprise: (state, updatedEnterprise) => {
    const index = state.enterprises.findIndex(e => e.id === updatedEnterprise.id);
    if (index !== -1) {
      state.enterprises.splice(index, 1, updatedEnterprise);
    }
  },
  removeEnterprise: (state, id) => {
    state.enterprises = state.enterprises.filter(enterprise => enterprise.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
