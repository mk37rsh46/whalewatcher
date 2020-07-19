<template>
<div id="appp">
     <div class="accordion__wrapper" v-if='checking(this.info)'>
<badger-accordion>
    <badger-accordion-item v-for="whalesighting in info" :key="whalesighting.id">
        <template slot="header"> <AccordionHeader :numb="whalesighting.quantity" 
             :spec="whalesighting.species" :nere="whalesighting.location" />
        </template> 
        <template slot="content" >
         <DistanceBt :latter="whalesighting.latitude" :longer="whalesighting.longitude"/>
        </template>  
    </badger-accordion-item>
</badger-accordion>
</div>
<div v-else class="bigwhitetext">
    No whales sighted recently :(
</div>
</div>
</template>

<script>
import axios from 'axios';
import AsyncComputed from 'vue-async-computed'
import DistanceBt from '@/components/DistanceBt'
import AccordionHeader from '@/components/AccordionHeader'
import Vue from 'vue';
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
/* Initialize the plugin */
Vue.use(AsyncComputed)
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)
export default {
    name: 'WhereWhale',
    data() {
        return {
            info: null,
            locationinfo:null,
            distanceperlat: [],
            whalelocator: [],
            wow: false,
        }
    },
    components: {
        BadgerAccordion,
        BadgerAccordionItem,
        DistanceBt,
        AccordionHeader,
    },
    props: {
        longitude: Number,
        lat: Number,
        state: String,
        city: String,

    },
    methods: {
        notNull(){
            if(this.lat != null){
                return false;
            }
            else{
                return true;
            }
          
        },
        poggers(){
            this.wow=true;
            console.log("yes");
        },
        checking(a){
            console.log("checking" + a);
            if(a == null | a == ""){
                return false;
            }
                return true;
            
        },
    },
    asyncComputed: {
        newLocation(){
        const response = axios.get('http://hotline.whalemuseum.org/api.json?&near=' + this.lat + "," + this.longitude+ '&limit=5')
        .then(response => (this.info = response.data));
        console.log(response.data);
        this.info = response.data;
        
                return '';
        }
    },
    filters: {
        datefilter(a){
             return   a.split("T")[0];
        },
        numfilter(a){
            if(a==null){
               return Math.floor((Math.random() * 10) + 1);
            }
            return a;
        },
        wherefilter(a){
            console.log(a);
            if(a == ""){
                return "no specific area reported";
            }
            return a;
        }

    }
}
</script>

<style scoped>
#appp {
    text-align:center;
}
.bigwhitetext{
    color: white;
    font-size:40px;
}
</style>