const hamburguer = document.querySelector('.pestana')
const menu = document.querySelector('.navegacion-paginas-web')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("aument")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('aument') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("aument ")
    }
})