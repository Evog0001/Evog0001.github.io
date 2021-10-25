$(document).ready(function () {
    console.log("ready");
  
    $(".button").click(function () {
      $(".menu").toggleClass("open");
    });
  });

  

  
/* Buttons */

$( document ).ready(function() {
   
  $('.when').click(function() {
      $('.date1').addClass('show');
      $(this).addClass('hide');

      
    });


      $('.date').click(function() {
        $(this).removeClass('show');
        $(this).next().addClass('show');
        
    
  
  });
      $('.date1').click(function() {
          $('.date2').addClass('show');
          $(this).removeClass('show');
  

  });

          $('.date2').click(function() {
              $('.date3').addClass('show');
              $(this).removeClass('show');
  });


              $('.date3').click(function() {
                     $('.date4').addClass('show');
                     $(this).removeClass('show');

  });
                  $('.date4').click(function() {
                      $('.date5').addClass('show');
                      $(this).removeClass('show');

  });
                      $('.date5').click(function() {
                          $('.date6').addClass('show');
                          $(this).removeClass('show');

  });
                          $('.date6').click(function() {
                              $('.date7').addClass('show');
                              $(this).removeClass('show');

  });
                              $('.date7').click(function() {
                                  $('.date8').addClass('show');
                                  $(this).removeClass('show');

  });
                                  $('.date8').click(function() {
                                      $('.spiderweb').addClass('show');
                                      $('.logo1button').addClass('show');
                                      $('.trafficsignbutton').addClass('show');
                                      $('.famouslogobutton').addClass('show');
                                      $(this).removeClass('show');
                                      $('.spiderwebpic').addClass('show');
                                      $('.spiderwebbutton').addClass('show');


  });

  $('.logo1button').click(function() {
    $('.logo1').addClass('show');
    $('.purposelogobutton').addClass('show');
    $('.logo1pic').addClass('show');
    $('.spiderwebpic').removeClass('show');
    $('.trafficsignpic').removeClass('show');
    $('.applelogopic').removeClass('show');
    $('.famouslogopic').removeClass('show');
    $('.mapsymbolspic').removeClass('show');
    $('.purposelogopic').removeClass('show');
  


}); 

$('.spiderbutton').click(function() {
  $('.spiderwebpic').addClass('show');
  $('.logo1pic').removeClass('show');
  $('.trafficsignpic').removeClass('show');
  $('.applelogopic').removeClass('show');
  $('.famouslogopic').removeClass('show');
  $('.mapsymbolspic').removeClass('show');
  $('.purposelogopic').removeClass('show');

  
}); 

  $('.trafficsignbutton').click(function() {
    $('.trafficsign').addClass('show');
    $('.mapsymbolsbutton').addClass('show');
    $('.trafficsignpic').addClass('show');
    $('.logo1pic').removeClass('show');
    $('.spiderwebpic').removeClass('show');
    $('.applelogopic').removeClass('show');
    $('.famouslogopic').removeClass('show');
    $('.mapsymbolspic').removeClass('show');
    $('.purposelogopic').removeClass('show');


}); 

  $('.famouslogobutton').click(function() {
    $('.famouslogo').addClass('show');
    $('.famouslogopic').addClass('show');
    $('.trafficsignpic').removeClass('show');
    $('.logo1pic').removeClass('show');
    $('.spiderwebpic').removeClass('show');
    $('.applelogopic').removeClass('show');
    $('.mapsymbolspic').removeClass('show');
    $('.purposelogopic').removeClass('show');


}); 

  $('.mapsymbolsbutton').click(function() {
    $('.mapsymbols').addClass('show');
    $('.mapsymbolspic').addClass('show');
    $('.famouslogopic').removeClass('show');
    $('.trafficsignpic').removeClass('show');
    $('.logo1pic').removeClass('show');
    $('.spiderwebpic').removeClass('show');
    $('.applelogopic').removeClass('show');
    $('.purposelogopic').removeClass('show');


}); 

$('.purposelogobutton').click(function() {
  $('.purposelogo').addClass('show');
  $('.purposelogopic').addClass('show');
  $('.applelogobutton').addClass('show');
  $('.famouslogopic').removeClass('show');
  $('.trafficsignpic').removeClass('show');
  $('.logo1pic').removeClass('show');
  $('.spiderwebpic').removeClass('show');
  $('.applelogopic').removeClass('show');

}); 

$('.applelogobutton').click(function() {
  $('.applelogo').addClass('show');
  $('.applelogo').addClass('show');
  $('.applelogopic').addClass('show');
  $('.applelogobutton').removeClass('show');
  $('.purposelogopic').removeClass('show');
  $('.famouslogopic').removeClass('show');
  $('.trafficsignpic').removeClass('show');
  $('.logo1pic').removeClass('show');
  $('.spiderwebpic').removeClass('show');



}); 


});

/* Images */




/* Background Animation */

const el = document.querySelector("#body");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});