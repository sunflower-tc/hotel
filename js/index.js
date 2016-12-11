
//Swiper配置项
$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
          direction: 'vertical',
          onInit: function(swiper){
              swiperAnimateCache(swiper);
              swiperAnimate(swiper);
          },
          onSlideChangeEnd: function(swiper){
              swiperAnimate(swiper);
          },
      });
});

function setRem() {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth > 750 ? 100 : document.documentElement.clientWidth * 100 / 750) + 'px';
}
function resetRem() {
    setRem();
    document.addEventListener('DOMContentLoaded', function() {
        setRem();
    });
    window.addEventListener('load', function() {
        setTimeout(setRem, 300);
    });
    window.addEventListener('resize', function() {
        setTimeout(setRem, 300);
    });
}
resetRem();
