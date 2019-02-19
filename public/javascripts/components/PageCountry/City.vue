<template>
    <div>
         <div id="wrapper">
            <nav-side :classCity="classCity"/>
            <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
            </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <span class="m-r-sm text-muted welcome-message">Welcome to Carpark Aide.</span>
                    </li>

                    <li>
                        <a href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
              <div class="ibox-title">
                <p>Home / Location / Cities</p>
              </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">

                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="countryID" class="form-control m-b" @change="filterByState">
                                    <option disabled selected value="null" key="null">Please Select Country Name</option>
                                    <option v-for="cout in country" :value="cout.id" :key="cout">{{cout.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="stateID" class="form-control m-b" @change="getCity">
                                    <option disabled selected value="null" key="null">Please Select State Name</option>
                                    <option v-for="s in state" :value="s.id" :key="s">{{s.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-3">
                                <div class="input-group" style="margin-bottom: 20px">
                                  <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-success">Search</button></span>
                                </div>
                              </div>
                          </div>
                            <div class="table-responsive">
                              <table  v-show="!messageCity  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">name</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                     <tr v-for="c in city" :key="c" class="gradeU"  v-if="result == true && errorResult === false">
                                         <td class="center">{{c.id}}</td>
                                         <td class="center"><a :href="c.image"><img style="width: 10%" :src="c.image"></a></td>
                                         <td class="center">{{c.name || 'Unknown'}}</td>
                                     </tr>
                                 </tbody>
                                 <tfoot>
                                 <tr>
                                     <td colspan="5">
                                         <ul class="pagination float-right"></ul>
                                     </td>
                                 </tr>
                                 </tfoot>
                             </table>
                              <div class="alert alert-primary col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageCity" role="alert">{{messageCity}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    </div>
</template>
<script>
const NavSide = require('../NavSide.vue')
const NavBar = require('../NavBar.vue')

const axios  = require('axios');
const CarParkService = require('../../services/CarParkService')

export default {
  name: "City",
  data() {
    return {
      state: null,
      stateID: 'null',
      countryID: null,
      country: null,
      cityID: 'null',
      city: null,
      carparkID: 'null',
      result: true,
      message: '',
      messageCity: null,
      searchResult: '',
      errorResult: false,
      classCity: true
    };
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.getCity()
      }
        axios
            .get(`https://sys2.parkaidemobile.com/api/country/${this.countryID}/state/${this.stateID}/city?search=${this.searchResult}`, {
                headers: {
                    'x-access-token': JSON.parse(this.token)
                }
            })
            .then(response => {
                this.city = response.data;
                this.errorResult = false;
                this.message = "";
                this.result = true;
                if (this.city.length === 0) {
                        this.errorResult = true;
                        this.result = true;
                        this.message = "No data available.";
                }
            })


    },
    filterByState() {
       CarParkService.viewData(`country/${this.countryID}/state`).then(response => {
          this.state = response.data;
          this.messageCity = "";
          if (this.state.length === 0) {
            this.messageCity = "No data available.";
          } else {
            this.stateID = response.data[0].id;
            this.getCity();
          }

        });
    },
    getCity() {
      CarParkService.viewData(`country/${this.countryID}/state/${this.stateID}/city`).then(response => {
          this.city = response.data;
          this.messageCity = "";
          if (this.city.length === 0) {
            this.messageCity = "No data available.";
          }
        });
    },
    loadData() {
        CarParkService.fetchAllData('country').then(response => {
        this.country = response.data;
        this.messageCity = "";
        if (this.country.length === 0) {
          this.messageCity = "No data available.";
        } else {
          this.countryID = response.data[0].id;
          this.filterByState()
        }


      });
    },
   
  },
  components: {
    NavSide
  },
  mounted() {
    this.loadData();
  },

};
</script>
