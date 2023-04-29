<template>
  <div class="header">
    <div class="header-content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 2;
  height: 60px;
  background-color: white;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0;
  box-shadow: 0px 1px 1px #cccccc;
}


.header-content {
  margin-left: 250px;
  padding: 20px;
}

p {
  margin: 0;
  padding: 0;
}
</style>
