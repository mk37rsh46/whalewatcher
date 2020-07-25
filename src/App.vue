<template>
<div>
  <div id="app1">
  Enter a location and find whale sightings
  </div>
  <div id="app">
  
    <svg class="center" x="0px" y="0px" width="250px" height="250px" viewBox="0 0 250 250">
  <path class="path2" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M124.241,151.721c29.446-9.411,64.104-4.367,91.04,42.945c0,0-33.618,3.563-31.382,39.307c22.249,3.821,35.751-15.939,35.751-15.939  c6.006,13.203,22.958,18.904,22.958,18.904c16.673-33.518-14.624-49.546-14.624-49.546C245.333,68.601,167.75,54.5,134.502,52.163  C88.5,49,96.252,18.706,97,7.125C64.875,15,71.667,56.667,68.752,58.141C-45.066,124.14,20.167,201.375,27.667,204.5"/>
  <path class="path" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M219.638,217.784c-5.204-11.196-1.548-24.239-1.548-24.239c-10.28-57.368-44.34-67.251-61.09-76.96s-1.641-16.537,7.68-16.728  s13.737-1.869,13.242-7.182C175.25,81.5,121.75,78.5,111.176,119.907c-3.073,16.19,21.835,39.559,26.068,60.438  c0.684,3.691-5.729,8.884-24.906-0.249c-19.178-9.133-23.088-30.346-33.699-34.514c-43.51-14.963-50.188,59.404-50.188,59.404  c24.735,9.521,36.923-18.126,66.668-38.722"/>
  <path class="eye" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M23.833,146.667c11.667,1.833,14.16-23.786,3.83-25.56S12.167,144.834,23.833,146.667z"/>
</svg>
    <CurrentLocation/>
     <!-- <WhaleFacts/> -->
  </div>
  </div>
</template>

<script>
// import WhaleFacts from './components/WhaleFacts.vue'
import CurrentLocation from './components/CurrentLocation'
export default {
  name: 'App',
  components: {
    // WhaleFacts,
    CurrentLocation,
  }
}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;   
  text-align:center;
    margin-top:80px;
}
.path {
  stroke-dasharray: 572;
  stroke-dashoffset: 572;
  animation: pathAnimation 1.2s linear 0.001s forwards;
  visibility: hidden;
} 

.path2 { 
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: pathAnimation2 1.5s linear 1.2s forwards; 
  visibility: hidden;
}

.eye {
  stroke-dasharray: 68;
  stroke-dashoffset: 68;
  animation: eyeAnimation .5s linear 2.72s forwards;
  visibility: hidden;
}

@keyframes pathAnimation { 
  from {visibility: hidden; stroke-dashoffset: 572;}
  to { visibility: visible; stroke-dashoffset: 0; }
}

@keyframes pathAnimation2 {  
  from {visibility: hidden;stroke-dashoffset: 800; }
  to { visibility: visible; stroke-dashoffset: 0; }
}

@keyframes eyeAnimation {  
  from { visibility: hidden;stroke-dashoffset: 68;}
  to {visibility: visible; stroke-dashoffset: 0;}
}

/*only for general style*/
* {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4d90fe;
  }
  #app1{
    margin-top:120px;
    color:white;
    text-align:center;
    font-size: 50px;
  }
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
  
</style>
