<template>
  <div>
    <div id="wrapper">
      <nav-side :classpassCardType="classpassCardType"/>
      <div id="page-wrapper" class="gray-bg">
        <NavBar/>
        <div class="ibox-title">
          <p>Home / Passcard / Passcard Inventory / Passcard Type</p>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox">
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-lg-6">
                      <paginate
                        v-show="!messagePasscard"
                        v-model="page"
                        :page-count="count"
                        :page-range="3"
                        :margin-pages="2"
                        :click-handler="paginateNum"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                      ></paginate>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-group" style="margin-bottom: 20px">
                        <input
                          v-model="searchResult"
                          @change="getSearchResult"
                          placeholder="Search"
                          type="text"
                          class="form-control form-control-sm"
                        >
                        <span class="input-group-append">
                          <button
                            type="button"
                            @click="getSearchResult()"
                            class="btn btn-sm btn-success"
                          >Search</button>
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-12 m-b-xs" style="margin-bottom:20px;">
                      <chosen-select
                        v-model="operatorID"
                        class="chosen-select form-control m-b"
                        v-if="operatorID && operators.length > 0"
                        data-vv-as="operatorID"
                        ref="input"
                        v-on:input="onChangeOperator(operatorID)"
                      >
                        <option disabled value="null" key="null">Please Select Operator Name</option>
                        <option
                          v-for="(op, index) in operators"
                          :value="op.id"
                          :key="index"
                        >{{op.name}}</option>
                      </chosen-select>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table v-show="!messagePasscard && !message" class="table table-bordered">
                      <thead>
                        <tr>
                          <th data-hide="phone,tablet">No.</th>
                          <th data-hide="phone,tablet">Passcard Type</th>
                        </tr>
                      </thead>
                      <tbody v-if="result == true && errorResult === false">
                        <tr v-for="(data, index) in dataSource" :key="index" class="gradeU">
                          <td class="center">{{data.count}}</td>
                          <td class="center">{{data.name || 'NA'}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      class="alert alert-primary col-sm-12 m-b-xs"
                      v-show="errorResult == true && !messagePasscard"
                      role="alert"
                    >{{message}}</div>
                    <div
                      class="alert alert-warning col-sm-12 m-b-xs"
                      v-if="messagePasscard"
                      role="alert"
                    >{{messagePasscard}}</div>
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
const NavSide = require("../NavSide.vue");
const NavBar = require("../NavBar.vue");
const MainFooter = require("../MainFooter.vue");
const CarParkService = require("../../services/CarParkService");
const SearchData = require("../../services/SearchData");
const DateFormat = require("../../services/DateFormat");
const LastUpdatedDate = require("../../services/LastUpdatedDate");
const Sequence = require("../../services/Sequence");

export default {
  name: "Passcard",
  data() {
    return {
      carpark: null,
      carparkID: null,
      dataSource: null,
      classpassCardType: true,
      operatorID: null,
      operators: null,
      validated: false,
      errorResult: false,
      count: null,
      result: true,
      message: "",
      messagePasscard: "",
      pag: 1
    };
  },
  components: {
    NavSide,
    NavBar,
    MainFooter
  },
  methods: {
    paginateNum(pageNum) {
      this.pg = pageNum;
      this.loadData(this.pg);
    },
    onChangeOperator: function(val) {
      this.loadData(1);
    },
    getSearchResult() {
      if (this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.loadData(1);
      }
      SearchData.findSearchResult(
        `passtype?search=${this.searchResult}&sort=createDate`
      ).then(response => {
        this.dataSource = response.data.result;
        DateFormat.dateProcees(this.dataSource);
        Sequence.dataSequences(this.dataSource, 1, this.count);
        //this.loadData1();

        this.errorResult = false;
        this.message = "";
        this.result = true;
        if (this.dataSource.length === 0) {
          this.errorResult = true;
          this.result = true;
          this.message = "No data available.";
        }
      });
    },
    filterOperator() {
      CarParkService.fetchAllData(`operator`).then(response => {
       this.operators = response.data.result;
          this.operatorID = response.data.result[1].id;
        this.loadData();
      });
    },
    loadData(value = 1) {
      CarParkService.fetchAllData(
        `operator/${this.operatorID}/passtype?page=${value}&sort=createDate`
      ).then(response => {
        this.dataSource = response.data.result;
        this.count = Math.ceil(response.data.count / 100);
        if (this.dataSource.length < 100) {
          this.count = value;
        }
        DateFormat.dateProcees(this.dataSource);
        Sequence.dataSequences(this.dataSource, value, this.count);
        //this.loadData1();
        this.messagePasscard = "";
        if (this.dataSource.length === 0) {
          this.messagePasscard = "No data available.";
        }
      });
    },
    loadData1() {
      CarParkService.fetchAllData(`operator/${this.operatorID}/passtype?sort=createDate`).then(
        response => {
          this.dataSource.forEach(el => {
            response.data.forEach(ee => {
              if (el.passtypeID == ee.id) {
                el.passtypeID = ee.name;
              }
            });
          });
        }
      );
    }
  },
  mounted() {
    this.filterOperator();
  }
};
</script>
