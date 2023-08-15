import { defineStore } from 'pinia';
import axios from '~/plugins/axios';

const $axios = axios().provide.axios;

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: {},
    isLoading: false,
  }),
  actions: {
    async getStudent() {
      let res = await $axios.get('/students');
      this.$state.students = res.data;
    },
    async delete(id) {
      await $axios.delete(`/students/${id}`);
    },
    async actionData(body) {
      if (body.id) {
        await $axios.put(`/students/${body.id}`, body);
      } else {
        await $axios.post('/students', body);
      }
    },
  },
  persist: true,
});
