var checkbox = document.querySelector('input[name=theme]');
const currentTheme = localStorage.getItem("data-theme");



if (currentTheme == "dark") {
  document.documentElement.setAttribute('data-theme', 'dark')
  checkbox.checked = true;
  $('#thumbnail-view img').attr('darkPlane.png', 'lightPlane.png');


} else if (currentTheme == "light") {
  document.documentElement.setAttribute('data-theme', 'light')
  checkbox.checked = false;
}



checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem("data-theme", 'dark');
    }

    else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("data-theme", 'light');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
