
import { getEnterpriseById, getUserById, updateEnterprise } from '../../../api/Company/enterpriseApi';

const state = {
  enterprise: {},
  owner: {},
};

const getters = {
  enterpriseData: (state) => state.enterprise,
  ownerData: (state) => state.owner,
};

const actions = {
  async fetchEnterprise({ commit }, id = 101) {
    try {
      const enterpriseData = await getEnterpriseById(id);
      commit('setEnterprise', enterpriseData);

      if (enterpriseData.userId) {
        const ownerData = await getUserById(enterpriseData.userId);
        commit('setOwner', ownerData);
      }
    } catch (error) {
      console.error('Error in fetchEnterprise action:', error);
    }
  },
  async updateEnterprise({ commit }, updatedData) {
    try {
      const response = await updateEnterprise(updatedData.id, updatedData);
      commit('setEnterprise', response);
    } catch (error) {
      console.error('Error updating enterprise:', error);
    }
  },
};

const mutations = {
  setEnterprise(state, enterprise) {
    state.enterprise = enterprise;
  },
  setOwner(state, owner) {
    state.owner = owner;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};