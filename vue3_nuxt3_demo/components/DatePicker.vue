<template>
  <el-date-picker v-model="dateValue" :type="type" :placeholder="placeholder" />
</template>

<script setup>
const props = defineProps(['placeholder', 'type']);
const { placeholder, type } = toRefs(props);

</script>
