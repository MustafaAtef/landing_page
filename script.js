let optionsGearElem = document.querySelector('.options__gear');
let optionsColorsElem = document.querySelector('.options__color--items');
let previousColor;
let mainColor = localStorage.getItem('mainColor');
if (mainColor) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    Array.from(optionsColorsElem.children).forEach(el => {
        el.dataset['color'] == mainColor ? el.classList.add('active') : null;
    })
}

optionsGearElem.addEventListener('click', function () {
    this.children[0].classList.toggle('fa-spin');
    this.parentElement.classList.toggle('open');
})

optionsColorsElem.addEventListener('click', function (e) {
    let colorElem = e.target.closest('li');
    if (colorElem) {
        let color = colorElem.dataset['color'];
        document.documentElement.style.setProperty('--main-color', color);
        localStorage.setItem('mainColor', color);
        if (previousColor) {
            previousColor.classList.remove('active');
        }
        colorElem.classList.add('active');
        previousColor = colorElem;
    }
})

// set images name to array
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let landingPageElem = document.querySelector('.landing-page');
// randomly choose an image every 10s
let randomBackground = setInterval(() => {
    let randomImageIdx = Math.floor(Math.random() * 4);
    // add it to landing page background
    landingPageElem.style.backgroundImage = `url(./images/${images[randomImageIdx]})`;

}, 10000);
