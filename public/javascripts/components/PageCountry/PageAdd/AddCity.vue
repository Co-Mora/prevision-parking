<template>
    <div>
         <div id="wrapper">
              <NavSide :classCity="classCity"/>
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
                            <h4>Add City</h4>
                        </div>
                        <div class="ibox-content">
                               <!-- <div class="col-lg-6">
                                    <div class="form-group row">
                                        <select v-model="carparkID" class="form-control m-b" >
                                            <option disabled selected value="null" key="null">Please Select Carpark Name</option>
                                            <option v-for="car in carpark" :value="car.id" :key="car">{{car.name}}</option>
                                        </select>
                                    </div>
                                </div> -->
                                <div class="form-group row"><label class="col-sm-2 col-form-label">City Name</label>
                                    <div class="col-sm-10"><input v-model="name"  placeholder="Name" type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                 <div class="form-group row"><label class="col-sm-2 col-form-label">City Image</label>
                                    <div class="col-sm-10"><input placeholder="Image" type="file" ref="file" @change="handleFileUpload()" class="form-control">
                                      <img style="width: 10%" :src="image" />
                                    </div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group row">
                                    <div class="col-sm-4 col-sm-offset-2">
                                        <button class="btn btn-primary btn-sm" @click="addCity" :disabled="validated == true">Add</button>
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
import axios from 'axios'
import NavSide from '../../App/NavSide'
import qs from 'qs'
export default {
  name: 'AddCity',
  data () {
    return {

      carparkID: 'null',
      classCity: true,
      carpark: null,
      name: null,
      image: null,
      file: null,
      validated: false,
      errors: [],
      clicked: [],
      token: localStorage.getItem('token'),
      isLoggedIn: localStorage.getItem('isLogged'),
    }
  },
  components: {
    NavSide
  },
  methods: {
    processFile() {
      let formData = new FormData();
      formData.append('imgUploader', this.file);

      axios.post( 'https://sys2.parkaidemobile.com/api/images/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': JSON.parse(this.token)
                }
              }
            ).then(response => {
              this.image = response.data
              console.log('SUCCESS!!', response.data);
        })
        .catch(function(ex){
          console.log(ex);
        });

    },
    handleFileUpload() {
       this.file = this.$refs.file.files[0];
       console.log("File:", this.file)
       this.processFile();
    },
    addCity() {
         setTimeout(() => {
        $('.alert').alert('close')
      }, 2000)
         if (!this.name && !this.image) {
        this.errors.push('Please fill up the forms')
        return false
      } if (!this.name) {
        this.errors.push('Please fill up the Level Name')
      } if (!this.image) {
        this.errors.push('Please fill up the level image')
      } else {
        this.errors = []
        this.validated = true;
        axios({
        method: 'post',
        url: 'https://sys2.parkaidemobile.com/api/city/',
        data: qs.stringify({
            name: this.name,
            image: this.image,
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-access-token': JSON.parse(this.token)
        },
        }).then(response => {
           if(response.status == 200) {
                setTimeout(() => {
                    swal({
                        title: 'Add it successfully',
                        icon: 'success'
                    })
                }, 200)
                setTimeout(() => {
                     window.location.href = '/cities'
                }, 1000)
            }


        })
        .catch(error => {
            if(error.message == 'Request failed with status code 401') {
                 setTimeout(() => {
                    swal({
                        title: 'Your or password is wrong',
                        icon: 'error'
                    })
                }, 400)
            }

        });
      }
    },
    logout() {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('token');
    }
  },
 mounted () {


    axios
      .get('https://sys2.parkaidemobile.com/api/carparks/',{headers: { 'x-access-token': JSON.parse(this.token)}})
      .then(response => {
        this.carpark = response.data
      })


  }
}


</script>
<style scoped>
    input-placeholder {
        font-style: italic;
    }
</style>
