<template>
  <div>
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-5xl"> {{ props.isEdit ? 'Update Information' : 'Create Information' }}</h1>
    </div>
    <div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="First Name">
          <Input placeholder="Enter First Name" v-model="form.firstName" type="text" />
        </el-form-item>
        <el-form-item label="Last Name">
          <Input placeholder="Enter Last Name" v-model="form.lastName" type="text" />
        </el-form-item>
        <el-form-item label="Address">
          <Input placeholder="Enter Address" v-model="form.address" type="textarea" />
        </el-form-item>
        <el-form-item label="Birthday">
          <DatePicker placeholder="Enter Birthday" v-model="form.birthday" type="date"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ props.isEdit ? 'Update' : 'Create' }}</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { useStudentStore } from '~~/stores/students.js';
import { storeToRefs } from 'pinia';
const studentStore = useStudentStore();
const { students } = storeToRefs(studentStore);
const props = defineProps(['isEdit']);
const form = reactive({
  firstName: '',
  lastName: '',
  address: '',
});
const route = useRoute();

const onSubmit = async () => {
  try {
    await studentStore.actionData(form);
    return navigateTo('/');
  } catch (error) {
    console.log(error);
  }
};
const onCancel = () => {
  navigateTo('/');
};

onMounted(async () => {
  if (props.isEdit) {
    if (!students.value.find(student => student.id == route.params.id)) {
      return navigateTo('/');
    }

    form.firstName = students.value.find(student => student.id == route.params.id).firstName;
    form.lastName = students.value.find(student => student.id == route.params.id).lastName;
    form.address = students.value.find(student => student.id == route.params.id).address;
    form.id = students.value.find(student => student.id == route.params.id).id;
  }
});
</script>
