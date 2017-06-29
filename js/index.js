$(document).ready(function() {

  $('body').touchScroll();

  checkWidthAndLoadAccordion();

  Accordion();
});

$(window).resize(function() {
    checkWidthAndLoadAccordion();
});

      window.onscroll = function() {
          onScroll();
      };

      function onScroll() {
          var scrollAmount = $(window).scrollTop();

          if (scrollAmount > 10) {

              $('body').addClass('hello-hidden');

          } else {

              $('body').removeClass('hello-hidden');
          }
      };

      elem = document.getElementById('main-wrap');
        if (elem.addEventListener) {
          if ('onwheel' in document) {

          elem.addEventListener("wheel", onWheel);
          } else if ('onmousewheel' in document) {

          elem.addEventListener("mousewheel", onWheel);
          } else {

          elem.addEventListener("MozMousePixelScroll", onWheel);
          }
        } else {
          elem.attachEvent("onmousewheel", onWheel);
        }

      function onWheel(e) {
        e = e || window.event;

          if(e.deltaY > 0){
            $('body').addClass('hello-hidden');
          } else {
            $('body').removeClass('hello-hidden');
        }
      }

      $.fn.touchScroll = function(){
        var startPos = [],
            endPos = [];

        $(document).on('touchstart','body', function(event) {
          $('.preambule').addClass('druggin');
          var e = event.originalEvent;
          startPos[0] =  e.touches[0].pageX;
          startPos[1] = e.touches[0].pageY;
        });

        $(document).on('touchmove','body ', function(event) {

          var e = event.originalEvent;
          var offset =Math.abs(e.touches[0].pageY - startPos[1]) *100/$('body').height();

          body_w = $('body').width();
          endPos[0] =  e.touches[0].pageX;
          endPos[1] = e.touches[0].pageY;

          if($('body').hasClass('hello-hidden')){
            $('.preambule').css('left', '-' + offset +'%');
          } else {
            $('.preambule').css('left', '-' + (100 - offset) +'%');
          }

        });

        $(document).on('touchend','body', function(event) {
          if(endPos[0] > startPos[0]){
            $('body').addClass('hello-hidden');
          } else {
            $('body').removeClass('hello-hidden');
          }
            $('.preambule').removeClass('druggin');
            $('.preambule').css('left','');
        });
      };

      var lang = {
          "html": "91%",
          "css": "85%",
          "javascript": "35%",
          "git": "65%",
          "gr": "55%"
        };

        var multiply = 4;

        $.each( lang, function( language, pourcent) {

          var delay = 700;

          setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
          },delay*multiply);

          multiply++;

        });


function checkWidthAndLoadAccordion() {
    if($(window).width() < 767) {

        $('.title').addClass('acc-btn');
        $('.accordion').addClass('acc-content');
        $('.accordion').fadeOut(800);
      }else{

        $('.title').removeClass('acc-btn');
        $('.accordion').removeClass('acc-content');
        $('.accordion').fadeIn(800);
      }
};
function Accordion() {
  $('.acc-btn').click(function(e){
    e.preventDefault();
    if($(this).next('.acc-content').is(':visible')){
      $('.acc-content').hide(800);
    }else{
      $('.acc-content').hide(800);
      $(this).next('.acc-content').toggle(800);
    }
  });
};


if('ontouchstart' in window == false){
  $('.hello').mousemove(function(e){
    var moveX = -1*(e.pageX * -1 / 25);
    var moveY = (e.pageY * -1 / 25);

    //$('.outer').css('background-position', ($('.outer').width()/2+moveX)+'px ' + moveY + 'px');
    $('.outer').css('background-position-x', 'calc(50% - '+moveX+'px) ');
    $('.outer').css('background-position-y', moveY + 'px');
  });
}


// $(document).ready(function() {
//    $(".bg-hello").tilt({
//     speed: 500,
//     perspective: 5000,
//      glare: true,
//      maxGlare: 0.10,
//      reset: false
//   });
// });