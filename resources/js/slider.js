$(document).ready(function(){
    //slider stuff
    $('.content').slick({
      dots:false,
      slidesToScroll:1,
      speed:300,
      slidesToShow:1,
      arrows: false,
      infinite:true, 
      autoplay:true
    });
    //animating bibliography
    let big = false;
    $('.bib').click(function(){
      if(big==false){
        $('.bib ol').css({
          display:'inline-block'
        });
        switch($('.test').css('display')){
          case 'flex':
              $('.bib').animate({
              width: '80%',
              height: '600px'
            }, 300);
          break;
          case 'block':
            $('.bib').animate({
              width: '80%',
              height: '700px'
            }, 300);
          break;
          case 'inline':
            $('.bib').animate({
              width: '80%',
              height: '800px'
            }, 300);
          break;
          default:
            $('.bib').animate({
              width: '80%',
              height: '500px'
            }, 300);
          break;
        }
        big = true;
      }else{
        $('.bib').animate({width: '400px', height: '50px'}, 300);
        $('.bib ol').css({
          display:'none'
        })
        big = false;
      }
    })
});

