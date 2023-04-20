(function(){
 
   /* -------------------------------------------------------- Variable du carrousel */
   let carrousel  = document.querySelector(".carrousel")
   let carrousel__x = document.querySelector(".carrousel__x")
   let carrousel__figure = document.querySelector(".carrousel__figure")
   let carrousel__form = document.querySelector(".carrousel__form")
   
   /* -------------------------------------------------------- Variable de la galerie */
   let galerie = document.querySelector(".wp-block-gallery")
   let galerie__img = galerie.querySelectorAll("img")
   // console.log("galerie__img: " + galerie__img.length)
   // console.log(carrousel.tagName)
   /** ---------------------------------------------------- Positionnement de l'img active du carrousel */
   
   let index = 0 
   let dernier__index = -1
   let position = 0 // permet d'indexer les images de la galerie et 


   /** 
    * ajouter_img_dans_carrousel
    * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
    */
   
   for (const elm of galerie__img)
   {
    elm.dataset.index = position
    elm.addEventListener('mousedown',function(){

      if(carrousel.classList.contains('carrousel--activer') == false){
        carrousel.classList.add('carrousel--activer')
      }
      index = this.dataset.index
      afficher_image(index)                      
      console.log(index)
    })

    creation_img_carrousel(elm)
    creation_radio_carrousel()
   }
 

   
   
   /* ----------------------------------------------------  fermer boîte modale */
   carrousel__x.addEventListener('mousedown', function(){
       console.log('fermer la boîte modale')
       carrousel.classList.remove('carrousel--activer')

   })

 
   function creation_img_carrousel(elm){

     //console.log(elm.getAttribute('src'))
     let img = document.createElement('img')
     //img.setAttribute('src', elm.getAttribute('src'))
     img.src = elm.src
     img.classList.add('carrousel__img')
     //console.log (img.getAttribute('src'))
     carrousel__figure.appendChild(img)
     
   }

   /**
    * Création d'un radio-bouton
    */
   
   function creation_radio_carrousel(){

   let rad = document.createElement('input')
   console.log(rad.tagName)
   rad.setAttribute('type', 'radio')
   rad.setAttribute('name', 'carrousel__rad')
   rad.classList.add('carrousel__rad')
   rad.dataset.index = position // permet d'asscocier chacun des radio bouton a l'image du carrousel 
   position++ // incrémentation de 1 
   carrousel__form.appendChild(rad)

   /** afficher image / Transition */

   rad.addEventListener('mousedown', function(){
    afficher_image(index)
    console.log(this.dataset.index)
    index = this.dataset.index
   })
   }

   function afficher_image(index){

    if(dernier__index != -1){
      //carrousel__figure.children[dernier__index].style.opacity = 0
      carrousel__figure.children[dernier__index].classList.remove('carrousel__img--activer')
      //carrousel__form.children[dernier__index].checked = false // A completer ...
    } 
    //carrousel__figure.children[this.dataset.index].style.opacity = 1
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
    
    dernier__index = index


   }

   /** Permet de vérifier si la classe "carrousel--activer se trrouve dans la liste des classes du carrousel"
    * carrousel.classList.contain('carrousel--activer')
    */


   })()