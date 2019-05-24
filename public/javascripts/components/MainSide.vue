<template>
    <div>
        <div id="page-wrapper" class="gray-bg">
        <NavBar />
      <div class="wrapper wrapper-content animated fadeInRight">
          <car-park />
        </div>
        <MainFooter />

        </div>
    </div>
</template>

<script>
const CarPark = require('./CarPark.vue')
const store = require('store');

const NavBar =  require('./NavBar.vue')
const MainFooter =  require('./MainFooter.vue')
export default {
  name: 'MainSide',
  data () {
    return {
     
    }
  },
  components: {
    CarPark,
    NavBar,
    MainFooter
  },
  methods: {

    
  },
  
}

</script>
