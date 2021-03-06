# Desarrollo de Galeria
## 1. Planteamiento del Problema
Explicar cuál es la mejor forma de resolver la galería que se presenta en el maquetado.
___
## 2. Herramientas ocupadas 
1.  Navegador Web 
    *   Mozilla Firefox
2.  Visual Studio Code
3.  Uso de Frameworks o Tecnologias
    *   html
    *   css / scss 
        *   Flex box 
3.  Ficheros
    *   .html
    *   .css
    *   .scss
___
## 3. Resolución de Galería

En la **Maqueta de Galería** podemos ver 20 elementos entre ellos **Un Video** y **19 Imágenes**. 
Todas estas imágenes tienen tamaños diferentes por lo que se planea distribuirlas y que tengan un pequeño 
**margen blanco entre imagen**.
___
### 3.1 HTML
Para iniciar el desarrollo primero se tiene que generar un archivo llamado **galeria.html** en el pondremos todas las etiquetes requeridas para la **galería**.

A continuación se muestra la sección  de **Galería** en código **html**:
```html
    <section class="galeria">
        <!--
            Para distribuir los elementos se requiere una hilera columnas.
            Para identificar la sección que tendrá hileras se pondrá la clase "row".
            Por otra parte para identificar la galería entre todos los elementos puse un id con nombre "galería"
        -->
        <div class="row">
            <!--Esta sección tendrá una hilera de columnas-->
            <div class="column">
                <!--Cada columna tendrá 5 elementos.-->
                <!--En este caso el primer elemento es un video y los demás imágenes-->
                <video src="./img/videoGaleria.mp4"></video>
                <img src="./img/2.jpeg">
                <img src="./img/3.jpg">
                <img src="./img/4.jpg">
                <img src="./img/5.jpg">
            </div>
            <div class="column">
                <!--Cada columna tendrá 5 elementos.-->
                <img src="./img/8.jpg">
                <img src="./img/9.jpg">
                <img src="./img/10.jpg">
                <img src="./img/11.jpg">
                <img src="./img/11.jpg">
            </div>
            <div class="column">
                <!--Cada columna tendrá 5 elementos.-->
                <img src="./img/8.jpg">
                <img src="./img/9.jpg">
                <img src="./img/10.jpg">
                <img src="./img/11.jpg">
                <img src="./img/11.jpg">
            </div>
            <div class="column">
                <!--Cada columna tendrá 5 elementos.-->
                <img src="./img/8.jpg">
                <img src="./img/9.jpg">
                <img src="./img/10.jpg">
                <img src="./img/11.jpg">
                <img src="./img/11.jpg">
            </div>
        </div>
    </section>
```
Como podemos ver en el código se ordenaron los elementos de la siguiente forma las clases y elementos:

1.  galeria
1.  row
2.  column
3.  img / video

Al ordenarlo de esta forma con **CSS** podemos darle estilos y forma a la sección de galería.

**NOTA:** Las etiquetas img y video requieren sus recursos referenciados en el mismo elemento.

Cree una carpeta dentro del proyecto y agregue los elementos solicitados en las etiquetas.
___
### 3.2 CSS
Como paso siguiente lo se debe generar un fichero con el nombre de **style.css** en caso de usar solo CSS si es de su preferencia ocupar **SASS** también es válido.

**Nota:** Este fichero deberá  estar dentro de la carpeta **CSS** dentro del proyecto.

Para referenciar este fichero usted deberá poner la siguiente etiqueta en el fichero **galeria.html** dentro de head:
```html
<link rel="stylesheet" href="./css/style.css">
```

Teniendo los ficheros, lo que nos queda es empezar a codificar en **CSS**.
Para que los elementos se distribuyan de forma uniforme en este caso se usara **FLEX BOX**.

#### FLEX BOX
El *Módulo de Caja Flexible*, comúnmente llamado **flexbox**, es considerado un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. 

 **Flex Box** nos ayudará a la distribución de nuestros elementos de la **galerías**. **flexbox** es fácil de manejar, ya que usa el concepto de **Caja padre y Caja hijo o hijos**.

