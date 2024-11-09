// On page load or when changing themes, best to add inline in `head` to avoid FOUC
function setTheme(){
    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )
}
window.onload = function(){
    setTheme()
    let light_theme_button = document.getElementById("ligth-theme-button")
    let dark_theme_button  =  document.getElementById("dark-theme-button")

    light_theme_button.addEventListener("click", function (e) {
        localStorage.theme = 'light'
        this.className = "rounded text-white bg-slate-950"
        dark_theme_button.className = ""
        setTheme()
    })

    dark_theme_button.addEventListener("click", function (e) {
        localStorage.theme = 'dark'
        this.className = "rounded dark:bg-white dark:text-black"
        light_theme_button.className = "dark:text-white"
        setTheme()

    })
}

