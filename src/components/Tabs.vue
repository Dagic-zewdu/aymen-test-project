<template>
  <div class="firstTab">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active': activeTab1 === 1 }" @click="activateTab(1)">My Expenses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ 'active': activeTab1 === 2 }" @click="activateTab(2)">All Expenses</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  activeTab1: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(['tab-changed1']);

const activateTab = (tabIndex1) => {
  emit('tab-changed1', tabIndex1);
};
</script>

<style scoped>
.firstTab .nav-tabs .nav-item .nav-link {
  font-size: 14px;
  border: none;
  border-bottom: 2px solid transparent;
  color: #898A8D;
  cursor: pointer;
}

.firstTab .nav-tabs .nav-item .nav-link.active {
  border-color: black;
  border-bottom: 2.5px solid black;
}

.firstTab .nav-tabs .nav-item .nav-link.active {
  color: #000;
  font-size: 14px;
  font-weight: 700;
}
</style>
