const body = document.body
const formulario = document.getElementById("form")
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
const navtitle = document.getElementById("navtitle")
const secciones_ocultas= document.querySelectorAll(".hidden")
const foto = document.getElementById("foto")
const cardtitle = document.querySelector(".mtitulo")
const cardtext = document.querySelector(".mtext")
const cardimg = document.querySelector(".mimagen")
const iconos = document.querySelector(".miconos")
const linklive = document.querySelector(".linklive")
const linkrepo = document.querySelector(".linkrepo")
const btnProyecto = document.querySelectorAll(".btnproyecto")
const modalbody = document.querySelector(".modal-body")
const modalfooter = document.querySelector(".modal-footer")
const listgroupitem = document.querySelector(".list-group-item")


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
    foto.classList.remove("dark")
    modalbody.classList.remove("dark")
    modalfooter.classList.remove("bg-dark")
    listgroupitem.classList.remove("dark")
    iconos.classList.remove("dark")
    
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
    foto.classList.add("dark")
    modalbody.classList.add("dark")
    modalfooter.classList.add("bg-dark")
    listgroupitem.classList.add("dark")
    iconos.classList.add("dark")


})

//CAMBIO DE CONTENIDO DE NAV TITLE
const observer = new ResizeObserver( items =>{
   let bodywidth = Math.ceil(items[0].contentRect.width)
   if(bodywidth<450){
    navtitle.innerHTML= `<i class="bi bi-diamond-half"></i> Portafolio`
   } else {
    navtitle.innerHTML= `<i class="bi bi-diamond-half"></i> Sergio Martínez | Portafolio`
   }
})
observer.observe(body)


//OBSERVADOR SCROLL

const observer_scroll = new IntersectionObserver((entries)=>{
   entries.forEach(entry=>{
    entry.target.classList.toggle('show', entry.isIntersecting)
   })
})

secciones_ocultas.forEach(seccion => observer_scroll.observe(seccion))


//PROYECTOS MODAL

const fetchData = async() =>{
    try {
        const res = await fetch("./proyectos.json")
        const data = await res.json()
        console.log(data)
        btnProyecto.forEach((el)=>{
             el.addEventListener("click",(e)=>{
                    let titulo_proyecto = e.target.dataset.proyecto
                    const proyecto = data.filter(el=>el.titulo==titulo_proyecto)
                    
                    cardtitle.innerHTML = proyecto[0].titulo
                    cardtext.textContent = proyecto[0].descripcion
                    cardimg.src= proyecto[0].imagen
                    linklive.href = proyecto[0].url
                    linkrepo.href = proyecto[0].repositorio
                    iconos.innerHTML= icons_tecnologias(proyecto[0].tecnologias)
                    
        })
        
        })
       
    } catch (error) {
        
    }
}

//FUNCION PARA GENERAR EL HTML DE LAS TECNOLOGIAS UTILIZADAS EN CADA PROYECTO
const icons_tecnologias = (tecnologias) =>{
   let lista="" 
   tecnologias.forEach( tecnologia =>{
   switch(tecnologia){
    case "HTML": lista+=`<img src="./assets/file_type_html_icon_130541.svg" style="width: 30px; margin: 5px;" alt="HTML">`
          break
    case "CSS": lista+=`<img src="./assets/file_type_css_icon_130661.svg" style="width: 30px; margin: 5px;" alt="CSS">` 
          break
    case "JAVASCRIPT": lista+= `<img src="./assets/javascript_icon_130900.svg" style="width: 30px; margin: 5px;" alt="JAVASCRIPT">` 
          break
    case "BOOTSTRAP": lista+= `<img src="./assets/bootstrap_plain_logo_icon_146619.svg" style="width: 30px; margin: 5px;" alt="BOOTSTRAP">`
          break
    case "JQUERY": lista+= `<img src="./assets/jquery_original_wordmark_logo_icon_146447.svg" style="width: 30px; margin: 5px;" alt="JQUERY">`
          break
    case "FIREBASE": lista+= `<img src="./assets/firebase_logo_icon_171157.svg" style="width: 30px; margin: 5px;" alt="FIREBASE">`
          break    
}
  })
return lista
}
document.addEventListener("DOMContentLoaded",fetchData)

//LIBRERIA EMAILJS

const btn = document.getElementById('boton_contacto')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...'

   const serviceID = 'default_service'
   const templateID = 'template_hna3g5c'

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar'
      appendAlert('El mensaje se ha enviado con exito al correo electronico del programador', 'success')
    }, (err) => {
      btn.value = 'Enviar';
      appendAlert('El mensaje no se envio, ocurrio un error', 'danger')
    })
})

//ALERT DE ENVIO DE CORREO EXITOSO
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
  formulario.reset()
  
}

