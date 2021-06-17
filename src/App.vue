<template>
  <Header />
  <ShowRests />

  <!--adsense code-->
<div id="adsgoeshere" style="background: #1d1f29; padding-top:60px; text-align: center;" v-html="adsenseContent"></div>


  <div ref="mapDiv" style="width: 100%; height: 80vh" />
</template>

<style></style>

<script>
/* eslint-disable no-undef */
//firebase

import firebase from "firebase/app";
import "firebase/analytics";
    
const firebaseConfig = {
  apiKey: "AIzaSyAlKvdXzpY_x1G7_q-wSr7saS4R32kRoHQ",
  authDomain: "webhmmmm.firebaseapp.com",
  projectId: "webhmmmm",
  storageBucket: "webhmmmm.appspot.com",
  messagingSenderId: "241266780672",
  appId: "1:241266780672:web:bab79760d00085c48c06e5",
  measurementId: "G-7FGJ36BJ9X"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


//import Ads from 'vue-google-adsense'

// Vue.use(require('vue-script2'))

// Vue.use(Ads.Adsense)

//import SignUp from './components/SignUp.vue'
import ShowRests from './components/showRests.vue'
import Header from './components/Header.vue'
import { computed, ref, onMounted } from 'vue'
import { useGeolocation } from './useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyBLWiq2enLwOii4yEnBAnDcnIMJEXNuNyo'


export default {
  setup() {
    const { coords } = useGeolocation()
    console.log("COORDS", coords);

    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    onMounted(async () => {
      await loader.load()
      const map = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 18,
        });
        new google.maps.Marker({ position: currPos.value, map });
    })
    return { currPos, mapDiv }
  },
    
  data(){
    return {
      adsenseContent: '',
    }
  },

  mounted() {
    this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
    console.log(this.adsenseContent)
    //firebase.analytics().logEvent("notification_received");
    firebase.analytics().logEvent("scroll");
  },



  //components: { SignUp },
  components: { Header, ShowRests }

}
</script>
