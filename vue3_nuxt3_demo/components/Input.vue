
<template>
  <el-input
    v-model="input"
    :placeholder="placeholder"
    :maxlength="String(max)"
    :type='type'
    @focus="isFocused = true"
    @blur="isFocused = false"
    autocomplete="off"
  />
</template>

<script setup>
const props = defineProps(['input', 'placeholder', 'max', 'type']);
const { input, placeholder, max, type } = toRefs(props);
let isFocused = ref(false);

</script>
