<template>
  <div>
    <NavSide/>
    <div id="page-wrapper" class="gray-bg">
      <NavBar/>

      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg page-heading">
          <div class="col-lg-10">
            <h2></h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a>Account</a>
              </li>
            </ol>
          </div>
          <div class="col-lg-2"></div>
        </div>
        <div class="wrapper wrapper-content">
          <div class="row animated fadeInRight">
            <div class="col-md-5">
              <div class="ibox">
                <div class="ibox-title">
                  <h5>Account</h5>
                </div>
                <div>
                  <div class="ibox-content no-padding border-left-right">
                    <img alt="image" class="img-fluid" src="/images/profile_big.jpg">
                  </div>
                  <div class="ibox-content profile-content">
                    <h4 style="font-weight:400">{{emailUser}}</h4>
                  </div>
                </div>
              </div>

              <div class="ibox">
                <div class="ibox-title">
                  <h5>Security</h5>
                </div>
                <div class="ibox-content">
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">Current Password</label>

                    <div class="col-lg-8">
                      <input v-model="currentPass" value=""  type="password1" placeholder="" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">New Password</label>
                    <div class="col-lg-8">
                      <input v-model="newPassword" type="password1" placeholder="" class="form-control">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-4 col-form-label">Confirm Password</label>
                    <div class="col-lg-8">
                      <input v-model="password" type="password2" placeholder="" class="form-control">
                    </div>
                  </div>
                      <button type="submit" class="btn btn-primary block full-width m-b"><i class="fa fa-key" style="padding:5px;"></i>Submit</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="ibox">
                <div class="ibox-title">
                  <h5>Activites</h5>
                  <div class="ibox-tools">
                    <a class="collapse-link">
                      <i class="fa fa-chevron-up"></i>
                    </a>
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i class="fa fa-wrench"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                      <li>
                        <a href="#" class="dropdown-item">Config option 1</a>
                      </li>
                      <li>
                        <a href="#" class="dropdown-item">Config option 2</a>
                      </li>
                    </ul>
                    <a class="close-link">
                      <i class="fa fa-times"></i>
                    </a>
                  </div>
                </div>
                <div class="ibox-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  </div>
</template>

<script>
const NavSide = require("../NavSide.vue");
const NavBar = require("../NavBar.vue");
const MainFooter = require("../MainFooter.vue");
const data = require("../../../../scratch/userLogin.json");

export default {
  name: "Profile",
  data() {
    return {
      emailUser: '',
      currentPass: '',
      newPassword: '',
      password: ''
    };
  },
  methods: {},
  components: {
    NavSide,
    NavBar,
    MainFooter
  },
  mounted() {
    this.emailUser = data.email;
  }
};
</script>
