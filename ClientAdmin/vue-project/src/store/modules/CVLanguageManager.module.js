import {
    getLanguagesApi,
    getLanguageApi,
    createLanguageApi,
    updateLanguageApi,
    deleteLanguageApi,
  } from "@/api/CvLanguageManagerApi";
  
  const CVLanguageManager = {
    state: {
      languages: [],
      language: null,
    },
    getters: {
      getLanguages: (state) => state.languages,
      getLanguage: (state) => state.language,
    },
    mutations: {
      SET_LANGUAGES(state, payload) {
        state.languages = payload;
      },
      SET_LANGUAGE(state, payload) {
        state.language = payload;
      },
      ADD_LANGUAGE(state, payload) {
        state.languages.push(payload);
      },
      UPDATE_LANGUAGE(state, payload) {
        const index = state.languages.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          state.languages.splice(index, 1, payload);
          if (state.language?.id === payload.id) {
            state.language = payload;
          }
        }
      },
      DELETE_LANGUAGE(state, id) {
        state.languages = state.languages.filter((language) => language.id !== id);
      },
    },
    actions: {
      async fetchLanguages({ commit }) {
        try {
          const res = await getLanguagesApi();
          commit("SET_LANGUAGES", res || []);
        } catch (error) {
          console.error(error);
        } 
      },
      async fetchLanguage({ commit }, id) {
     
        try {
          const res = await getLanguageApi(id);
          commit("SET_LANGUAGE", res);
        } catch (error) {
          console.error(error);
        } 
      },
      async createLanguage({ commit }, payload) {
      
        try {
          const res = await createLanguageApi(payload);
          commit("ADD_LANGUAGE", res);
        } catch (error) {
          console.error(error);
        } 
      },
      async updateLanguage({ commit }, payload) {
    
        try {
          const res = await updateLanguageApi(payload);
          commit("UPDATE_LANGUAGE", res);
        } catch (error) {
          console.error(error);
        } 
      },
      async deleteLanguage({ commit }, payload) {
       
        try {
          await deleteLanguageApi(payload);
          commit("DELETE_LANGUAGE", payload);
        } catch (error) {
          console.error(error);
        } 
      },
    },
  };
  
  export default CVLanguageManager;
  