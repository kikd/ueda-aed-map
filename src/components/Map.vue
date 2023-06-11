<template>
  <div class="map">
    <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="[center.lat, center.lng]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
    ></l-tile-layer>
      <l-control-layers />
      <template v-for="aed in AEDData">
        <l-marker :lat-lng="[aed.lat, aed.lon]">
          <l-tooltip>
            {{ aed.name }}
          </l-tooltip>
        </l-marker>
      </template>
    </l-map>
  </div>
</template>

<script lang="ts">
// Libraries
import { defineComponent, onMounted, onBeforeMount, ref, computed } from 'vue';
import { LMap, LTileLayer, LControlLayers, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import useGeolocation from "../utils/useGeolocation";

// Styles
import "leaflet/dist/leaflet.css";

// Assets
import AEDData from '../assets/aed_ueda.json'

export default defineComponent({
  setup() {
    const zoom = ref(16);
    const aed_data = AEDData;

    const { kordinat } = useGeolocation();
    const posisiUser = computed(() => ({
      lat: kordinat.value.latitude,
      lng: kordinat.value.longitude,
    }));
    const center = computed(() => {
      return {lat:posisiUser.value.lat, lng:posisiUser.value.lng};
    })
      
    console.log({ p: posisiUser.value }); // ❌ posisiUser not yet updated in useGeolocation()
    onBeforeMount(() => {
      console.log("before mount");
    })
    onMounted(() => {
      console.log("mounted");
    })
    return {
      center: center,
      zoom: zoom,
      AEDData: aed_data
    }
  },
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LTooltip,
  },
});
</script>

<style scoped>
.map {
  height: 90vh;
  width: 100vw;
}
</style>