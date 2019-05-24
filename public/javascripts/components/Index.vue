<template>
    <div>
         <div id="wrapper">
             <NavSide />
             <MainSide />
         </div>
    </div>
</template>

<script>

const NavSide = require('./NavSide.vue')
const MainSide = require('./MainSide.vue')

export default {
  name: 'Index',
  components: {
    NavSide,
    MainSide
  },
}
</script>


































