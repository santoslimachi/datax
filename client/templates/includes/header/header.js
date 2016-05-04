Template.header.helpers({
	getRute:function(){
				return Router.current().url;
			},	
});
// usar {{getRute}}


Template.header.events({ 	
    'click #buttonm2': function(e){     
     	console.log("You pressed the button buttonMenuleft");
     	alert('botonPresionado');
     	$('.ui.sidebar').sidebar('toggle');
     	$('.ui.dropdown').dropdown('show');
		$('.ui.selection').dropdown('show');
		$('.ui.selection.dropdown').dropdown('show');
;
    }
});

Template.header.onRendered(function(){
	$('.ui.dropdown').dropdown();


	/* SECCION BUSCADOR*/
    $('#search_input').hover(function(){
	  $('#search_fa').css({'backgroundColor': '#899CB3'});
	}, function(){
	  $('#search_fa').css({'backgroundColor': '#7188a4'});
	});

	$('#search_form_container').focusin(function(){
	  $('#search_input').addClass('element_active');
	  $('#search_fa').addClass('element_active');
	});

	$('#search_form_container').focusout(function(){
	  $('#search_input').removeClass('element_active');
	  $('#search_fa').removeClass('element_active');
	});

	/* ACTIVO ALAS AYUDAS */
	$('#guide_btn').click(function(){
		  if($(this).hasClass('guide_active')){
		    $(this).removeClass('guide_active');
		    $('.guide_active').removeClass('guide_active');
		    $('header .st0').css({'fill': 'white'});
		    $('header').removeClass('header_guide_active');
		    $('#login_link').removeClass('login_link_guide_active');
		    $('#menu_svg').css({'fill': 'white'});
		    $('#header_menu_title').removeClass('header_title_guide_active');
		    $('.guide_dote').fadeOut();		    
	  	} else {
		    $(this).addClass('guide_active');
		    $('header .st0').css({'fill': '#203568'});
		    $('header').addClass('header_guide_active');
		    $('#login_link').addClass('login_link_guide_active');
		    $('#menu_svg').css({'fill': '#203568'});
		    $('#header_menu_title').addClass('header_title_guide_active');
		    $('.guide_dote').fadeIn();
	  	}
  	});

	/*guias de ayuda*/
	$('.guide_dote').each(function(){
  		var position_my = $(this).data('tp-my');
	  	var position_at = $(this).data('tp-at');
		var adjust = $(this).data('adjust');
		$(this).qtip({
		  	prerender: true,
			content: {
		      	text: $(this).next()
		    	},
		    show: {
		      	event: 'mouseenter'
		    	},
		    hide: {
		     		event: 'mouseleave'
		    	},
		    position: {
			      my: position_my,
			      at: position_at,
			      adjust: {
			        y: adjust
			      	}
		    	}
		  });
	});	

});