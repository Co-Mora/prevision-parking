<template>
  <div>
    <div id="wrapper">
      <NavSide :classCarPark="classCarPark"/>
      <div id="page-wrapper" class="gray-bg">
        <NavBar/>
        <div class="ibox-title">
          <p>Home / Car Park</p>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6" v-for="error in errors" :key="error">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  {{error}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="animated fadeInRight">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6" v-for="error in errors" :key="error">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  {{error}}
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ibox">
                <div class="ibox-title">
                  <h4>{{carParkName}}</h4>
                  <h4>Car Park Management</h4>
                </div>
                <div class="ibox-content">
                  <div class="col-lg-12">
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Car Park Code*</label>
                      <div class="col-sm-12">
                        <input disabled v-model="code" placeholder type="text" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Car Park Name*</label>
                      <div class="col-sm-12">
                        <input v-model="name" placeholder disabled type="text" class="form-control">
                      </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group row">
                      <label
                        class="col-sm-10 col-form-label"
                      >Car Park Image (Horizantal: 400 Vertical: 400)</label>
                      <div class="col-sm-10">
                        <img width="400" height="400" :src="image">
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-md-6">
                            <label class="col-form-label">Operating Start Hout</label>
                            <div class="input-group">
                              <input type="text" v-model="startHour" disabled class="form-control">
                              <span class="input-group-append">
                                <button type="button" class="btn btn-default">
                                  <i class="fa fa-clock-o"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label class="col-form-label">Operating End Hour</label>
                            <div class="input-group">
                              <input type="text" disabled v-model="endHour" class="form-control">
                              <span class="input-group-append">
                                <button type="button" class="btn btn-default">
                                  <i class="fa fa-clock-o"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Total Bay Count*</label>
                      <div class="col-sm-12">
                        <input
                          v-model="bayCount"
                          placeholder
                          disabled
                          type="text"
                          class="form-control"
                        >
                      </div>
                    </div>
                    <h4>Car Park Contact</h4>
                  </div>
                  <div class="hr-line-dashed"></div>
                  <div class="col-lg-12">
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-md-6">
                            <label class="col-form-label">Phone No. 1 *</label>
                            <div class="input-group">
                              <input type="text" disabled v-model="phone1" class="form-control">
                              <span class="input-group-append">
                                <button type="button" class="btn btn-default">
                                  <i class="fa fa-phone"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label class="col-form-label">Phone No. 2 *</label>
                            <div class="input-group">
                              <input type="text" disabled v-model="phone2" class="form-control">
                              <span class="input-group-append">
                                <button type="button" class="btn btn-default">
                                  <i class="fa fa-phone"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Car Park Address</h4>
                  </div>
                  <div class="hr-line-dashed"></div>

                  <div class="col-lg-12">
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Address 1 *</label>
                      <div class="col-sm-12">
                        <input disabled v-model="address1" type="text" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Address 2 *</label>
                      <div class="col-sm-12">
                        <input v-model="address2" disabled type="text" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Address 2 *</label>
                      <div class="col-sm-12">
                        <input v-model="address3" disabled type="text" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-md-6">
                            <label class="col-form-label">Postal Code *</label>
                            <div class="input-group">
                              <input type="text" v-model="postalCode" disabled class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label class="col-form-label">City *</label>
                            <div class="input-group">
                              <select disabled v-model="cityName" class="form-control m-b">
                                <option>{{cityName}}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-md-6">
                            <label class="col-form-label">State *</label>
                            <div class="input-group">
                              <select disabled v-model="stateName" class="form-control m-b">
                                <option>{{stateName}}</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label class="col-form-label">Country *</label>
                            <div class="input-group">
                              <select disabled v-model="countryName" class="form-control m-b">
                                <option>{{countryName}}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Car Park Geolocation</h4>
                  </div>
                  <div class="hr-line-dashed"></div>

                  <div class="form-group row">
                    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
                      <gmap-marker></gmap-marker>
                    </gmap-map>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-4 col-sm-offset-2">
                      <a href="/carparks" class="btn btn-default btn-sm">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainFooter/>
      </div>
    </div>
  </div>
</template>


<script>
const NavSide = require("../../NavSide.vue");
const MainFooter = require("../../MainFooter.vue");
const NavBar = require("../../NavBar.vue");

const CarParkService = require("../../../services/CarParkService");
const qs = require("qs");

export default {
  name: "ViewCarPark",
  data() {
    return {
      carpark: null,
      carParkName: null,
      name: null,
      code: null,

      cityID: null,
      cityName: null,

      stateID: null,
      stateName: null,

      countryID: null,
      countryName: null,

      postalCode: null,

      address1: null,
      address2: null,
      address3: null,

      phone1: null,
      phone2: null,

      startHour: null,
      endHour: null,
      bayCount: null,

      image: null,
      classCarPark: true,
      errors: [],
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  components: {
    NavSide,
    MainFooter,
    NavBar
  },
  methods: {
    loadData() {
      var currentUrl = window.location.pathname;
      let value = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
      CarParkService.fetchAllData(`carpark/${value}`).then(response => {
        this.carpark = response.data;
        this.showSelectedCarPark();
      });
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    showSelectedCarPark() {
      this.carpark.forEach(el => {
        this.carParkName = el.name;
        this.name = el.name;
        this.image = el.image;
        this.code = el.carparkCode;
        this.startHour = el.operationHourStart;
        this.endHour = el.operationHourStop;
        this.bayCount = el.TOTALBAY;
        this.cityID = el.cityID;
        this.address1 = el.addressData1;
        this.address2 = el.addressData2;
        this.address3 = el.addressData3;
      });
      this.loadCity(this.cityID);
    },
    loadCity(value) {
      CarParkService.fetchAllData(`city/${value}`).then(response => {
        this.cityName = response.data[0].name;
        this.stateID = response.data[0].stateID;
        this.loadState(this.stateID);
      });
    },
    loadState(value) {
      CarParkService.fetchAllData(`state/${value}`).then(response => {
        this.stateName = response.data[0].name;
        this.countryID = response.data[0].countryID;
        this.loadCountry(this.countryID);
        
      });
    },
    loadCountry(value) {
      CarParkService.fetchAllData(`country/${value}`).then(response => {
        this.countryName = response.data[0].name;
      });
    }
  },
  mounted() {
    this.geolocate();
    this.loadData();
  }
};
</script>


