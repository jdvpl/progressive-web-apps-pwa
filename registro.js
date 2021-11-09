// quiere decir si hay un service worker
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js")
}