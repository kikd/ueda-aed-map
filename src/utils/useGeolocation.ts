import { onUnmounted, onMounted, ref } from 'vue'
export default function useGeolocation(){
    const kordinat = ref({ latitude: 0, longitude: 0 })
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    let watcher:any = null
    onMounted(() => {
        if(isSupported)
        watcher = navigator.geolocation.watchPosition(
            position => (kordinat.value = position.coords)
        )
    })

    onUnmounted(()=> {
        if (watcher) navigator.geolocation.clearWatch(watcher)
    })
    return { kordinat, isSupported }
}