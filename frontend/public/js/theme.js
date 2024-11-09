// On page load or when changing themes, best to add inline in `head` to avoid FOUC
function setTheme(){
    let light_theme_button = document.getElementById("ligth-theme-button")
    let dark_theme_button  =  document.getElementById("dark-theme-button")

    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )

    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && (window.matchMedia('(prefers-color-scheme: dark)').matches))){
        dark_theme_button.className = "rounded dark:bg-white dark:text-black"
        light_theme_button.className = "dark:text-white"
    }else if(localStorage.theme === 'light'){
        dark_theme_button.className = ""
        light_theme_button.className = "rounded text-white bg-slate-950"
    }
}
window.onload = function(){
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

