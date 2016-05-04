
Template.menuHorizontal.onRendered(function(){
  $('.menu.tema').popup({
    popup     : '.tema.popup',
    hoverable : true,
    position  : 'bottom left',
    delay     : {
      show: 300,
      hide: 800
    }
  });

  $('.menu.fuente').popup({
    popup     : '.fuente.popup',
    hoverable : true,
    position  : 'bottom left',
    delay     : {
      show: 300,
      hide: 800
    }
  });

  $('.menu.geografico').popup({
    popup     : '.geografico.popup',
    hoverable : true,
    position  : 'bottom left',
    delay     : {
      show: 300,
      hide: 800
    }
  });

  $('.menu.idioma').popup({
    popup     : '.idioma.popup',
    hoverable : true,
    position  : 'bottom left',
    delay     : {
      show: 300,
      hide: 800
    }
  });

  $('.menu.frec').popup({
    popup     : '.frec.popup',
    hoverable : true,
    position  : 'bottom left',
    delay     : {
      show: 300,
      hide: 800
    }
  });

});

/*
Template.menuHorizontal.onRendered(function(){
	$('.header_menu_link_container').click(function(){
	  $('.header_menu_link_active').removeClass('header_menu_link_active');
	  $(this).addClass('header_menu_link_active');
	});

	$('.header_menu_link_container').each(function(){
	  var position_my = $(this).data('tp-my');
	  var position_at = $(this).data('tp-at');
	  var adjust = $(this).data('adjust');
	  $(this).qtip({
	    prerender: true,
	    content: {
	      text: $(this).next()
	    },
	    events: {
	      hide: function(){
	        $('.header_menu_link_active').removeClass('header_menu_link_active');
	      }
	    },
	    show: {
	      event: 'click'
	    }, hide: {
	      event: 'click unfocus'
	    }, position: {
	      my: position_my,
	      at: position_at,
	      adjust: {
	        y: adjust
	      }
	    }
	  });
	});
});
*/