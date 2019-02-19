var Vue = require('vue/dist/vue.js')

var Paginate = require('vuejs-paginate')
Vue.component('paginate', Paginate)
//Car Park Components
Vue.component('MainChart', require('./components/MainChart.vue'));
Vue.component('Index', require('./components/Index.vue'));

Vue.component('MainSide', require('./components/MainSide.vue'));

Vue.component('Voucher', require('./components/PageCarPark/Voucher.vue'));
Vue.component('AddVoucher', require('./components/PageCarPark/PageAdd/AddVoucher.vue'));

Vue.component('Zone', require('./components/PageCarPark/Zone.vue'));
Vue.component('AddZone', require('./components/PageCarPark/PageAdd/AddZone.vue'));

Vue.component('Level', require('./components/PageCarPark/Level.vue'));
Vue.component('AddZone', require('./components/PageCarPark/PageAdd/AddLevel.vue'));

Vue.component('zlevel', require('./components/PageCarPark/zLevel.vue'));
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
Vue.component('advert', require('./components/PageAdvert/Adverts.vue'));
Vue.component('add-advert', require('./components/PageAdvert/PageAdd/AddAdverts.vue'));


//Customer
Vue.component('customer', require('./components/PageCustomer/Customer.vue'));
Vue.component('add-customer', require('./components/PageCustomer/PageAdd/AddCustomer.vue'));

//Location
Vue.component('city', require('./components/PageCountry/City.vue'));
Vue.component('country', require('./components/PageCountry/Country.vue'));
Vue.component('state', require('./components/PageCountry/State.vue'));


//Staff
Vue.component('staff', require('./components/PageStaff/Staff.vue'));

//Parker
Vue.component('parker', require('./components/PageParker/Parker.vue'));
Vue.component('add-parker', require('./components/PageParker/PageAdd/AddParker.vue'));

//Gate Master 
Vue.component('add-gate-master', require('./components/PageGate/AddPage/AddGetMaster.vue'));
Vue.component('gate-master', require('./components/PageGate/GateMaster.vue'));
Vue.component('gates', require('./components/PageGate/Gates.vue'));


Vue.component('')

const app = new Vue({
    el: '#app'
})

