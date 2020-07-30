<template>
<div id="accHead" >
    {{numb | numfilter()}} {{spec}}s near  {{nere | wherefilter()}}
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
    color: #d2dcfa;
    width:1000px;
    background-color: #002448;
    margin-bottom:8px;
}
</style>