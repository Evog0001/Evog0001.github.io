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
          $('.date1').removeClass('show');
  

  });

          $('.date2').click(function() {
              $('.date3').addClass('show');
              $('.date2').removeClass('show');
  });


              $('.date3').click(function() {
                     $('.date4').addClass('show');
                     $('.date3').removeClass('show');

  });
                  $('.date4').click(function() {
                      $('.date5').addClass('show');
                      $('.date4').removeClass('show');

  });
                      $('.date5').click(function() {
                          $('.date6').addClass('show');
                          $('.date5').removeClass('show');

  });
                          $('.date6').click(function() {
                              $('.date7').addClass('show');
                              $('.date6').removeClass('show');

  });
                              $('.date7').click(function() {
                                  $('.date8').addClass('show');
                                  $('.date7').removeClass('show');

  });
                                  $('.date8').click(function() {
                                      $('.spiderweb').addClass('show');
                                      $('.logo1button').addClass('show');
                                      $('.trafficsignbutton').addClass('show');
                                      $('.famouslogobutton').addClass('show');
                                      $('.date8').removeClass('show');

  });

  $('.logo1button').click(function() {
    $('logo1').addClass('show');
  
}); 

  $('.trafficsignbutton').click(function() {
    $('trafficsign').addClass('show');

}); 


$('.famouslogobutton').click(function() {
  $('famouslogo').addClass('show');

}); 


});


/* Background Animation */

const el = document.querySelector("#body");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});