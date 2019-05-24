var Vue = require('vue/dist/vue.js')
var Paginate = require('vuejs-paginate')

var Vuetify = require('vuetify');
var VueRouter = require('vue-router')
var VuePagination = require('vue-ads-pagination')
var Pagination = require('vue-pagination-2')
var chosenSelect = require('chosen-js');
const VueGoogleMaps = require('vue2-google-maps');





Vue.use(VueRouter)
Vue.use(Vuetify)
// Vue.use(VuePagination)
Vue.component('paginate', Paginate)
// Vue.component('chosen-select', chosenSelect)

Vue.component("chosen-select", {
  data() {
      return { observer: null }
  },
  props: {
      value: [String, Array],
      multiple: Boolean
  },
  template: `<select><slot></slot></select>`,
  mounted() {
      // Create the observer (and what to do on changes...)
      this.observer = new MutationObserver(function (mutations) {
          $(this.$el).trigger("chosen:updated");
      }.bind(this));

      // Setup the observer
      this.observer.observe(
          $(this.$el)[0],
          { childList: true }
      );
      $(this.$el)
          .val(this.value)
          .chosen({ width: '100%' })
          .on("change", e => this.$emit('input', $(this.$el).val()))
  },
  watch: {
      value(val) {
          $(this.$el).val(val);
      }
  },
  
  updated(){
    $(this.$el).trigger("chosen:updated")
  },
  destroyed() {
      $(this.$el).chosen('destroy');
  }
});


Vue.component('pagination', Pagination)
// Vue.component('vuePagination', VuePagination)

//Car Park Components

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCdunUy-xZg8_1hv2hvnFwHFWsfT92pUJg',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)
   
      //// If you want to set the version, you can do so:
      // v: '3.26',
    },
   
    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,
   
    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
  })
// Vue.component('dashboard', require('./components/App/Dashboard.vue'));

Vue.component('MainChart', require('./components/MainChart.vue'));
Vue.component('Index', require('./components/Index.vue'));

Vue.component('MainSide', require('./components/MainSide.vue'));

Vue.component('view-car', require('./components/PageCarPark/PageAdd/ViewCarPark.vue'));


Vue.component('Voucher', require('./components/PageCarPark/Voucher.vue'));
Vue.component('AddVoucher', require('./components/PageCarPark/PageAdd/AddVoucher.vue'));

Vue.component('Zone', require('./components/PageCarPark/Zone.vue'));
Vue.component('AddZone', require('./components/PageCarPark/PageAdd/AddZone.vue'));

Vue.component('Level', require('./components/PageCarPark/Level.vue'));
Vue.component('AddZone', require('./components/PageCarPark/PageAdd/AddLevel.vue'));

Vue.component('zlevel', require('./components/PageCarPark/ZLevel.vue'));
Vue.component('addzlevel', require('./components/PageCarPark/PageAdd/AddZLevel.vue'));

Vue.component('Street', require('./components/PageCarPark/Street.vue'));
Vue.component('AddStreet', require('./components/PageCarPark/PageAdd/AddStreet.vue'));

Vue.component('Bay', require('./components/PageCarPark/Bay.vue'));
Vue.component('AddBay', require('./components/PageCarPark/PageAdd/AddBay.vue'));

// Wheel Components
Vue.component('master', require('./components/PageWheel/Master.vue'));
Vue.component('addmaster', require('./components/PageWheel/PageAdd/AddMaster.vue'));

Vue.component('lock', require('./components/PageWheel/Lock.vue'));
Vue.component('addlock', require('./components/PageWheel/PageAdd/AddLock.vue'));

Vue.component('pole', require('./components/PageWheel/Pole.vue'));
Vue.component('addpole', require('./components/PageWheel/PageAdd/AddPole.vue'));

//Advert
Vue.component('license', require('./components/PageLicense/License.vue'));

//Customer
Vue.component('customer', require('./components/PageCustomer/Customer.vue'));

//Location
Vue.component('city', require('./components/PageCountry/City.vue'));
Vue.component('add-city', require('./components/PageCountry/PageAdd/AddCity.vue'));

Vue.component('country', require('./components/PageCountry/Country.vue'));
Vue.component('add-country', require('./components/PageCountry/PageAdd/AddCountry.vue'));

Vue.component('state', require('./components/PageCountry/State.vue'));
Vue.component('add-state', require('./components/PageCountry/PageAdd/AddState.vue'));

//PageReport
Vue.component('reportlease', require('./components/PageReport/ReportLease.vue'));
Vue.component('reportmov', require('./components/PageReport/ReportMovement.vue'));


//Staff
Vue.component('staff', require('./components/PageStaff/Staff.vue'));

//Parker
Vue.component('parker', require('./components/PageParker/Parker.vue'));
Vue.component('add-parker', require('./components/PageParker/PageAdd/AddParker.vue'));

//Gate Master 
Vue.component('add-gate-master', require('./components/PageGate/AddPage/AddGetMaster.vue'));
Vue.component('gate-master', require('./components/PageGate/GateMaster.vue'));
Vue.component('gates', require('./components/PageGate/Gates.vue'));

//Seasons
Vue.component('main-season', require('./components/PageSeason/Season.vue'));


//Profile
Vue.component('profile', require('./components/PageProfile/Profile.vue'));


//Finance
Vue.component('fund', require('./components/PageFinance/Fund.vue'));
Vue.component('giro', require('./components/PageFinance/Giro.vue'));
Vue.component('cash', require('./components/PageFinance/Cash.vue'));


//Passcard
Vue.component('passcard', require('./components/PagePasscard/Passcard.vue'));
Vue.component('all-passcard', require('./components/PagePasscard/AllPasscard.vue'));

Vue.component('verify-user', require('./components/VerifyUser/Verify.vue'));

Vue.component('operator', require('./components/PageBusiness/CarParkOperator.vue'));


//Register
Vue.component('greeting', require('./components/PageRegister/PageGreeting/Greeting.vue'));

const app = new Vue({
    el: '#app'
})

