$(document).ready(function(){
    $('.slider').slick({
        responsive: [
            {
              breakpoint: 890,
              settings: {
                arrows: false,
       
          
              }
            }
        ]
    });
});

$(document).scroll(function(){

    var scrollY = $(document).scrollTop();
    var height = $('.header__row-one').css('height').split("px")[0];

    

    if( scrollY > height ){
        $('.header__row-two').removeClass('static').addClass('fixed');
       
    }
    else if ( scrollY <= height ){
        $('.header__row-two').removeClass('fixed').addClass('static');
    }

    console.log(height);
   
});


$(document).ready(function(){

    var even = $('.box:even').children('.box__section');
    var odd = $('.box:odd').children('.box__section');

    even.append('<div class = "step"></div>');
    odd.append('<div class = "step"></div>');

    $('.step').each(function(e){
        $(this).append("<span>"+(e+1)+"</span>"+"step");
        console.log(this);
    });
    
    
});

$('#burger').click(function(){

    if(!$('#anchor').is(':checked')){
        $('.nav').removeClass('nav-hidden');
        $('.nav__block').show().addClass('open');
    }
    else if($('.nav__block').hasClass('open')){
        $('.nav').addClass('nav-hidden');
        $('.nav__block').removeClass('open');
        
        
    }

});


burger.addEventListener("click", function(){

    chbox = document.querySelector('#anchor:checked') !== null;
   
    if(chbox){

       var burger = document.getElementById('burger');


   
        burger.classList.add('animation');
        
        setTimeout(() => {
         
            burger.classList.remove('animation');
        }, 300);
    }

 
});

