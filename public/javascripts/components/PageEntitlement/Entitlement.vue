<template>
    <div>
       <div id="wrapper">
        <nav-side :classSeason="classSeason"/>
         <div class="ibox-title">
        <p>Home / Season</p>
      </div>
        <div id="page-wrapper" class="gray-bg">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
                  <div class="col-lg-12">
                      <div class="ibox ">
                          <div class="ibox-content">
                            <div class="row">
                                <div class="col-sm-9 m-b-xs">
                                <select v-model="operatorID" class="form-control m-b" @change="loadData">
                                    <option disabled value="null" key="null">Please Select operator Name</option>
                                    <option v-for="op in operators" :value="op.id" :key="op">{{op.name}}</option>
                                </select>
                              </div>
                              </div>
                              <div class="table-responsive">
                                <!-- <AppStaticTable :carpark="carpark"/> -->
                                <table v-show="!messageEntitlement > 0 && !message" class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>ID(s)</th>
                                        <th>name</th>
                                        <th>bayCount</th>
                                        <th>tenantID</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="result == true && errorResult === false">
                                        <SeasonTerms :isTerms="isTerms" :seasonID="seasonID"/>
                                        <tr v-for="data in dataSource" :key="data" class="gradeX">
                                            <td class="center">{{data.id}}</td>
                                            <td class="center">{{data.name   || 'Unknown'}}</td>
                                            <td class="center">{{data.bayCount   || 'Unknown'}}</td>
                                            <td class="center">{{data.tenantID}}</td>
                                        </tr>
                                    </tbody>
                                   <tfoot>
                                <tr>
                                </tr>
                                </tfoot>
                                </table>
                                <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageEntitlement" role="alert">{{messageEntitlement}}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

      </div>
        </div>
       </div>
      
    </div>
  

</template>

<script>

const axios  = require('axios');
const CarParkService = require('../../services/CarParkService')
const NavSide = require('../NavSide.vue')
const NavBar = require('../NavBar.vue')

export default {
 name: 'Season',
  data () {
    return {
      dataSource: null,

      operatorID: null,
      operators: null,
      
      validated: false,
      messageEntitlement: null,
      errorResult: false,
      result: true,
      classSeason: true,
      isTerms: false,
      message: '',
      pag: 1,
    }

  },
  components: {
      NavSide,
  },
  methods: {
    
    filterOperator() {
       CarParkService.fetchAllData(`operator`).then(response => {
        this.operators = response.data
        this.operatorID = response.data[1].id;
        this.loadData()
      });
    },
    loadData() {
        CarParkService.fetchAllData(`operator/${this.operatorID}/entitlement`).then(response => {
        this.dataSource = response.data
        this.messageEntitlement = '';
        if(this.entitlement.length === 0 ){
          this.messageEntitlement = "No data available.";
        }
      });
    },
    
    
  },
  mounted () {
    this.filterOperator()
  },  

}

</script>
