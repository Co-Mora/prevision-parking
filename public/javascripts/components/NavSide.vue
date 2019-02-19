<template>
    <div>
          <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="-square-full" style="margin-left: 40px" :width="60" src="/images/icon.png" />
                        </div>
                        <div class="logo-element">
                          <img alt="image" class="-square-full" :width="40" src="/images/icon.png" />
                        </div>
                    </li>
                    <li>
                      <a  href="#"><i class="fa fa-dashboard"></i> <span class="nav-label">Dashboard</span><span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level collapse" >
                        <li>
                          <a href="/">View Dashboard</a>
                        </li>
                      </ul>
                    </li>
                    <li :class="{ active: carparkActive }">
                        <a  href="#"><i class="fa fa-car"></i> <span class="nav-label">Car Park</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li>
                              <a href="/carparks">Car park</a>
                            </li>
                            <li :class="{ active: classAll }">
                                <a href="/carparks/zone">Car park Zone<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                  <li :class="{ active: classZone }">
                                    <a href="/carparks/zone">Car park Zone</a>
                                  </li>
                                  <li :class="{ active: classLevel }">
                                    <a href="/carparks/level">Car park Level</a>
                                  </li>
                                  <li :class="{ active: classZLevel }">
                                    <a href="/carparks/zlevel">Car park ZLevel</a>
                                  </li>
                                  <li :class="{ active: classStreet }">
                                    <a href="/carparks/street">Car park Street</a>
                                  </li>
                                  <li :class="{ active: classBay }">
                                    <a href="/carparks/bay">Car park Bay</a>
                                  </li>
                                </ul>
                            </li>
                            <!-- <li :class="{ active: classProduct }">
                              <a href="/carparks/product">Car park Product</a>
                            </li> -->
                            <li :class="{ active: classVoucher }">
                              <a href="/carparks/voucher">Car park Voucher</a>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ active: location }">
                        <a  href="#"><i class="fa fa-globe"></i> <span class="nav-label">Location</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li :class="{ active: classCountry }">
                              <a href="/location/countries">Countries</a>
                            </li>
                            <li :class="{ active: classState }">
                              <a href="/location/states">States</a>
                            </li>
                            <li :class="{ active: classCity }">
                              <a href="/location/cities">Cities</a>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ active: customer }">
                        <a  href="#"><i class="fa fa-address-book "></i> <span class="nav-label">Customers</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                            <li :class="{ active: classCustomer }">
                                <a href="/customers">All</a>
                            </li>
                        </ul>
                        
                    </li>
                    <li :class="{ active: bank }">
                        <a  href="#"><i class="fa fa-university"></i> <span class="nav-label">Bank</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" >
                          <li :class="{ active: classBank }">
                              <a href="/bank">View Bank</a>
                          </li>
                        </ul>
                    </li>
                  <li>
                    <a  href="#"><i class="fa fa-sliders"></i> <span class="nav-label">Settings</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level collapse" >
                      <li>
                        <a href="/setting/forgot_password">Forgot Password</a>
                      </li>
                      <li>
                        <a href="/setting/reset_password">Reset Password</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/activity"><i class="fa fa-flag-o"></i> <span class="nav-label">Activity</span></a>
                  </li>
                  <li>
                    <a href="/login" @click-="logout"><i class="fa fa-power-off"></i> <span class="nav-label">Log out</span></a>
                  </li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<script> 

export default {
  name: 'NavSide',
  props: ['classZone', 'classLevel', 'classZLevel', 'classStreet',
          'classBay', 'classVoucher', 'classMaster', 'classLock',
          'classPole', 'classCountry', 'classState', 'classCity',
          'classAddSubscriber', 'classGateMaster', 'classGate',
          'classAdvert', 'classCustomer', 'classCustomerCP', 'classPassType',
          'classStaff', 'classParker', 'classBank', 'classVoucherBuy', 'classProduct', 'classUsers'
  ],

  data () {
    return {
      Image,
      carparkActive: null,
      wheelMaster: null,
      location: null,
      subscriber: null,
      gateMaster: null,
      advert: null,
      customer: null,
      passType: null,
      staff: null,
      parker: null,
      bank: null,
      voucherBuy: null,
      classAll: false,
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
  mounted() {

      if(this.classZone || this.classLevel || this.classZLevel || this.classStreet || this.classBay) {

        this.carparkActive = true;
        this.classAll = true
      }
      if(this.classVoucher) {
        this.carparkActive = true;
      }
      if(this.classProduct) {
        this.carparkActive = true;
      }

      if(this.classMaster || this.classLock || this.classPole) {
        this.wheelMaster = true
      }
      if(this.classCountry || this.classState || this.classCity) {
        this.location = true
      }
      if(this.classAddSubscriber) {
        this.subscriber = true
      }
      if(this.classGateMaster || this.classGate) {
        this.gateMaster = true
      }
      if(this.classAdvert) {
        this.advert = true
      }
      if(this.classCustomer || this.classCustomerCP) {
        this.customer = true
      }
      if(this.classPassType) {
        this.passType = true
      }
      if(this.classStaff) {
        this.staff = true
      }
      if(this.classParker) {
        this.parker = true
      }
      if(this.classBank) {
        this.bank = true
      }
      if(this.classVoucherBuy) {
        this.voucherBuy = true
      }

  }
}

</script>
