(function(){
console.log('Début du carrousel')
let bouton = document.querySelector(".carrousel__ouvrir")
let carrousel = document.querySelector(".carrousel")
let carrousel__x = document.querySelector(".carrousel__x")
let galerie = document.querySelector(".galerie")
let galerie__img = galerie.querySelectorAll('img')
//console.log("Nombre image: ",galerie__img.length)
//consolge.log(carrousel.tagName)

/*** ================================================== Ouvir la boite modale */
bouton.addEventListener('mousedown', function(){
    console.log('ouvrir la boite modale')
    carrousel.classList.add('carrousel--activer')
    ajouter_img_dans_carrousel()
})

/*** ================================================== Fermer la boite modale */
carrousel__x.addEventListener('mousedown', function(){
    console.log('ouvrir la boite modale')
    carrousel.classList.remove('carrousel--activer')
})

/**
 * ajouter_img_dans_carrousel()
 * Ajouter l'ensembel des images de la galerie dans la boite modale carrousel
 */

function ajouter_img_dans_carrousel(){

for( const elm of galerie__img){

    let img = document.createElement('img')
    img.setAttribute('src', elm.getAttribute('src'))
    
    //console.log(elm.getAttribute('src'))
    console.log(img.getAttribute('src'))
}

}


})()