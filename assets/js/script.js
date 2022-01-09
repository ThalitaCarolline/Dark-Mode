function changeMode() {
    changeClasses();
    changeText();
}

//muda classe
function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//mudar texto
function changeText() {
    const lightMode = "light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + "ON";
}


//selecionar o elemento 'botao' pela id dele
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//adicionar um evento
button.addEventListener('click', changeMode);