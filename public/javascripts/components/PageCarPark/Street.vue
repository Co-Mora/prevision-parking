<template>
    <div>
      <div class="modal inmodal" id="myModalUpdate" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content animated bounceInRight">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{zoneName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                          <label>Street Name</label>
                          <input type=" text" v-model="name" placeholder="Enter Street Name" class="form-control">
                      </div>
                      <div class="form-group">
                          <label>Image Name</label>
                          <input type="file" ref="file" @change="handleFileUpload()"  class="form-control">
                          <img style="width: 10%" :src="image" />
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" @click="updateStreet(streetID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{zoneName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">image</th>
                                      <th data-hide="phone,tablet">Carpark Name</th>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedStreet == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="street in selectedStreet" :key="street" class="gradeX">
                                      <td class="center">
                                          <a :href="street.image"><img style="width: 10%" :src="street.image"></a>
                                      </td>
                                      <td class="center">{{zoneName || 'Unknown'}}</td>
                                      <td class="center">{{street.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="street.id" @click="deleteStreet(street.id)">Delete</button></td>
                                      <td>
                                          <button class="pull-right btn btn-primary btn-sm" :value="street.id" @click="viewStreetUpdate(street.id)" >Update</button>
                                      </td>
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
                      </div>

                  </div>

                  <div class="modal-footer">
                      <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
         <div id="wrapper">
             <nav-side :classStreet="classStreet"/>
            <div id="page-wrapper" class="gray-bg">
            <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
              <div class="navbar-header">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
              </div>
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
                <p>Home / Car Park /Street</p>
              </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">

                        <div class="ibox-content">
                            <div class="row">
                              <div class="input-group" style="margin: 0 0 20px 16px">
                                  <a href="/carparks/street/add" class="btn btn-w-m btn-rounded btn-outline-primary">Create New Street</a>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="carparkID" class="form-control m-b" @change="filterZone">
                                    <option disabled value="null" key="null">Please Select Carpark Name</option>
                                    <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                </select>
                              </div>
                              <div class="col-sm-9 m-b-xs">
                                <select v-model="zoneID" class="form-control m-b" @change="filterZoneByStreet">
                                    <option disabled  selected value="null" key="null">Please Select Zone Name</option>
                                    <option v-for="z in zone" :value="z.id" :key="z">{{z.name}}</option>
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
                              <table v-show="!messageStreet  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                                 <thead>
                                 <tr>
                                     <th data-hide="phone,tablet">id(s)</th>
                                     <th data-hide="phone,tablet">image</th>
                                     <th data-hide="phone,tablet">Zone Name</th>
                                     <th data-hide="phone,tablet">Street Name</th>
                                 </tr>
                                 </thead>
                                 <tbody v-if="result == true && errorResult === false">
                                     <tr v-for="s in streets" :key="s" class="gradeX"  >
                                         <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewStreet(s.id)">{{s.id}}</a></td>
                                         <td class="center"><a :href="s.image"><img style="width: 10%" :src="s.image"></a></td>
                                         <td class="center">{{zoneName || 'Unknown'}}</td>
                                         <td class="center">{{s.name || 'Unknown'}}</td>
                                     </tr>
                                 </tbody>
                             </table>
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                              <div class="alert alert-warning col-sm-12 m-b-xs" v-show="messageStreet" role="alert">{{messageStreet}}</div>
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
const axios  = require('axios');
const CarParkService = require('../../services/CarParkService')
const qs =  require('qs')


export default {
  name: 'Street',
  data () {
    return {
      carpark: null,
      zone: null,
      name: null,
      image: null,
      file: null,
      streets: null,
      streetID: null,
      zoneID: null,
      selectedStreet: null,
      carparkID: null,
      validated: false,
      zoneName: null,

      result: true,
      message: '',
      messageStreet: null,
      searchResult: '',
      errorResult: false,
      mySearch: [],

      classStreet: true
    }
  },
  methods: {
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.filterZoneByStreet()
      } else {
          searchResult.findSearchResult(`carpark/${this.carparkID}/zones/${this.zoneID}/street?search=`, this.searchResult).then(response => {
          this.streets = response.data;
          this.errorResult = false
          this.message = "";
          this.result = true;
          if (this.streets.length === 0) {
            this.errorResult = true;
            this.result = true;
            this.message =  "No data available.";
          }
        })
      }

    },
    // processFile() {
    //   let formData = new FormData();
    //   formData.append('imgUploader', this.file);
    //   axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
    //             formData,
    //             {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 'x-access-token': JSON.parse(this.token)
    //             }
    //           }
    //         ).then(response => {
    //           this.image = response.data
    //           console.log('SUCCESS!!', response.data);
    //     })
    //     .catch(function(ex){
    //       console.log(ex);
    //     });

    // },
    // handleFileUpload() {
    //    this.file = this.$refs.file.files[0];
    //    console.log("File:", this.file)
    //    this.processFile();
    // },
    filterZone() {
        CarParkService.fetchAllData(`carpark/${this.carparkID}/zone`).then(response => {
            this.zone = response.data;
              if(this.zone.length === 0) {
                this.messageStreet = "No data available.";
              } else {
                this.zoneID = response.data[0].id;
                this.filterZoneByStreet()
              }
        });
    },
    filterZoneByStreet() {
        CarParkService.fetchAllData(`carpark/${this.carparkID}/zone/${this.zoneID}/street`).then(response => {
            this.streets = response.data;
            this.messageStreet = '';
            if(this.streets.length === 0) {
                this.messageStreet =  "No data available.";
            }
        });
        this.zone.forEach((el) => {
           if(el.id === this.zoneID) {
             this.zoneName = el.name
           }
        })
    },
    viewStreet(value) {
         CarParkService.viewCarPark(`carpark/${this.carparkID}/zone/${this.zoneID}/streets/`, value).then(response => {
            this.selectedStreet = response.data;
        });

    },
    deleteStreet(value) {
        CarParkService.deleteData(`carpark/zones/${this.zoneID}/streets`, value)
    },
    viewStreetUpdate(value) {
      $("#myModal5").modal("hide");
      $("#myModalUpdate").modal("show");
       CarParkService.viewCarPark(`carpark/${this.carparkID}/zone/${this.zoneID}/streets`, value).then(response => {
            this.selectedStreet = response.data;
            this.showSelectedStreet()
        });
    },
    updateStreet(value) {
        this.validated = true;
        document.getElementById('myModalUpdate').style.display = "none";
        CarParkService.updateData(`carpark/${this.carparkID}/zone/${this.zoneID}/street`, value, qs.stringify({
            name: this.name,
            image: this.image,
            zoneID: this.zoneID
        }))
    },
    showSelectedStreet() {
      this.selectedStreet.forEach((el) => {
          this.name = el.name;
          this.image = el.image;
          this.streetID = el.id;

      })
    },
    loadData() {
        CarParkService.fetchAllData('carpark').then(response => {
            this.carpark = response.data
            this.carparkID = response.data[0].id;
            this.filterZone()
        })

    },
  },
  components: {
    NavSide
  },

  mounted () {
      this.loadData();
    }
}
</script>
