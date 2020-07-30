<template>
<div>
    <ul>
        <v-flex>
          <v-text-field v-model="inputText" 
            append-outer-icon="mdi-anchor"
            label="Enter a Location"
            dark
            height= "40px"
            @click:append-outer='newlocation()'
            outline
          ></v-text-field>
        </v-flex>
        <br>
        <span id="disid"> Displaying sightings from the past year for: {{this.locationcurrcity}}, {{this.locationcurrstate}}
            <br>
            
        </span>
        <br>
        <div id="#appppp">
            <WhereWhale />
        </div>
    </ul>
</div>
</template>
<script>
import axios from 'axios';
import WhereWhale from '@/components/WhereWhale';
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name: 'CurrentLocation',
    data() {
        return {
    inputText: null,
    locationdata: null,
    locationcurr: null,
    locationcurrcity: null,
    locationcurrstate: null,
        }
    },
    components: {
         WhereWhale,
    },
    created() {
        this.homelocation();
    },
    computed: {
        ...mapState(['latitude','longitude']),
    },
    methods: {
        ...mapActions['setlatitude','setlongitude'],
        async homelocation(){
                const response = await axios({
                method: 'get',
                url: "https://api.radar.io/v1/geocode/ip",
                headers: {
                    Authorization: 'prj_live_sk_6c0c4d3c74b02780d6a603e7625a8dbdec7da057',
                },
                data:{
                },
            });
             this.locationcurr = response.data;
             await this.$store.dispatch('setlongitude',this.locationcurr.address.longitude);
             await this.$store.dispatch('setlatitude',this.locationcurr.address.latitude);
            console.log('current latitude: ' + this.latitude + 'long: ' +this.locationcurr.address.latitude );
            //  this.latitude= this.locationcurr.address.latitude;
             this.locationcurrcity = this.locationcurr.address.city;
             this.locationcurrstate = this.locationcurr.address.state;
            
        },
        async newlocation(){
            var str = this.inputText;
            str.split(" ").join("+");
            const response = await axios({
                method: 'get',
                url: "https://api.radar.io/v1/geocode/forward?query=" + str,
                headers: {
                    Authorization: 'prj_live_sk_6c0c4d3c74b02780d6a603e7625a8dbdec7da057',
                },
                data:{

                },
            });
                this.locationdata = response.data.addresses[0];
                this.$store.dispatch('setlatitude', this.locationdata.latitude);
                console.log("new latitude: " +this.$store.state.latitude);
               this.$store.dispatch('setlongitude',this.locationdata.longitude);
            this.locationcurrcity = this.locationdata.city;
             this.locationcurrstate = this.locationdata.state;
            }
    },
}

</script>

<style scoped>
#currlocation{
    width: 500px
}
#appppp {
    text-align:center;
}
#disid{ 
 text-align:center;
  color:#FFCC7B;
  font-size:30px;
}
</style>