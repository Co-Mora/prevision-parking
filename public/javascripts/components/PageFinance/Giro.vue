<template>
  <div>
    <div id="wrapper">
      <nav-side :classGiro="classGiro"/>
      <div id="page-wrapper" class="gray-bg">
        <NavBar/>
        <div class="ibox-title">Home / Transaction / ParkBills / Giro</div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox">
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-lg-6">
                      <paginate
                        v-if="!messageError"
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
                      <div v-if="!messageError" class="input-group" style="margin-bottom: 20px">
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
                    <div class="table-responsive">
                      <table
                        v-show="!messageSource && !message"
                        v-if="!messageError"
                        class="table table-bordered"
                      >
                        <thead>
                          <tr>
                            <th>NO.</th>
                            <th>Date</th>
                            <th>Giro Date</th>
                            <th>Transaction ID</th>
                            <th>Giro Transaction Code</th>
                            <th>Ref. No.</th>
                            <th>Remark</th>
                            <th>Staff No.</th>
                            <th>Staff Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody v-if="result == true && errorResult === false">
                          <tr v-for="(data, index) in dataSource" :key="index" class="gradeX">
                            <td class="center">{{data.count}}</td>
                            <td class="center">{{data.createDate || 'Unknown'}}</td>
                            <td class="center">{{data.Date}}</td>
                            <td class="center">{{data.TransId}}</td>
                            <td class="center">{{data.Code}}</td>
                            <td class="center">{{data.RefNo}}</td>
                            <td class="center">{{'N/A'}}</td>
                            <td class="center">{{'N/A'}}</td>
                            <td class="center">{{'N/A'}}</td>
                            <td class="center">{{data.Amount || 'N/A'}}</td>

                            <td class="center">{{data.Status ? 'Success' : 'Failed'}}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr></tr>
                        </tfoot>
                      </table>
                      <div
                        class="alert alert-warning col-sm-12 m-b-xs"
                        v-show="errorResult === true"
                        role="alert"
                      >{{message}}</div>
                      <div
                        class="alert alert-warning col-sm-12 m-b-xs"
                        v-if="messageSource"
                        role="alert"
                      >{{messageSource}}</div>
                      <div
                        class="alert alert-danger col-sm-12 m-b-xs"
                        v-if="messageError"
                        role="alert"
                      >{{messageError}}</div>
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
const axios = require("axios");
const CarParkService = require("../../services/CarParkService");
const qs = require("qs");
const NavSide = require("../NavSide.vue");
const NavBar = require("../NavBar.vue");
const MainFooter = require("../MainFooter.vue");
const DateFormat = require("../../services/DateFormat");
const Sequence = require("../../services/Sequence");
const SearchData = require("../../services/SearchData");

export default {
  name: "Giro",
  data() {
    return {
      carpark: null,
      data1: [],
      dataSource: [],

      operatorID: null,
      operators: null,

      validated: false,
      messageSeason: null,
      errorResult: false,
      result: true,
      classGiro: true,
      searchResult: "",
      selectedFund: null,

      detailsData: null,
      messageError: "",
      isTerms: false,
      message: "",
      pag: 1,

      count: null
    };
  },
  components: {
    NavSide,
    NavBar,
    MainFooter
  },
  methods: {
    paginateNum(pageNum) {
      this.loadData(pageNum);
    },
    getSearchResult() {
      if (this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.loadData(1);
        return 0;
      }
      SearchData.findSearchResult(`fund/giro?search=${this.searchResult}`).then(
        response => {
          this.dataSource = response.data.result;
          DateFormat.dateProcees(this.dataSource);
          Sequence.dataSequences(this.dataSource, 1, this.count);

          this.errorResult = false;
          this.message = "";
          this.result = true;
          if (this.dataSource.length === 0) {
            this.errorResult = true;
            this.result = true;
            this.message = "No data available.";
          }
        }
      );
    },
    loadData(value = 1) {
      CarParkService.fetchAllData(`fund/giro?page=${value}&sort=createDate`)
        .then(response => {
          if (response.data.result.length === 0) {
            this.dataSource = [];
          }
          this.dataSource = response.data.result;
          this.count = Math.ceil(response.data.count / this.dataSource.length);
          if (this.dataSource.length < 100) {
            this.count = value;
          }
          Sequence.dataSequences(this.dataSource, value, this.count);

          this.loadData1();
        })
        .catch(ex => {
          this.messageError = `${ex.message}`;
        });
    },
    loadData1() {
      DateFormat.dateProcees(this.dataSource);
      this.messageSource = "";
      if (this.dataSource.length === 0) {
        this.messageSource = "No data available.";
      }
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
