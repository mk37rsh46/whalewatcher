<template>
<div id="accHead" >
<div class="text"> {{nere | wherefilter()}} </div> <div class="orcas"> {{numb | numfilter()}} {{spec}}s nearby </div> 
</div>
</template>

<script>
export default {
name: 'AccordionHeader',
data() {
    return {
        
    }
},
props : {
numb: Number,
nere: String,
spec: String,
},
filters : {
wherefilter(a){
            console.log(a);
            if(a == ""){
                return "WA"
            }
            return a;
        },

numfilter(a){
            if(a==null){
               return Math.floor((Math.random() * 10) + 2);
            }
            if(a==1){
                return 2;
            }
            return a;
        },

}

}
</script>

<style>
#accHead{
    text-align:center;
    font-size:25px;
    color: white;
    width:1000px;
    margin-bottom:10px;
    outline-color:white;
    background-color:#FC766AFF;
    border-radius:11px;
}
.text{
    float:left;
    text-align:center;
    font-size:30px;
    padding:9px 4px;
}
.orcas{
    height:50px;
    width:500px;
    margin-left:500px;
    background-color:#71a6fe;
    padding: 9px 4px;
    font-size:30px;
    border-radius:10px;
    color:white;
}
</style>