import { CandidateDetailApi, candidateShowApi, createUserApi, getUserApi, getUsersApi, searchUserByApi, updateUserApi } from "@/api/user/userApi";
import axios from "axios";



const userModule = {
  state: {
    users: [],
    user: null,
    candidates: [],
    candidate: null,
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
    getCandidates: (state) => state.candidates,
    getCandidate: (state) => state.candidate,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    UPDATE_USER(state, payload) {
      const index = state.users.findIndex((item) => item.id === payload.id);
      state.users.splice(index, 1, payload);
      if (state.user.id === payload.id) {
        state.user = payload;
      }
    },
    ADD_USER(state, payload) {
      state.users.push(payload);
    },
    SET_CANDIDATES(state, payload) {
      state.candidates = payload;
    },
    SET_CANDIDATE(state, payload) {
      state.candidate = payload;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const res = await getUsersApi();
        commit("SET_USERS", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUser({ commit }, payload) {
      try {
        const res = await getUserApi(payload);
        commit("SET_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchEditUser({ commit }, payload) {
      try {
        const res = await updateUserApi(payload);
        
        commit("SET_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCreateUser({ commit }, payload) {
      try {
        const res = await createUserApi(payload);
        commit("ADD_USER", res);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchSearchUserByName({commit}, payload){
      try {
        const res = await searchUserByApi(payload);
        commit("SET_USERS", res);
      }catch(error){
        console.error(error);
      }
    },
    async fetchCandidates ({ commit } ) {
      try {
        const res = await candidateShowApi();
        commit("SET_CANDIDATES", res||[]);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCandidateDetail({ commit }, payload){
     try{
       const res = await CandidateDetailApi(payload);
       commit("SET_CANDIDATE", res);
       } catch(error){
         console.error(error);
  
     }
    }
  },
};
export default userModule;
