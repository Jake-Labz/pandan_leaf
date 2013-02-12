$(document).ready(function() {
    $('#logo').click(function() {
        $('#menu, #about, #contact').fadeOut();
  })
    $('#menu_a').click(function() {
    $('#menu').fadeIn();
  });
    $('.close').click(function() {
        $('#menu, #about, #contact').fadeOut();
  })

    $('#menu_starters').click(function() {
    	if ($("#mains_nav").is(":hidden")) {
    		$('#start_nav').slideDown(400);
    	} else {
    $('#start_nav').delay(600).slideDown(400);
    $('#mains_nav, .ma, .nd, .ds').slideUp(400);
		}
	$('.m_menu').removeClass('selected');
  });
    $('#menu_mains').click(function() {
         if ($("#start_nav").is(":hidden")) {
            $('#mains_nav').slideDown(400);
            $('s_menu').removeClass('selected');
        } else {
    $('#mains_nav').delay(600).slideDown(400);
    $('#start_nav, .st, .nd, .ds').slideUp(400);
    $('.s_menu').removeClass('selected');
        }
  });
    $('.menu').click(function() {
        $('.menu').removeClass('selected');  
        $(this).addClass('selected');
  });
    $('.s_menu, .m_menu').click(function() {
        $('.s_menu, .m_menu').removeClass('selected');  
        $(this).addClass('selected');
  });
    $('#menu_noodles, #menu_desserts').click(function() {
    $('#mains_nav, #start_nav, .menu_list').slideUp(250);
  });
     $('#menu_st_meat').click(function() {
    $('#starters_meat').slideDown(400);
  });
    $('#menu_ma_curries').click(function() {
        if ($("#mains_meat, #mains_seafood, #mains_veg").is(":hidden")) {
            $('#mains_curries').slideDown(400);
        } else {
            $('#mains_curries').delay(600).slideDown(400);
            $("#mains_meat, #mains_seafood, #mains_veg").slideUp(400);
        }
  });
     $('#menu_ma_meat').click(function() {
        if ($("#mains_curries, #mains_seafood, #mains_veg").is(":hidden")) {
            $('#mains_meat').slideDown(400);
        } else {
            $('#mains_meat').delay(600).slideDown(400);
            $("#mains_curries, #mains_seafood, #mains_veg").slideUp(400);
        }
  });
});      






 



    




   


   


