const icono = document.querySelector('.pestana')
const nav = document.querySelector('.navegacion-paginas-web')


icono.addEventListener('click', ()=>{
    nav.classList.toggle("aument")
})

window.addEventListener('click', e =>{
    if(nav.classList.contains('aument') 
        && e.target != menu && e.target != icono){
        nav.classList.toggle("aument ")
    }
})