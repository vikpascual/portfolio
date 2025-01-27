// Al cargar la página o al cambiar de tema, es mejor agregar estilos en línea en el head para evitar el FOUC.
// FOUC es que el contenido se muestra sin estilos y luego se aplica el estilo, lo que hace que el contenido se mueva. 
// pero lo voy a dejar en un fichero aparte
function setTheme(){
    //pillamos botones de cambio de tema
    let light_theme_button = document.getElementById("ligth-theme-button")
    let dark_theme_button  =  document.getElementById("dark-theme-button")

    //TODO: Si en el localstorage esta el tema claro hay que ponerlo
    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )

    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && (window.matchMedia('(prefers-color-scheme: dark)').matches))){
        dark_theme_button.className = "p-2 rounded dark:bg-amber-200 dark:text-black"
        light_theme_button.className = "p-2 dark:text-white"
    }else if(localStorage.theme === 'light'){
        dark_theme_button.className = "p-2"
        light_theme_button.className = "p-2 rounded text-white bg-stone-800"
    }
}
//Funcion para cambiar el tema de la pagina, por default es dark, 
//aunque se podria coger de las preferencias del ususario.
//Pero los colores del tema claro no me convencen mucho, asi que lo dejo en dark por defecto
window.onload = function(){
    localStorage.theme = 'dark'
    setTheme()

    document.getElementById("ligth-theme-button").addEventListener("click", function (e) {
        localStorage.theme = 'light'
        setTheme()
    })
    document.getElementById("dark-theme-button").addEventListener("click", function (e) {
        localStorage.theme = 'dark'
        setTheme()
    })
}
//Funcion para mostrar una imagen en pantalla completa, al darle click
function showImage(image_url){
    const imageview = document.getElementById("imageview-section");
    let image = imageview?.getElementsByTagName("img")[0];
    if (image){
        image.src = image_url;
    }
    imageview?.classList.remove("hidden");
    imageview?.classList.add("flex");
}
//Esconder la imagen al dar click en cualquier lugar del contenedor
function hideImage(){
    let imageview = document.getElementById("imageview-section");
    imageview?.classList.add("hidden");
    imageview?.classList.remove("flex");
}
//Seteamos los eventos en las imagenes
document.addEventListener("DOMContentLoaded", function(){
    //esconder la imagen al dar click en cualquier lugar del contenedor
    let imageview = document.getElementById("imageview-section");
    imageview?.addEventListener("click", hideImage);
    //como en astro no funciona el onclick ni aun con la directiva client:load, vamos a anyadirlo a todas las imagenes
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        //si la imagen no es clickeable, no anyadir el evento
        if(images[i].classList.contains("no-click")){
            continue;
        }
        images[i].addEventListener("click", function(e){
            showImage(e.target.src);
        });
    }
});