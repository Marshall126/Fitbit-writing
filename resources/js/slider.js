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
        let bibHeight = $('.test').css('font-weight');
        console.log(biHeight);
        $('.bib ol').css({
          display:'inline-block'
        });
        $('.bib').animate({
          width: '80%',
          height: bibHeight
        }, 300);
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

