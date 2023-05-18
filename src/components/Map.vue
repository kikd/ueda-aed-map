<template>
  <div class="map">
    <l-map ref="map" v-model:zoom="zoom" :center="[36.402416592945016, 138.2474845647812]">
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
import { defineComponent, onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LControlLayers, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import AEDData from '../assets/aed_ueda.json'

export default defineComponent({
  setup(){
    onMounted(() =>{
    })
    const zoom = ref(16);
    const aed_data = AEDData;
    return {
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
.map{
  height:90vh;
  width:100vw;
}
</style>