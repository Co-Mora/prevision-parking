const API = require('../services/API')

const swal = require('sweetalert2')
const fetchAllData = (URL) => {
  return API().get(`${URL}`);
};

const createData = (URL, credentials) => {
  API().post(`${URL}`, credentials).then(response => {
    if(response.status === 200) {
      setTimeout(() => {
        swal({
          title: 'Add it successfully',
          icon: 'success'
        })
      }, 200);
      setTimeout(() => {
        //window.location.href = `/`
      }, 200)
    } else {
      setTimeout(() => {
        swal({
          title: 'Data Error',
          icon: 'error'
        })
      }, 200)
    }
  });
};

const updateData = (URL, value, credentials) => {
  $("#myModalUpdate").modal("hide");
  return API().put(`${URL}/${value}`, credentials).then(response => {
    if (response.status == 200) {
      setTimeout(() => {
        swal({
          title: 'Update it successfully',
          icon: 'success'
        })
      }, 200);
      setTimeout(() => {
        window.location.href = '/carparks/all'
      }, 1000)
    }
  }).catch(error => {
    if (error) {
      setTimeout(() => {
        swal({
          title: 'Error occurred',
          icon: 'error'
        })
      }, 100)
    }

  });

}

const deleteData = (URL, value) => {
  $("#myModal5").modal("hide");

  return API().delete(`${URL}/${value}`).then(response => {

    if(response.status == 200) {
      setTimeout(() => {
        swal({
          title: 'Delete it successfully',
          icon: 'success'
        })}, 200);
      setTimeout(() => {
        window.location.href = '/carparks'
      }, 1000)
    }
  }).catch(error => {
    if (error) {
      setTimeout(() => {
        swal({
          title: 'Error occurred',
          icon: 'error'
        })
      }, 100)
    }

  });

};

const viewCarPark = (URL, value) => {
  return API().get(`${URL}/${value}`);
};

const viewData = (URL) => {
  return API().get(`${URL}`);
};


module.exports = {
  fetchAllData,
  createData,
  updateData,
  deleteData,
  viewCarPark,
  viewData
}
