<template>
  <div>
    <table class="w-[750px] border-collapse border border-slate-500 mt-10">
      <thead class="h-12">
        <tr>
          <th class="border border-slate-600">ID</th>
          <th class="border border-slate-600">Full Name</th>
          <th class="border border-slate-600">Address</th>
          <th class="border border-slate-600">Birthday</th>
          <th class="border border-slate-600">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="h-10" v-for="(student, index) in tableData" v-if="tableData.length > 0" :key="index">
          <td class="text-center border border-slate-700">{{ student.id }}</td>
          <td class="text-center border border-slate-700">{{ student.firstName }} {{ student.lastName }}</td>
          <td class="text-center border border-slate-700">{{ student.address }}</td>
          <td class="text-center border border-slate-700">{{ dayjs(student.birthday).format('DD-MM-YYYY')}}</td>
          <td class=" h-10 flex justify-around items-center border-slate-700 border-b">
            <el-button class="cursor-pointer" type="danger" size="default" round @click="handleClickDelete(student.id)">Delete</el-button>
            <el-button class="cursor-pointer" type="primary" size="default"  round @click="handleClickEdit(student.id)">Edit</el-button>
          </td>
        </tr>
        <tr v-else>
          <div class="h-10 flex justify-around items-center">
            No Data
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps(['tableData']);
const emit = defineEmits(['delete-data']);
const dayjs = useDayjs()

const { tableData } = toRefs(props);

const handleClickDelete = id => {
  emit('delete-data', id)
}
const handleClickEdit = id => {
  navigateTo(`edit/${id}`);
};
</script>
