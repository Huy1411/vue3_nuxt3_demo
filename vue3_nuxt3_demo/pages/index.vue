<template>
  <DefaultLayout>
    <div>
      <div class="flex justify-between items-center">
        <h1 class="text-5xl text-sky-400">Students List</h1>
        <el-button type="info" size="large" @click="handleClickCreate()">Create</el-button>
      </div>
      <div>
        <Table :tableData="students" @delete-data="deleteStudent" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '~~/layouts/DefaultLayout.vue';

import { useStudentStore } from '~~/stores/students.js';
import { storeToRefs } from 'pinia';
const studentStore = useStudentStore();
const { students } = storeToRefs(studentStore);

const deleteStudent = async id => {
  const res = confirm(`Delete Student`);
  try {
    if (res) {
      await studentStore.delete(id);
      await studentStore.getStudent();
    }
  } catch (error) {
    console.log(error);
  }
};
const handleClickCreate = () => {
  navigateTo(`create`);
};
onMounted(async () => {
  try {
    await studentStore.getStudent();
  } catch (error) {
    console.log(error);
  }
});
</script>
