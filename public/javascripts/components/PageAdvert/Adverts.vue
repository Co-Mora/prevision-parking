<template>
    <div>
      <div class="modal inmodal" id="myModalUpdate" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content animated bounceInRight">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title">{{carparkName}}</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Pole Name</label>
                <input type="text" v-model="name" placeholder="Enter Advert Name" class="form-control">
              </div>
              <div class="form-group">
                <label>Image Name</label>
                <input type="file" ref="file" @change="handleFileUpload()"  class="form-control">
                <img style="width: 10%" :src="image" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="updateAdvert(advertID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                      <h4 class="modal-title">{{carparkName}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="table-responsive">
                          <table class="table table-striped table-bordered table-hover dataTables-example">
                              <thead>
                                  <tr>
                                      <th data-hide="phone,tablet">name</th>
                                      <th data-hide="phone,tablet">Delete</th>
                                      <th data-hide="phone,tablet">Update</th>

                                  </tr>
                              </thead>
                              <tbody>
                                  <span v-show="selectedAdverts == 0" style="font-size: 20px;">{{message}}</span>
                                  <tr v-for="ad in selectedAdverts" :key="ad" class="gradeX">
                                      <td class="center">{{ad.name || 'Unknown'}}</td>
                                      <td><button class="pull-right btn btn-danger btn-sm" :value="ad.id" @click="deleteAdverts(ad.id)">Delete</button></td>
                                      <td><button class="pull-right btn btn-primary btn-sm" :value="ad.id" @click="viewUpdateAdvert(ad.id)" >Update</button></td>


                                  </tr>
                              </tbody>
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
            <nav-side :classAdvert="classAdvert" />
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
                <p>Home / Adverts</p>
              </div>
         <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-content">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="input-group" style="margin-bottom: 20px">
                                <a href="/advert/add" class="btn btn-w-m btn-outline-primary btn-rounded">Create New Advert</a>
                              </div>
                            </div>
                            <div class="col-sm-9 m-b-xs">
                              <select v-model="carparkID" class="form-control m-b" @change="addAdverts">
                                <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
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
                            <table v-show="!messageAdvert  && !message" class="table table-striped table-bordered table-hover dataTables-example">
                               <thead>
                               <tr>
                                   <th data-hide="phone,tablet">id(s)</th>
                                   <th data-hide="phone,tablet">image</th>
                                   <th data-hide="phone,tablet">Carpark Name</th>
                                   <th data-hide="phone,tablet">name</th>
                               </tr>
                               </thead>
                               <tbody>
                                   <tr v-for="ad in adverts" :key="ad" class="gradeX" v-if="result == true && errorResult === false">
                                     <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewAdverts(ad.id)">{{'Advert: ' + ad.id || 'Unknown'}}</a></td>
                                       <td class="center"><a :href="ad.image"><img style="width: 10%" :src="ad.image"></a></td>
                                       <td class="center">{{carparkName || 'Unknown'}}</td>
                                      <td class="center">{{ad.name || 'Unknown'}}</td>
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
                            <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageAdvert" role="alert">{{messageAdvert}}</div>

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
  name: "Adverts",
  data() {
    return {
      carpark: null,
      adverts: null,
      carparkID: 'null',
      carparkName: null,
      selectedAdverts: null,

      advertID: null,
      name: null,
      image: null,
      file: null,
      validated: false,

      result: true,
      message: '',
      searchResult: '',
      errorResult: false,
      mySearch: [],
      messageAdvert: null,
      classAdvert: true
    };
  },
  methods: {
    // processFile() {
    //   let formData = new FormData();
    //   formData.append('imgUploader', this.file);
    //   axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'x-access-token': JSON.parse(this.token)
    //       }
    //     }
    //   ).then(response => {
    //     this.image = response.data
    //     console.log('SUCCESS!!', response.data);
    //   })
    //     .catch(function(ex){
    //       console.log(ex);
    //     });

    // },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    //   console.log("File:", this.file);
    //   this.processFile();
    // },
    getSearchResult() {
      if(this.searchResult.length === 0) {
        this.errorResult = false;
        this.message = "";
        this.addAdverts();
      }
      axios
        .get(`https://sys2.parkaidemobile.com/api/carparks/${this.carparkID}/adverts?search=${this.searchResult}`, {
          headers: {
            'x-access-token': JSON.parse(this.token)
          }
        })
        .then(response => {
          this.adverts = response.data;
          this.errorResult = false;
          this.message = "";
          this.result = true;
          if (this.adverts.length === 0) {
            this.errorResult = true;
            this.result = true;
            this.message ="No data available.";
          }
        })
    },
    addAdverts() {
      CarParkService.viewData(`carpark/${this.carparkID}/advert`).then(response => {
          this.adverts = response.data;
          this.messageAdvert = '';
          if (this.adverts.length === 0) {
            this.messageAdvert ="No data available.";
          }
        });
        this.carpark.forEach((el) => {
           if(el.id === this.carparkID) {
             this.carparkName = el.name
           }
        })
    },
    viewAdverts(value) {
       CarParkService.viewCarPark(`carpark/${this.carparkID}/advert`, value).then(response => {
          this.selectedAdverts = response.data;
          if (this.selectedAdverts.length === 0) {
            this.messageAdvert = "No data available.";
          }
        });
    },
    deleteAdverts(value) {
      CarParkService.deleteData(`carpark/${this.carparkID}/advert`, value)
    },

    viewUpdateAdvert(value) {
      $("#myModal5").modal("hide");
      $("#myModalUpdate").modal("show");
      CarParkService.viewCarPark(`carpark/${this.carparkID}/advert`, value).then(response => {
          this.selectedAdverts = response.data;
          this.showSelectedAdvert()
      });
    },
    updateAdvert(value) {
      this.validated = true;
      document.getElementById('myModalUpdate').style.display = "none";
      CarParkService.updateData(`carpark/${this.carparkID}/advert`, value, qs.stringify({
        name: this.name,
        image: this.image,
        carparkID: this.carparkID
      }))
    },
    showSelectedAdvert() {
      this.selectedAdverts.forEach((el) => {
        this.name = el.name;
        this.image = el.image;
        this.advertID = el.id;

      })
    },
    loadData() {
        CarParkService.fetchAllData('carpark').then(response => {
          this.carpark = response.data;
          this.messageAdvert ="";
          if (this.carpark.length === 0) {
            this.message ="No data available.";
          } else {
            this.carparkID = response.data[0].id;
            this.addAdverts()
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
