<template>
    <div>
         <div id="wrapper">
              <NavSide :classCustomer="classCustomer"/>
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
                        <a @click="logout" href="/login">
                            <i class="fa fa-sign-out"></i> Log out
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-12">
                <div class="col-md-6" v-for="error in errors" :key="error">
                <div class=" alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                </div>
                </div>
            </div>
                <div class="col-lg-12">
                    <div class="ibox ">
                        <div class="ibox-title">
                            <h4>Add Customer</h4>
                        </div>
                        <div class="ibox-content">
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Customer Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">IS Company</label>
                                    <div class="col-sm-10"><input  v-model="isCompany"  placeholder="yes or no" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row"><label class="col-sm-2 col-form-label">Customer NationalID</label>
                                    <div class="col-sm-10"><input @change="isCustomer()" v-model="nationalID"  placeholder="NationalID" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addCustomer()" :disabled="validated == true">Add</button>
                                    </div>
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
const NavSide = require('../../NavSide.vue')
const axios  = require('axios');
const CarParkService = require('../../../services/CarParkService')
const qs =  require('qs')

export default {
  name: 'AddCustomer',
  data () {
    return {
      name: null,
      nationalID: null,
      isCompany: null,
      validated: false,
      classCustomer: true,
      errors: [],
      data: [{
        name: this.name,
        nationalID: this.nationalID,
      }],
    }
  },
  components: {
    NavSide
  },
  methods: {

    addCustomer() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
         if (!this.name && !this.nationalID) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Customer Name')
      } if (!this.nationalID) {
        this.errors.push('Please fill up the Customer NationalID')
      } if (!this.isCompany) {
        this.errors.push('Please fill up the Customer ccc')
      }else {
        this.errors = []
        this.validated = true;
        CarParkService.createData(`customer`, qs.stringify({
            name: this.name,
            nationalID: this.nationalID,
            isCompany: this.isCompany
        }));
      }

    },
    isCustomer() {
      if(this.isCompany == "yes") {
        this.isCompany = 1
      } else {
        this.isCompany = 0
      }
    },
    
  },

}


</script>