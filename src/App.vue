<template>
  <div>
    <Header />
    <Sidebar />
    <div class="main-content">
      <h3 class="mb-4">Expenses</h3>
      <Tabs :activeTab1="activeTab1" @tab-changed1="onTabChanged1" />
      <div v-if="activeTab1 === 1">
        <div class="secondTab">
          <TabContent :activeTab2="activeTab2"
          @tab-changed2="onTabChanged2" />
           <div v-if="activeTab2 === 1" class="mt-3">
            <Table />
           </div>
           <div v-if="activeTab2 === 2" class="mt-3">
            Approved Tab
           </div>
            <div v-else-if="activeTab2 === 3" class="mt-3">Rejected Tab</div>
        </div>
      </div>
      <div v-else-if="activeTab1 === 2" class="mt-4">All Expenses Tab</div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Tabs from "./components/Tabs.vue";
import TabContent from "./components/TabContent.vue";
import Table from "./components/Table.vue";


export default {
  name: "Expenses",
  components: {
    Sidebar,
    Header,
    Tabs,
    TabContent,
    Table
  },
  data() {
    return {
      activeTab2: 1,
      activeTab1: 1,
    };
  },
  methods: {
    onTabChanged1(tabIndex1) {
      this.activeTab1 = tabIndex1;
    },
    onTabChanged2(tabIndex2) {
      this.activeTab2 = tabIndex2;
    },
  },
};

</script>

<style>
.main-content {
  margin-left: 225px; /* Width of the Sidebar */
  padding: 37px;
}

.main-content h2 {
  font-weight: 700;
}

</style>
