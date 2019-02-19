<template>
    <div>
        <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID(s)</th>
                <th >Image</th>
                <th>Is Enable</th>
                <th>Car Park</th>
                <th>Total Bay</th>
                <th>contract Type</th>
                <th>DateCreated</th>
            </tr>
        </thead>
        <tbody>
            <tr class="gradeX" v-for="car in carpark" :key="car">
                <td class="center"><a data-toggle="modal" data-target="#myModal5" @click="viewCarpark(car.id)">{{car.id}}</a></td>
                <td class="center-orientation"><a  :href="car.image"><img style="width: 10%" :src="car.image"></a></td>
                <td class="center"><span :class="{ 'label-primary': car.isEnable == 1, 'label-danger': car.isEnable == 0 }" class="float-right label">{{car.isEnable == 1 ? 'Enable' : 'Disable'}}</span></td>
                <td class="center">{{car.name   || 'Unknown'}}</td>
                <td class="center">{{car.bay}}</td>
                <td class="center"></td>
                <td class="center">{{car.createDate}}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">
                    <ul class="pagination float-lg-left"></ul>
                </td>
            </tr>
        </tfoot>
    </table>
    </div>
    
</template>

<script>
    const axios  = require('axios');
    const CarParkService = require('../../services/CarParkService')
    const qs =  require('qs')

    export default {
        name: "app-static-table",
        data() {
            return {
                selectedCarpark: null,
                carparkName: '',
                city: null,
                cityName: null
            }
        },
        methods: {
            viewCarpark(value) {
                CarParkService.viewCarPark('carpark', value).then(response => {
                    this.selectedCarpark = response.data;
                    this.selectedCarpark.forEach((el) => {
                    this.carparkName = el.name
                        CarParkService.fetchAllData('city').then(response => {
                        this.city = response.data
                        this.city.forEach((e) => {
                            if(el.cityID === e.id) {
                            this.cityName = e.name
                            }
                        })
                        })

                    })
                })
            }
        },
        props: ["carpark"]
        

    }
</script>

<style scoped>

</style>
