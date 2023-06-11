import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics';

import './style.css'
// Leafletのスタイル読み込み
import 'leaflet/dist/leaflet.css'
const app = createApp(App)
app.use(router)

app.mount('#app')
inject();
