<template>
  <div>
    <NavSide/>
    <div id="page-wrapper" class="gray-bg">
      <NavBar/>

      <div class="wrapper wrapper-content animated fadeInRight">
        <Dashboardv2/>
      </div>
      <MainFooter/>
    </div>
  </div>
</template>

<script>
const NavSide = require("./NavSide.vue");
const NavBar = require("./NavBar.vue");
const Dashboardv2 = require("./App/Dashboardv2.vue");
const MainFooter = require("./MainFooter.vue");

// import Dashboard from './Dashboard.vue'

export default {
  name: "MainChart",
  data() {
    return {};
  },
  methods: {
    
  },
  components: {
    NavSide,
    NavBar,
    Dashboardv2,
    MainFooter
  },

  mounted() {
    if (window.location.pathname.startsWith('/?email')) {
        const data = window.location.pathname.split('&')
        const jwt = data[1].split('=');
        const email = data[0].split('=');
        const orginalEmail = email[1].replace('&#x40;', '@')
        const token = jwt[1]
         var data = JSON.stringify({ token: token, email: decodeURIComponent(orginalEmail) });
        localStorage.setItem("userVerify", data);
    }
  }
};
</script>
