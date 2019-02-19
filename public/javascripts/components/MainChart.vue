<template>
    <div>
        <NavSide />
        <div id="page-wrapper" class="gray-bg">

        <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
          </div>
        <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome</span>
                    </li>

                    <li>
                        <a @click="logout" href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
        </nav>
        </div>
      <div class="wrapper wrapper-content animated fadeInRight">
         
        </div>
        <div class="footer">
            <div class="float-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> CarPark Company &copy; 2018
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import NavSide from './NavSide.vue'
// import Dashboard from './Dashboard.vue'

export default {
  name: 'MainChart',
  data () {
    return {
        
    }
  },
  methods: {
    // logout() {
    //   localStorage.removeItem('isLogged');
    //   localStorage.removeItem('token');
    // }
  },
  components: {
    NavSide,
    // Dashboard
  },
  mouted() {
      console.log('MainChart')
  }
}


</script>
