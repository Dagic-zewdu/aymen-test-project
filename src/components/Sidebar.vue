<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/Sidebar/SiFiLogo.svg" alt="Logo" />
    </div>
    <div class="sidebar-content">
      <ul class="sidebar-links ">
        <li><a href="#">Account</a></li>
        <li><a href="#">Insight</a></li>
        <li><a href="#">Cards</a></li>
        <li><a href="/" class="active">Expenses</a></li>
        <li><a href="#">Reimbursement</a></li>
        <li><a href="#">Spaces</a></li>
        <li><a href="#">Accounting</a></li>
        <li><a href="#">Configuration</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    if (this.$options.name === 'Sidebar') { // Check if the component is the Sidebar
      const links = document.querySelectorAll('ul.sidebar-links li a');
      links.forEach(link => {
        link.addEventListener('click', function() {
          // Remove active class from all links
          links.forEach(link => {
            link.classList.remove('active');
          });

          // Add active class to the clicked link
          this.classList.add('active');
        });
      });
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: auto;
  width: 220px;
  background-color: #FCFCF9;
  color: #fff;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-left: 20px;
}

.logo img {
  max-height: 40px;
}

.sidebar-content {
  position: relative;
  z-index: 1;
  margin-top: 33px;
  padding: 0px;
}


ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
}

a {
  display: flex;
  align-items: center;
  padding-left: 45px;
  color: #898A8D;
  text-decoration: none;
  height: 38px;
  
  font-size: 14px;
  font-weight: 600;
}
a.active {
  color: #000;
  background-color: #DDFF55;
  position: relative;
}

a.active::before {
  content: "";
  display: block;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  width: 3.5px;
  height: 100%;
  margin-left: -45px;
  margin-right: 41px;
  background-color: black;
}



a:hover {
    color: #000;
  background-color: #f6ffd1;
}
</style>
