
const seedColorEl = document.getElementById("seed-color-input")
const palleteEl = document.getElementById("pallete")
const form = document.getElementById("new-color")
const modeEl = document.getElementById("color-mode")

let hex0 = ""
let hex1 = ""
let hex2 = ""
let hex3 = ""

// render html
renderHtml = () => {
    palleteEl.innerHTML = `
        <div class="pallete" id="pallete">
        <div class="color" style="background:${seedColor}"></div>
        <div class="color" style="background:${hex0}"></div>
        <div class="color" style="background:${hex1}"></div>
        <div class="color" style="background:${hex2}"></div>
        <div class="color" style="background:${hex3}"></div>
        </div>
        <div class="color-hex">
        <p class="color-text">${seedColor}</p>
        <p class="color-text">${hex0}</p>
        <p class="color-text">${hex1}</p>
        <p class="color-text">${hex2}</p>
        <p class="color-text">${hex3}</p>
        </div>`
}

function getColors() {
    seedColor = seedColorEl.value.toUpperCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${modeEl.value}&count=4`)
        .then(res => res.json())
        .then(data => {
            hex0 = data.colors[0].hex.value
            hex1 = data.colors[1].hex.value
            hex2 = data.colors[2].hex.value
            hex3 = data.colors[3].hex.value
            renderHtml()
        })
}

//load colors on refresh
getColors()

//load colors on "Get Scheme" button click
form.addEventListener("submit", function(e){
    e.preventDefault()
    getColors()
})

