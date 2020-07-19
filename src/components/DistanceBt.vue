<template>
  <div id="distid">
      <ul>
    Distance from current location: {{this.milestilldest}} <br> <a style="color:white" id="sadchamp" :href="derp(latter,longer)" target="_blank">   <v-btn rounded small color="black" >Open in Google Maps</v-btn></a> 
      <br> Weather Info:
        <br> <hr id="hr">
        <div id="textbox">
        <p class="alignleft">
  

        <img :src="derping" v-if="derping != null"  align="center" >
     <span position="absolute">  <br> Condition: {{this.cond}} </span>  <br> </p> <p class="alignright">
     <br>
        Wind: {{this.windspeed}} MPH Direction: {{this.winddirection}}<br>
        Temperature: {{this.temp}}&#xb0;F feels like {{this.feels_temp}}&#xb0;F <br>
        Humidity: {{this.humid}}% 
    </p>
    <!-- <p class="alignbottom">
          <div v-if="goodtemp(this.temp)">
            The weather is optimal for whale watching, this is <br>  not a good time to go out because of the coronavirus.
            </div>
        <div v-else>
            The weather conditions are not optimal for whale watching.
        </div> -->
        </div> 
        
<hr id="hr1"> 
 <div v-if="goodtemp(this.temp)">
            The weather is optimal for whale watching, but this is not a good time to go out because of the coronavirus.
            </div>
        <div v-else>
            The weather conditions are not optimal for whale watching.
        </div> 
            </ul>
      </div>

</template>

<script>
import axios from 'axios'
export default {
name: 'DistanceBt',
data() {
    return {
        currentlocation: null,
        currentlatitude: null,
        currentlongitude: null,
        milestilldest: null,
        dest: null,
        homelat: null,
        homelong: null,
        currentstate: null,
        currentcity: null,
        weatherarry: null,
        weather: null,
        windspeed: null,
        cloudcover:null,
        derping: null,
        winddirection: null,
        temp: null,
        feels_temp: null,
        cond: null,
        humid: null,
    }
},
props : {
latter: Number,
longer: Number,
},
created() {
    this.currL();
},
methods: {
    async currL(){
        const response = await axios({
                method: 'get',
                url: "https://api.radar.io/v1/geocode/ip",
                headers: {
                    Authorization: 'prj_live_sk_6c0c4d3c74b02780d6a603e7625a8dbdec7da057',
                },
                data:{
                },
            });
            this.currentlocation = response.data;
            this.currentlatitude = this.currentlocation.address.latitude;
            this.currentlongitude = this.currentlocation.address.longitude;
            this.homelat = this.currentlatitude;
            this.homelong = this.currentlongitude;
            this.currentstate= this.currentlocation.state;
            this.currentcity = this.currentlocation.city;
            this.distancecalc();
            this.currenttemp();
    },
        async distancecalc(){
            try {
                
            
            if(this.currentlatitude != null){
        const response =  await axios({
                method: 'get',
                url: 'https://api.radar.io/v1/route/distance?origin=' + this.currentlatitude + ',' + this.currentlongitude + '&destination=' + this.latter + ',' + this.longer + '&modes=foot,car&units=imperial',
                headers: {
                   Authorization: 'prj_live_sk_6c0c4d3c74b02780d6a603e7625a8dbdec7da057',
                },//airTemperature, cloudCover, currentSpeed
                //'https://api.stormglass.io/v2/weather/point?lat' +  this.latter + '&lng=' + this.longer+ '&params=airTemperature, cloudCover, currentSpeed'
                data:{
                },
            });
            this.dest = response.data;
            this.milestilldest = this.dest.routes.geodesic.distance.text;
            }
         }
         catch (error) {
                this.milestilldest = "Unable to calculate";
            } 
    },
    derp(lat, long){
        return 'https://www.google.com/maps/dir/' + this.homelat + ',+' + this.homelong + '/' + lat + ',+' + long;
    },
    async currenttemp(){
              const response =  await axios({
                method: 'get',
                url:  'http://api.weatherapi.com/v1/current.json?key=ba012d4aadb245a485b161518201807&q=' + this.latter + ',' + this.longer,
                headers: {
                },
                data:{
                },
            });
            this.arry = response.data;
            console.log(response.data);
             this.temp = this.arry.current.temp_f;
             this.feels_temp=this.arry.current.feelslike_f;
             this.derping=this.arry.current.condition.icon;
             this.derping = this.stringer(this.derping);
             this.windspeed=this.arry.current.wind_mph;
              this.winddirection=this.arry.current.wind_dir;
              this.cond=this.arry.current.condition.text;
              this.humid = this.arry.current.humidity;
                console.log(this.arry.current.humidity);
           // this.airspeed = this.arry.currentSpeed.meto;
            // = this.arry.cloudCover;
            //  console.log('arry ' + this.cloudcover.noaa );

    },
    stringer(a){
        return 'http://' + a.substring(2,a.length);
    },
    goodtemp(a){
        if(a > 60){
            return true;
        }
        return false;
    }
},
}
</script>

<style>
#distid {
    font-size:20px;
    color:#6d71ab;
    background-color: #080c40;
    margin-bottom:10px;
}
#textbox {
    display: flex;
    justify-content: space-between;
    font-size:20px;
}
#hr{
    margin-bottom:5px;
    margin-top:8px;

}
#hr1{
    margin-bottom:8px;
     margin-top:8px;

}

</style>