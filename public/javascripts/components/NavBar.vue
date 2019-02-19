<template>
    <div>
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
          </div>
          <div class="navbar-header">
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <span class="m-r-sm text-muted welcome-message">Welcome {{email}}</span>
            </li>

            <li>
              <a @click="logout" href="/login">
                <i class="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      email: localStorage.getItem('email')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    }
  }
}
</script>
