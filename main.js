const body = document.body
const caratula = document.getElementById("caratula")
const homerow = document.getElementById("homerow")
const about = document.getElementById("about")
const hard_skills = document.getElementById("hard_skills")
const title = document.getElementById("title")
const estracto = document.getElementById("estracto")
const li1 = document.getElementById("dynamic_li1")
const li2 = document.getElementById("dynamic_li2")
const cards = document.getElementsByClassName("card")
const ocultos = document.getElementsByClassName("oculto")

//BOTON DARK MODE

const ligthmode = document.getElementById("lightmode")
const darkmode = document.getElementById("darkmode")
const btn_darkmode = document.getElementById("btn-darkmode")

ligthmode.addEventListener("click",()=>{
    btn_darkmode.innerHTML= `<i class="bi bi-brightness-high"></i>`
    caratula.classList.remove("dark")
    homerow.classList.remove("dark")
    body.classList.remove("dark")
    about.classList.remove("dark")
    hard_skills.classList.remove("dark")
    title.classList.remove("dark_title")
    estracto.classList.remove("dark_secondary")
    li1.classList.remove("dark_li")
    li2.classList.remove("dark_li")
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.classList.remove("bg-secondary")
    }
    for (let index = 0; index < ocultos.length; index++) {
        const element = ocultos[index];
        element.classList.remove("oculto_dark")
    }
    
})

darkmode.addEventListener("click",()=>{
    btn_darkmode.innerHTML= `<i class="bi bi-moon-stars"></i>`
    caratula.classList.add("dark")
    homerow.classList.add("dark")
    body.classList.add("dark")
    about.classList.add("dark")
    hard_skills.classList.add("dark")
    title.classList.add("dark_title")
    estracto.classList.add("dark_secondary")
    li1.classList.add("dark_li")
    li2.classList.add("dark_li")
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.classList.add("bg-secondary")
    }
    for (let index = 0; index < ocultos.length; index++) {
        const element = ocultos[index];
        element.classList.add("oculto_dark")
    }
})
