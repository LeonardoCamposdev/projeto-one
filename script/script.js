// ANIMAÇÃO AO START DO SITE
window.SimpleAnime=class{constructor(){this.items=document.querySelectorAll("[data-anime]"),this.init()}animateItems(){this.items.forEach(t=>{const e=Number(t.getAttribute("data-anime"));isNaN(e)||setTimeout(()=>{t.classList.add("anime")},e)})}handleVisibility(){void 0!==document.visibilityState?"visible"===document.visibilityState&&this.animateItems():this.animateItems()}init(){this.handleVisibility=this.handleVisibility.bind(this),this.handleVisibility(),document.addEventListener("visibilitychange",this.handleVisibility)}}

if(window.SimpleAnime){
  new SimpleAnime();
}

// ANIMAÇÃO AO SCROLL
function initAnimacaoScroll(){
const divScroll = document.querySelectorAll('.js-scroll');

if(divScroll.length){
  const windowMetade = window.innerHeight *0.6;

  function animaScroll(){
    divScroll.forEach((div) =>{
      const divTop = div.getBoundingClientRect().top - windowMetade;
      if(divTop < 0){
        div.classList.add('ativo');
      } else{
        div.classList.remove('ativo');
      }
    });
  };
  
  window.addEventListener('scroll', animaScroll);
  }
};
initAnimacaoScroll();

