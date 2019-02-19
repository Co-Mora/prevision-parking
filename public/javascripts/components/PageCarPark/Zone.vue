
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
                        <label>Zone Name</label>
                        <input type="text" v-model="name" placeholder="Enter Zone Name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Reserved Count</label>
                        <input type=" text"  v-model="reservedCount" placeholder="Enter Reserved Count" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Non Reserved Count</label>
                        <input type=" text" v-model="nonReservedCount" placeholder="Enter NonReserved Count" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Tandem Count</label>
                        <input type=" text" v-model="tandemCount" placeholder="Enter Tandem Count" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Motorcycle Count</label>
                        <input type=" text" v-model="motorcycleCount" placeholder="Enter Motorcycle Count" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Image Name</label>
                        <input type="file" ref="file" @change="handleFileUpload()"  class="form-control">
                        <img style="width: 10%" :src="image" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="updateZone(zoneID)" :disabled="validated == true" class="btn btn-primary">Update changes</button>
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
                                    <th data-hide="phone,tablet">Carpark Name</th>
                                    <th data-hide="phone,tablet">Reserved Bay Count	</th>
                                    <th data-hide="phone,tablet">Delete</th>
                                    <th data-hide="phone,tablet">Update</th>

                                </tr>
                            </thead>
                            <tbody>
                                <span v-show="selectedZone == 0" style="font-size: 20px;">{{message}}</span>
                                <tr v-for="z in selectedZone" :key="z" class="gradeX">
                                    <td class="center">{{carparkName || 'Unknown'}}</td>
                                    <td class="center">{{z.ReservedCount || 0}}</td>
                                    <td>
                                        <button class="pull-right btn btn-danger btn-sm" :value="z.id" @click="deleteZone(z.id)">Delete</button>
                                    </td>
                                    <td>
                                        <button class="pull-right btn btn-primary btn-sm" :value="z.id" @click="viewZoneUpdate(z.id)">Update</button>
                                    </td>
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
        <nav-side :classZone="classZone"/>
        <div id="page-wrapper" class="gray-bg">
            <NavBar />
            <div class="ibox-title">
              <p>Home / Car Park / Zone</p>
            </div>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox-content">
                            <div class="ibox-content">
                                <div class="row">
                                  <div class="input-group" style="margin: 0 0 20px 16px">
                                      <a href="/carparks/zone/add" class="btn btn-rounded btn-w-m btn-outline-primary">Create New Zone</a>
                                  </div>
                                   <div class="col-sm-9 m-b-xs">
                                     <select v-model="carparkID" class="form-control m-b" @change="addZone">
                                         <option disabled value="null" key="null">Please Select Carpark Name</option>
                                         <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                     </select>
                                   </div>
                                   <div class="col-sm-3">

                                     <div class="input-group" style="margin-bottom: 20px">
                                       <input v-model="searchResult" @change="getSearchResult" placeholder="Search" type="text" class="form-control form-control-sm"><span class="input-group-append">
                                      <button type="button"  @click="getSearchResult()" class="btn btn-sm btn-primary">Search</button></span>
                                     </div>
                                  </div>
                                </div>
                                <div class="table-responsive">
                                    <table v-show="!messageZone && !message" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>id(s)</th>
                                                <th>image</th>
                                                <th >Zone Name</th>
                                                <th >Tandem-Reserved Bay Count	</th>
                                                <th >Non-Reserved Bay Count	</th>
                                                <th >Motorcycle Bay Count	</th>
                                                <th >Total</th>

                                            </tr>
                                        </thead>
                                        <tbody v-if="result == true && errorResult === false">
                                            <tr v-for="z in zone" :key="z" class="gradeX" >
                                                <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewZone(z.id)">{{z.id}}</a></td>
                                                <td class="center">
                                                    <a :href="z.image"><img style="width: 10%" :src="z.image"></a>
                                                </td>
                                                <td class="center">{{z.name || 'Unknown'}}</td>
                                                <td class="center">{{z.TandemCount || 0}}</td>
                                                <td class="center">{{z.NonReservedCount || 0}}</td>
                                                <td class="center">{{z.MotorcycleCount || 0}}</td>
                                               <td class="center">{{z.totalSeason || 0}}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                  <div class="alert alert-warning col-sm-12 m-b-xs" v-if="messageZone" role="alert">{{messageZone}}</div>
                                  <div class="alert alert-warning col-sm-12 m-b-xs" v-show="errorResult === true" role="alert">{{message}}</div>
                                </div>
                                <paginate
                                v-show="this.zone.length > 0"
                                :page-count="1"
                                :page-range="3"
                                :margin-pages="2"
                                :click-handler="addZone"
                                :prev-text="'Prev'"
                                :next-text="'Next'"
                                :container-class="'pagination'"
                                :page-class="'page-item'">
                              </paginate>
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
const qs =  require('qs')

