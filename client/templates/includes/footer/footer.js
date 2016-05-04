Template.footer.onRendered(function(){

	$('#above_footer_toogle_btn_container').trigger('click');


	  $('.af_slider_wrapper').marquee('af_slider');/*.mouseover(function () {
	    $(this).trigger('stop');
	  }).mouseout(function () {
	    $(this).trigger('start');
	  });
	  */

});

Template.footer.events({ 

//$('#above_footer_toogle_btn_container').click(function(){

 'click #above_footer_toogle_btn_container': function(e){    
 	var  above_footer_toogle_btn_container = $('#above_footer_toogle_btn_container');

    var targetHeight = $('#above_footer_wrapper').outerHeight();
    if(above_footer_toogle_btn_container.hasClass('af_visible')){
      var top = (targetHeight - 45) * -1;
      above_footer_toogle_btn_container.removeClass('af_visible');
      $('#above_footer_wrapper').css({'bottom': top});
      $('#footer_toogle_svg').css({'transform': 'rotate(180deg)'});
    } else {
      var top = targetHeight - 45;
      $('#above_footer_wrapper').css({'bottom': top});
      above_footer_toogle_btn_container.addClass('af_visible');
      $('#footer_toogle_svg').css({'transform': 'rotate(0deg)'});
    }
  },

});