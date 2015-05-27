# mobincube.js



#*Protocolo Mobincube*

***
***
###¿Qué es?

 El __Protocolo Mobincube__ es un conjuto de reglas que permiten las interacciones entre la parte web de una App y el contenido nativo de la propia App. Nos permiten realizar las acciones nativas de una App desde una página web.


### Empezando con el Protocolo Mobincube.

El primer paso es crear un objeto llamado __mobincube__ al que llamaremos en cada una de las siguientes consultas a realizar.

```
mobincube = new Mobincube();
```


###Tipos de Utilidades
Existen diferentes tipos de utilidades que nos proporciona el **Protocolo Mobincube**. 

- [Acciones](#acciones)
- [Parámetros Públicos](#param)
- [Modulos](#modulos)


***
##<label id="acciones">Acciones</label>
***
	
Las peticiones del protocolo Mobincube se realizan mediante la llamada de URLs con el formato mobincube:

```
//action/[nombre_acción]/[parámetros_acción]
```


Como ejemplo sencillo de este protocolo, aquí tenemos como abrir una sección de la App: 
```

window.location.href="mobincube://action/section/encodeURIComponent(infosection1)";

```


La lista de acciones disponibles mediante el protocolo Mobincube son:

- [Section](#section) – Permite abrir una sección nativa de la App.
- [View](#view) – Permite abrir una vista de un visor de datos.
- [Call](#call) – Permite hacer una llamada telefónica.
- [Browser](#browser) – Abre una URL en el navegador externo del teléfono.
- [SMS](#sms) – Permite enviar un SMS
- [Route](#route) – Abre el navegador GPS del móvil para llevar al usuario a un destino.
- [Share](#share) – Abre el panel para compartir contenido con otras Apps (social share)
- [Next](#next) – Pasa al siguiente elemento de un visor de datos.
- [Previous](#previous) – Pasa al elemente previo de un visor de datos.
- [Interstitial](#interstitial) – Abre un anuncio de tipo interstitial.
- [Play](#play) – Permite reproducir un archivo local de audio.
- [Stop](#stop) – Detiene la reproducción de un archivo local de audio.
- [Player](#player) – Abre el reproductor audio/video por defecto del móvil y permite reproducir streaming desde URLs externas



Pasamos a desglosar el uso de cada una de las acciones y que parámetros se les puede pasar:


####<label id="section">Section</label>

**Propósito:** Permite abrir una sección nativa de la App.

**Nombre de la acción:** openSection

**Parámetros:** Nombre de la sección.
```
Ejemplo: mobincube.action.openSection(view);

```

####<label id="view">View</label>
**Propósito:** Permite abrir una vista de un visor de datos. 

**Nombre de la acción:** openView

**Parámetros:** nombre de la vista
```
Ejemplo: mobincube.action.openView(view);
```
***Notas:*** Sólo funcionará dentro de un visor de datos.

####<label id="call">Call</label>
**Propósito:** Permite hacer una llamada telefónica.

**Nombre de la acción:** call

**Parámetros:** Cadena de texto que contiene el número de teléfono al que llamar
```
Ejemplo: mobincube.action.call(call);
```

####<label id="browser">Browser</label>
**Propósito:** Abre una URL en el navegador externo del teléfono.

**Nombre de la acción:** openBrowser

**Parámetros:** Cadena de texto con la URL que se tiene que abrir.
```
Ejemplo: mobincube.action.openBrowser(browser);

```
####<label id="sms">SMS</label>
**Propósito:** Permite rellenar un SMS con el número de teléfono del destino y un texto inicial a completar por el usuario.

**Nombre de la acción:** sendSMS

**Parámetros:** una cadena de texto conteniendo en primer lugar el teléfono de destino, seguido de un espacio y el texto que rellenará
```
Ejemplo: mobincube.action.sendSMS(phone, sms);
```
***Notas:*** Esta acción rellena el destino y el cuerpo del SMS pero no lo envía directamente. Requiere que el usuario confirme él envió del SMS
Los parámetros de esta acción tienen que llevar codificación URL para que la App pueda interpretarlos: http://www.w3schools.com/tags/ref_urlencode.asp

####<label id="route">Route</label>

**Propósito:** Abre el navegador GPS del móvil para llevar al usuario a un destino.

**Nombre de la acción:** route

**Parámetros:** cadena de texto que contiene la posición GPS del destino y, separado con un espacio,  una etiqueta optativa con el formato “<latitud,longitud> [<label>]” como ejemplo “40.449324,-3.692240 Madrid”
```
Ejemplo: mobincube.action.route(latitude, longitude, label);
```
***Notas:*** Los parámetros de esta acción tienen que llevar codificación URL para que la App pueda interpretarlos: http://www.w3schools.com/tags/ref_urlencode.asp

####<label id="share">Share</label>
**Propósito:** Abre el panel para compartir contenido con otras Apps (social share)

**Nombre de la acción:** share

**Parámetros:** Una cadena de texto con lo que se quiera compartir
```
Ejemplo: mobincube.action.share(share);
```
***Notas:*** Imágenes, audios, videos… se tendrán que compartir mediante URL porque la App no tiene acceso al recurso de la web.
Los parámetros de esta acción tienen que llevar codificación URL para que la App pueda interpretarlos: http://www.w3schools.com/tags/ref_urlencode.asp

####<label id="next">Next</label>

**Propósito:** Pasa al siguiente elemento de un visor de datos.

**Nombre de la acción:** nextItem

**Parámetros:** Ninguno
```
Ejemplo: mobincube.action.nextItem();
```
***Notas:*** Esta acción solamente funciona dentro de un visor de datos.

####<label id="previous">Previous</label>
**Propósito:** Pasa al elemente previo de un visor de datos.

**Nombre de la acción:** previousItem

**Parámetros:** Ninguno
```
Ejemplo: mobincube.action.previousItem();
```
***Notas:*** Esta acción solamente funciona dentro de un visor de datos.

####<label id="interstitial">Interstitial</label>

**Propósito:** Abre un anuncio de tipo interstitial.

**Nombre de la acción:**openInterstitial

**Parámetros:** Ninguno
```
Ejemplo: mobincube.action.openInterstitial();
```
####<label id="play">Play</label>
**Propósito:** Permite reproducir un archivo local de audio.

**Nombre de la acción:** play

**Parámetros:** Objeto JSON que contiene resource y opciones.
Resource es el ID del recurso audio que se tiene que reproducir.
Como options tenemos loop, para saber si el recurso se tiene que reproducir en bucle (true) o una única vez (false)
```
JSON: 
//reproducirá en bucle el recurso 1234 de tipo audio.
{
 "resource": "@audio1234",
 "loop": true
}
```
```
Ejemplo: mobincube.action.play(play, loop);
```
***Notas:*** El recurso audio a reproducir tiene que estar ya dentro de la App para que se pueda reproducir mediante el gestor de recursos.


####<label id="stop">Stop</label>
**Propósito:** Detiene y cancela el recurso audio indicado en el parámetro, o en caso de no venir indicado, detiene todas las reproducciones de audio en curso.

**Nombre de la acción:** stop

**Parámetros:** Objeto JSON que contiene el nombre del recurso o null. 

``` 
{"resource": null} // Parara todos los recursos audio que se estén reproduciendo
```
```
Ejemplo: mobincube.action.stop(stop);
Ejemplo: mobincube.action.stop();
```

####<label id="player">Player</label>
**Propósito:** Abre el reproductor audio/video por defecto del móvil y permite reproducir streaming desde URLs externas

**Nombre de la accion:**openPlayer

**Parámetros:** Objeto JSON que indica el resource que contiene el audio. Puede ser una URL para reproducir un streaming, un recurso audio estático en la App o un campo de un visor de datos.
```
//url de un streaming externo
{“resource”: ”http://www.nasa.gov/multimedia/nasatv/NTV-Public-IPS.m3u8”}
```

```
Ejemplo: mobincube.action.openPlayer(url)
```


***

## <label id="param"> Parámetros Públicos</label>

***

###Obtención de variables del sistema:

 Las Apps de Mobincube ponen a disposición de los desarrolladores una serie de variables globales destinadas a que el desarrollador pueda personalizar y analizar la actividad de sus usuarios. Las variables globales disponibles son las siguientes:



- **{instance}** -> Identificador único del dispositivo de 20 dígitos de longitud. Se mantiene constante hasta que se borra la App

- **{location}** -> Contiene la localización del dispositivo en el formato “longitud,latitud”. Se actualiza cada 10 segundos.

- **{idApp}** -> Código de identificación de la App. Cada App de Mobincube tiene uno diferente.

- **{deviceInfo}** -> Marca y modelo del dispositivo.

- **{deviceType}** -> Tableta/móvil

- **{osVersion}** -> Versión del sistema operativo.

- **{language}** -> Idioma del dispositivo (es,en,pt,fr…)

- **{screenSize}** -> Tamaño de la pantalla (ancho x alto)

- **{sectionName}** -> Nombre de la sección actual.


- **{country}** -> Nombre del país en el que se encuentra el dispositivo.

- **{ISOCountry}** -> Código del país en el que se encuentra el dispositivo.

- **{dataConnection}** -> Tipo de conexión a internet: WiFi,WWan, 3G, 4G…

- **{postalCode}** -> Código postal de la posición del usuario.

- **{address}** -> Dirección de la posición del usuario.

- **{locality}** -> Ciudad de la posición del usuario.

- **{subLocality}** -> Barrio de la posición del usuario.

- **{adminArea}** -> Condado de la posición del usuario.

- **{subAdminArea}** -> Provincia

- **{density}** -> Factor de escala de la pantalla: 3.0=iPhone plus, 2.0= retina, 1.0 = no retina

- **{session}**

- **{IP}** -> IP del dispositivo.


***Geocaching***

- **{token}** -> Código único para el envió de notificaciones.

- **{carrierName}** -> Compañía de teléfono.

- **{bundleID}** -> Nombre del paquete de la App o el bundleID de iOS.

- **{appBuildTime}** -> Devuelve la fecha de generación de la App en Mobincube.

- **{appVersion}** -> Devuelve la versión de la App

####Como pedirle los datos a la App.

Para que la App nos devuelva la información que contienen las variables anteriores, es necesario realizar una llamada mediante el protocolo Mobincube del siguiente estilo:
```
mobincube://javascript/[nombre de la función de respuesta](‘{variable1}’,’{variable2}’,…])
```
La función de respuesta es una función que tenemos que implementar en nuestro propio código al estilo:
```
 Function getVariables (instance, country) {
// Do Stuff…
}
```

La llamada al protocolo Mobincube para esa función sería:
```

window.location.href= “mobincube://javascript/getVariables(‘{instance}’,’{country}’)”;

```
Tras realizar la llamada mediante el protocolo Mobincube, la App obtendrá el valor de dichas variables y llamará a la función de respuesta mandándole los datos obtenidos como propiedades de la función:
```
getVariables(‘12737126378126’,’Spain’);

```

Dentro de la función, podríamos ejecutar la lógica que consideráramos oportuna.



***

## <label id="modulos">Módulos</label>

***

Las Apps de Mobincube ponen a disposición de los desarrolladores la posibilidad de crear sus propios módulos. Mobincube ofrece el módulo de Login con el propio SDK aunque está sujeto a cualquier tipo de modificación.

##Modulo de Login

***
***
Para trabajar con este módulo debemos tener una cuenta en el sistema de ParseJS que nos proporcione un ID de la App y un Key para que nos facilite el acceso a la base de datos que nos proporcionan.


https://www.parse.com/users


Una vez registrado en ParseJS, debemos introducir el nombre de la base de datos de la app donde guardaremos el nombre de usuario y la contraseña de cada usuario que se registre en nuestra app.

#![eje](http://whitehowler.ovh/ejemplo.png  "eje")


Una vez introducido el nombre de la aplicación, nos saldrá una ventana parecida a esta: 

#![key](http://whitehowler.ovh/keys.png  "key")

De esta ventana nos interesa obtener el __Application ID__ y el __Javascript Key__ que son los que necesitaremos para poder trabajar con nuestro propio login. De manera opcional, podemos pasarle un último parámetro donde va el nombre de la sección al que accederá en caso de que el login sea incorrecto.

###Inicializando el módulo.

Una vez obtengamos estos dos valores, el siguiente paso es lanzar la siguiente orden.
```
mobincube.modules.initialize(idapp, javascriptkey, section, error)
```



El módulo SDK debe recibir tres parametros. El primero es el __Application ID__, seguido del __Javascript Key__ y finalmente debe recibir el nombre de la __sección__ a la que irá cuando el login sea correcto.


```
Ejemplo: mobincube.modules.initialize('NNJB8wHeBw06310WIK3BNsF2AZvYvTp58lz4u0Xh', 'zJLicjMd3CijyfylA1mHBYDq5sekLe0YH5OZQ2Iw', 'mainsection');
Ejemplo: mobincube.modules.initialize('NNJB8wHeBw06310WIK3BNsF2AZvYvTp58lz4u0Xh', 'zJLicjMd3CijyfylA1mHBYDq5sekLe0YH5OZQ2Iw', 'mainsection', 'error section');
```


Una vez hecho eso, el resultado será el siguiente: 

#![login](http://whitehowler.ovh/login.png  "login")




