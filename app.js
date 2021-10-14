// RIP DRY 


var carousel = document.querySelector('.carousel');
//
const cellCount = 12;
var selectedIndex = 0;
// toutes les carte 
var un = document.querySelector('.un');
var deux = document.querySelector('.deux'); 
var trois = document.querySelector('.trois');
var quatre = document.querySelector('.quatre');
var cinque = document.querySelector('.cinque'); 
var six = document.querySelector('.six');
var sept = document.querySelector('.sept');
var huit = document.querySelector('.huit');
var neuf = document.querySelector('.neuf');
var dix = document.querySelector('.dix');
var onze = document.querySelector('.onze');
var douze = document.querySelector('.douze');
//tous les  boutons 
var  buttonAfficher= document.querySelector('.afficher');
var  buttonCacher= document.querySelector('.cacher');
var  buttonAfficher2= document.querySelector('.afficher2');
var  buttonCacher2= document.querySelector('.cacher2');
var  buttonAfficher3= document.querySelector('.afficher3');
var  buttonCacher3= document.querySelector('.cacher3');
var  buttonAfficher4= document.querySelector('.afficher4');
var  buttonCacher4= document.querySelector('.cacher4');
var  buttonAfficher5= document.querySelector('.afficher5');
var  buttonCacher5= document.querySelector('.cacher5');
var  buttonAfficher6= document.querySelector('.afficher6');
var  buttonCacher6= document.querySelector('.cacher6');
var  buttonAfficher7= document.querySelector('.afficher7');
var  buttonCacher7= document.querySelector('.cacher7');
var  buttonAfficher8= document.querySelector('.afficher8');
var  buttonCacher8= document.querySelector('.cacher8');
var  buttonAfficher9= document.querySelector('.afficher9');
var  buttonCacher9= document.querySelector('.cacher9');
var  buttonAfficher10= document.querySelector('.afficher10');
var  buttonCacher10= document.querySelector('.cacher10');
var  buttonAfficher11= document.querySelector('.afficher11');
var  buttonCacher11= document.querySelector('.cacher11');
var  buttonAfficher12= document.querySelector('.afficher12');
var  buttonCacher12= document.querySelector('.cacher12');

//tous les Blocs notes 
var blocNote= document.querySelector('.Bloc-Note')
var blocNote2= document.querySelector('.Bloc-Note2')
var blocNote3= document.querySelector('.Bloc-Note3')
var blocNote4= document.querySelector('.Bloc-Note4')
var blocNote5= document.querySelector('.Bloc-Note5')
var blocNote6= document.querySelector('.Bloc-Note6')
var blocNote7= document.querySelector('.Bloc-Note7')
var blocNote8= document.querySelector('.Bloc-Note8')
var blocNote9= document.querySelector('.Bloc-Note9')
var blocNote10= document.querySelector('.Bloc-Note10')
var blocNote11= document.querySelector('.Bloc-Note11')
var blocNote12= document.querySelector('.Bloc-Note12')
//card.classList.toggle('is-Clicked')
function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-746px) rotateY(' + angle + 'deg)';
  console.log(angle,selectedIndex)
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
// janvier
buttonAfficher.addEventListener('click',()=>{
  un.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3;' ///  il  faut que je test la propriétée Css blur (je ne sais plus vraiment le nom) avec translateZ
})
buttonCacher.addEventListener('click',()=>{
  un.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1'
})
//fevrier
buttonAfficher2.addEventListener('click',()=>{
  deux.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote2.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher2.addEventListener('click',()=>{
  deux.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1'
})
//mars
buttonAfficher3.addEventListener('click',()=>{
  trois.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote3.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher3.addEventListener('click',()=>{
  trois.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1'
})
//avril
buttonAfficher4.addEventListener('click',()=>{
  quatre.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote4.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher4.addEventListener('click',()=>{
  quatre.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//mai
buttonAfficher5.addEventListener('click',()=>{
  cinque.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote5.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher5.addEventListener('click',()=>{
  cinque.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//juin
buttonAfficher6.addEventListener('click',()=>{
  six.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote6.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher6.addEventListener('click',()=>{
  six.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//juillet
buttonAfficher7.addEventListener('click',()=>{
  sept.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote7.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher7.addEventListener('click',()=>{
  sept.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//août
buttonAfficher8.addEventListener('click',()=>{
  huit.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote8.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher8.addEventListener('click',()=>{
  huit.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//septembre
buttonAfficher9.addEventListener('click',()=>{
  neuf.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote9.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher9.addEventListener('click',()=>{
  neuf.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//octobre
buttonAfficher10.addEventListener('click',()=>{
  dix.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote10.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher10.addEventListener('click',()=>{
  dix.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//novembre
buttonAfficher11.addEventListener('click',()=>{
  onze.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote11.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher11.addEventListener('click',()=>{
  onze.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;'
})
//decembre
buttonAfficher12.addEventListener('click',()=>{
  douze.style.cssText = 'height:300px; width:450px; transition: all 0.5s;transform: translateY(180%) translateX(-35px)';
  blocNote12.style.cssText='width:100% ;height:100% ;background-color:#FDF6E3'
})
buttonCacher12.addEventListener('click',()=>{
  douze.style.cssText ='transition: all 1s ;width:100% ;height:100%;z-index:-1;' 
})