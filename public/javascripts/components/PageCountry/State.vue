<template>
    <div>
         <div id="wrapper">
            <nav-side :classState="classState"/>
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
                <p>Home / Location / States</p>
              </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">

                        <div class="ibox-content">
                          <div class="row">
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="countryID" class="form-control m-b" @change="getState">
                                    <option disabled selected value="null" key="null">Please Select Country Name</option>
                                    <option v-for="cout in country" :value="cout.id" :key="cout">{{cout.name}}</option>
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
                              <table v-show="!messageState  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">name</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                     <tr v-for="s in state" :key="s" class="gradeU" v-if="result == true && errorResult === false">
                                         <td class="center">{{s.id || 'Unknown'}}</td>
                                         <td class="center"><a :href="s.image"><img style="width: 10%" :src="s.image"></a></td>
                                         <td class="center">{{s.name || 'Unknown'}}</td>
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
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageState" role="alert">{{messageState}}</div>

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
  name: "State",
  data() {
    return {
      country: null,
      countryID: null,
      stateID: null,
      state: null,
      carparkID: 'null',
      result: true,
      message: '',
      messageState: null,
      searchResult: '',
      errorResult: false,
      classState: true
    };
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false
        this.message = "";
        this.getState()
      }
        axios
            .get(`https://sys2.parkaidemobile.com/api/country/${this.countryID}/state?search=${this.searchResult}`, {
                headers: {
                    'x-access-token': JSON.parse(this.token)
                }
            })
            .then(response => {
                this.state = response.data
                this.errorResult = false
                this.message = "";
                this.result = true;
                if (this.state.length === 0) {
                        this.errorResult = true;
                        this.result = true;
                        this.message = "No data available.";
                }
            })


    },
    getState() {
        CarParkService.viewData(`country/${this.countryID}/state`).then(response => {
          this.state = response.data;
          this.messageState = "";
          if (this.state.length === 0) {
            this.messageState = "No data available.";
          }
        });
    },
    loadData() {
        CarParkService.fetchAllData('country').then(response => {
        this.country = response.data;
        this.messageState = "";
        if (this.country.length === 0) {
          this.messageState = "No data available.";
        } else {
          this.countryID = response.data[0].id;
          this.getState()
        }
      });
    },
  },
  components: {
    NavSide
  },
  mounted() {
   this.loadData();
  }
};
</script>
