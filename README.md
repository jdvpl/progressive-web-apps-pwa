# progressive-web-apps-pwa
progressive web application con react


pwa

condiciones:
---- 
protocolo https o local 127.0.0.1 
---- 
serviceWorker
---- 
manifest.js


### Service worker 

----
caracteristica de navegadores modernos que nos permite ser un intermedierios ente nuestra aplicacion el hardware y el cliente, es un archivo de js el cual que encarga de manejar el comportamiento de nuestra app como guardar respuestas en cache, actualizar el cache automaticamente, lanzar notificaciones push guardar acciones sin conexion, en si maneja toda la app 
----

### paso de compatibilidad registrar SW
`
https://www.udemy.com/course/react-desde-cero-pwa/learn/lecture/25367868#questions/15630632
`

----
inspeccionar elemento consola y escribir `navigator` y buscar `serviceWorker`

### cachear todas las rutas en el archivo de serviceWorker