A continuación se mostrará como se usó **FLEXBOX**:
 ```css
 section.galeria {
    box-sizing: border-box;
    /* 
    Tomar en cuenta para cualquier 
    valor que se especifique de borde 
    o de relleno para el ancho o alto 
    de un elemento.
    */
    margin: 0;
    padding: 0;
    /*Elimina el relleno y margen*/
}

section.galeria .row {
    display: flex;
    /*Transforma el contenedor padre 
    una caja flexible*/
    flex-wrap: wrap;
    /*Si el contenido sobrepasa el ancho,
    el último elemento bajara
    */
    padding: 8px;
    /*Se agrega relleno de 8px a la caja .row*/
}

section.galeria .row .column {
    flex: 25%;
    max-width: 25%;
    /*Se alterará las proporciones de la caja 
    para que se vean 4 imágenes.
    
    Cada imagen tendrá un 25% y se acomodará
    su contenido*/
}

section.galeria .row .column img:hover {
    box-shadow: 0 1px 50px black;
    /*Cuando el puntero esté en la foto
    se mostrará un sombreado*/
}

section.galeria .row .column img,
section.galeria .row .column video {
    padding: 5px;
    width: 95%
    /*Las imágenes deben abarcar casi todo el ancho
    de la caja , en este caso queremos un padding
    o relleno*/
}
 ```
 Con la siguiente distribución de las etiquetas, las imágenes se acomodarán de forma uniforme en el ancho y largo de la pantalla.

 La pantalla de escritorio normalmente tiene un ancho mayor o igual a **1200px** por lo que al ocupar **FLEXBOX** lo que se hizo es dividir en cuatro las columnas que tendrán adentro las imágenes o videos.

 Desafortunadamente si tenemos un dispositivo que tenga menos ancho de pantalla sea por ejemplo **992px** para una laptop, **720px** para una tableta o menor o igual a **540px** las proporciones no se adecuaran a estas pantallas, por lo que es necesario ocupar Media Query para modificar los puntos de quiebre de la pantalla.

 Estos son los Puntos de Quiebre en las distintas pantallas:
*   **≥1200 Escritorios.**
*   **≥992 Laptop.**
*   **≥768 Tableta.**
*   **≥576 Dispositivos Móviles.**

También existe el caso de que los dispositivos móviles tengan una pantalla menor a *576px* por lo que se debe tomar esto en cuenta.

Sabiendo cuáles son los puntos de quiebre en CSS se modificarán estas proporciones:

```CSS
@media (max-width:1200px) {
    section.galeria .row .column {
        flex: 25%;
        max-width: 25%;
        /*cada elemento tendrá 25% distribuido en el ancho de la pantalla*/
    }
}
@media (max-width:992px) {
    section.galeria .row .column {
        /*Conservara el 25% de la caja de 1200px*/
    }
}
@media (max-width:720px) {
    section.galeria .row .column {
        flex: 50%;
        max-width: 50%;
        /*cada elemento tendrá 50% distribuido en el ancho de la pantalla*/
    }
}
@media (max-width:576px) {
    section.galeria .row .column {
        flex: 100%;
        max-width: 100%;
        /*cada elemento tendrá 100% distribuido en el ancho de la pantalla*/
    }
}
```
**Nota** Ya creada la galería solo queda incluirla en el main del archivo html. Esta sección deberá estar en medio.

El orden de las secciones es el siguiente:

*   header
*   nav
*   main
    *   **Galería** (*aquí se incrusta esta sección*)
*   footer

Tanto las páginas de **HOME.html y Nosotros.html** cuentan con estos elementos, por lo que solo se reutilizaran para esta página en especial.
___
## 4 Conclusiones
La implementación de CSS Flex Box simplifico la distribución de los elementos y recursos de la galería, FlexBox es un buen recurso para Front End.
___
**Prueba. Vacante: Programador WEB**

**NOMBRE DEL POSTULANTE: José Armando Moreno Tolentino**

**E-mail:  armando.moreno.tolentino@gmail.com**

**Repositorios github: https://github.com/JoseArmandoMT1995?tab=repositories**
