<template>
  <div style="height: 80vh; width: 50%">
    <l-map ref="map" v-model:zoom="zoom" :center="[13.43245, 100.123534]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        attribution="'&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributors'"
      ></l-tile-layer>
      <l-control-zoom position="bottomright"></l-control-zoom>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

const zoom = ref(10);
const attribution =
  "&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributors'";
</script>

<style scoped></style>