export default {
    name: "Zone",
    data() {
        return {
            carpark: null,
            zone: null,
            name: null,
            image: null,
            file: null,
            reservedCount: null,
            tandemCount: null,
            nonReservedCount: null,
            motorcycleCount: null,
            validated: false,

            selectedZone: null,
            carparkID: 'null',
            zoneID: null,
            carparkName: null,

            result: true,
            message: '',
            messageZone: null,
            searchResult: '',
            errorResult: false,
            mySearch: [],
            classZone: true,
        };
    },
    methods: {
      getSearchResult() {
        if(this.searchResult.length === 0) {
          this.errorResult = false;
          this.message = "";
          this.addZone()
        } else {
          searchResult.findSearchResult(`carpark/${this.carparkID}/zone?search=`, this.searchResult) .then(response => {
            this.zone = response.data.result;
            this.errorResult = false
            this.message = "";
            this.result = true;
            if (this.zone.length === 0) {
              this.errorResult = true;
              this.result = true;
              this.message = "No data available.";
            }
          })
        }
      },
    //   processFile() {
    //     let formData = new FormData();
    //     formData.append('imgUploader', this.file);
    //     axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
    //               formData,
    //               {
    //               headers: {
    //                   'Content-Type': 'multipart/form-data',
    //                   'x-access-token': JSON.parse(this.token)
    //               }
    //             }
    //           ).then(response => {
    //             this.image = response.data
    //             console.log('SUCCESS!!', response.data);
    //       })
    //       .catch(function(ex){
    //         console.log(ex);
    //       });

    //   },
    //   handleFileUpload() {
    //      this.file = this.$refs.file.files[0];
    //      console.log("File:", this.file);
    //      this.processFile();
    //   },
        addZone(val = 1) {
                CarParkService.viewData(`carpark/${this.carparkID}/zone?page=${val}`).then(response => {
                    this.zone = response.data.result;
                    this.messageZone = '';
                    if (this.zone.length === 0) {
                        this.messageZone = "No data available.";
                    }
                });
                this.carpark.forEach((el) => {
                    if (el.id === this.carparkID) {
                        this.carparkName = el.name
                    }
                })
            },
            viewZone(value) {
                 CarParkService.viewCarPark(`carpark/${this.carparkID}/zone`, value).then(response => {
                        this.selectedZone = response.data.result;
                });
            },
            deleteZone(value) {
                CarParkService.deleteData(`carpark/${this.carparkID}/zone`, value)
            },
            viewZoneUpdate(value) {
                $("#myModal5").modal("hide");
                $("#myModalUpdate").modal("show");
                CarParkService.viewCarPark(`carpark/${this.carparkID}/zone`, value).then(response => {
                    this.selectedZone = response.data.result;
                    this.showSelectedZone()
                });

            },
            updateZone(value) {
                this.validated = true;
                CarParkService.updateData(`carpark/${this.carparkID}/zone`, value, qs.stringify({
                    name: this.name,
                    image: this.image,
                    ReservedCount: this.reservedCount,
                    TandemCount: this.tandemCount,
                    NonReservedCount: this.nonReservedCount,
                    MotorcycleCount: this.motorcycleCount,
                    carparkID: this.carparkID

                }))

            },
            showSelectedZone() {
              this.selectedZone.forEach((el) => {
                  this.name = el.name;
                  this.motorcycleCount = el.MotorcycleCount;
                  this.tandemCount = el.TandemCount;
                  this.reservedCount = el.ReservedCount;
                  this.nonReservedCount = el.NonReservedCount
                  this.image = el.image;
                  this.zoneID = el.id;

              })
            },
            loadData() {
                    CarParkService.fetchAllData('carpark').then(response => {
                    this.carpark = response.data.result
                    this.classZone = true;
                    this.carparkID = response.data.result[0].id;
                    this.addZone()
                });
            },
    },
    components: {
      NavSide,
      NavBar
    },
    mounted() {
        this.loadData()
    },
};



</script>
