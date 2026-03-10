import {
  getJobsApi,
  getJobApi,
  editJobApi,
  createJobApi,
  deleteJobApi,
  searchJobsApi,
  getAllJobsApi
} from "@/api/Company/jobApi";

const jobModule = {
  state: {
    jobs: [],
    job: null,
  },
  getters: {
    getJobs: (state) => state.jobs,
    getJob: (state) => state.job,
  },
  mutations: {
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_JOB(state, payload) {
      state.job = payload;
    },
    UPDATE_JOB(state, payload) {
      const index = state.jobs.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.jobs.splice(index, 1, payload);
      }
      if (state.job?.id === payload.id) {
        state.job = payload;
      }
    },
    DELETE_JOB(state, jobId) {
      const index = state.jobs.findIndex((item) => item.id === jobId);
      if (index !== -1) {
        state.jobs[index].status = 'blocked';
      }
    },
    ADD_JOB(state, payload) {
      state.jobs.push(payload);
    },
  },
  actions: {
    async fetchJobs({ commit }, { page, limit }) {
      try {
        const data = await getJobsApi(page, limit);
        commit("SET_JOBS", data);
      } catch (error) {
        console.error('Error fetching jobs in store:', error);
      }
    },
    async fetchJob({ commit }, jobId) {
      try {
        const data = await getJobApi(jobId);
        console.log(22222222,data);
        commit("SET_JOB", data);
      } catch (error) {
        console.error('Error fetching job in store:', error);
      }
    },
    async updateJob({ commit }, job) {
      try {
        const data = await editJobApi(job);
        commit("UPDATE_JOB", data);
      } catch (error) {
        console.error('Error updating job in store:', error);
      }
    },
    async createJob({ commit }, job) {
      try {
        const data = await createJobApi(job);
        commit("ADD_JOB", data);
      } catch (error) {
        console.error('Error creating job in store:', error);
      }
    },
    async deleteJob({ commit }, jobId) {
      try {
        await deleteJobApi(jobId);
        commit("DELETE_JOB", jobId);
      } catch (error) {
        console.error('Error deleting job in store:', error);
      }
    },
    async searchJobs({ commit }, query) {
      try {
        const data = await searchJobsApi(query);
        commit("SET_JOBS", data);
      } catch (error) {
        console.error('Error searching jobs in store:', error);
      }
    },

    async getAllJobs({ commit }) {
      try {
        const data = await getAllJobsApi();
        commit("SET_JOBS", data);
      } catch (error) {
        console.error('Error fetching all jobs in store:', error);
      }
    },
  },
};

export default jobModule;
