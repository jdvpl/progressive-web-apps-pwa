const CACHE_ELEMENTS=[
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    "./components/Contador.js",
    "./index.js",
    "./registro.js",
]

const CACHE_NAME="v1_cache_contador_react"

// seflt es una constante this
// primer parametro el ciclo de vida instalarse para cachear las rutas
// recive una funcion waitUntil es el que me permite utilizar la memoria cache de los dispositivos
self.addEventListener("install", (e)=>{ 
    e.waitUntil(
        caches.open(CACHE_NAME).then( cache => {
            cache.addAll(CACHE_ELEMENTS).then( () =>{
                self.skipWaiting()
            }).catch(console.log)
        })
    )
})