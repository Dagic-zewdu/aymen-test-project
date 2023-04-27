<template>
 <div class="d-flex justify-content-between">
  <ul class="nav nav-tabs mt-4">
    <li class="nav-item">
      <a class="nav-link" :class="{ 'active': activeTab2 === 1 }" href="#" @click="activateTab2(1)">Pending Approval</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ 'active': activeTab2 === 2 }" href="#" @click="activateTab2(2)">Approved</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{ 'active': activeTab2 === 3 }" href="#" @click="activateTab2(3)">Rejected</a>
    </li>
  </ul>
  <div class="rightSideButtons ms-auto">
    <button type="button" class="btn btn-secondary Download">
      <img src="../assets/Tab/Download.svg" alt=""> Download
    </button>
    <button type="button" class="btn btn-secondary  Filter">
      <img src="../assets/Tab/Filter.svg" alt=""> Filter
    </button>
  </div>
</div>

</template>

<script>
export default {
  name: "TabContent",
  props: {
    activeTab2: {
      type: Number,
      default: 1,
    },
  },
   methods: {
    activateTab2(tabIndex2) {
      this.$emit('tab-changed2', tabIndex2);
    }
  }
};
</script>

<style>
.secondTab .nav-tabs .nav-link {
    font-size: 14px;
  border: none;
  border-bottom: 4px solid transparent;
  box-shadow: none;
  padding: 3px;
  padding-bottom: 5px;
  padding-right: 27px;
  padding-left: 27px;
  transition: box-shadow 0.01s ease;
  margin-left: 11px;
   color: #898A8D;
}

.secondTab .nav-tabs .nav-link.active {
  color: #000;
  border: none;
  box-shadow: 0px 0.2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  transition: box-shadow 0.01s ease;
  font-weight: 600;
}

.secondTab .nav-tabs {
  border: none;
}


.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}
.rightSideButtons{
margin-top: 14px;
}

.rightSideButtons .Download {
  padding: 10px 15px;
  background-color: #2C2C30;
   font-size: 14px;
   margin-right: 15px;
}
.rightSideButtons .Download img {
   margin-right: 7px;
   margin-bottom: 3px;
}
.rightSideButtons .Filter img {
   margin-right: 7px;
   margin-bottom: 1px;
   height: 23px;
}
.rightSideButtons .Filter {
  padding: 10px 15px;
  background-color: #F4F4F4;
  color: #000;
   font-size: 14px;
   font-weight: 600;
   margin-right: 3px;
   border: none;
}
</style>
