
  //funciones para las pestañas
  $(window).scroll(function(){

    if($('#main_section3').length) {
      if($(window).scrollTop() > ( $('#main_section3').offset().top - 45 )){
        $('#s3_title_wrapper').addClass('s3_title_wrapper_fixed');
        $('#section3_main_title').addClass('section3_main_title_fixed');
      } else {
        $('#s3_title_wrapper').removeClass('s3_title_wrapper_fixed');
        $('#section3_main_title').removeClass('section3_main_title_fixed');
      }
    }
    
    if($('#main_section2').length) {
      if($(window).scrollTop() > ( $('#main_section2').offset().top - 45 )){
        $('#s2_title_wrapper').addClass('s2_title_wrapper_fixed');
        $('#section2_main_title').addClass('section2_main_title_fixed');
      } else {
        $('#s2_title_wrapper').removeClass('s2_title_wrapper_fixed');
        $('#section2_main_title').removeClass('section2_main_title_fixed');
      }
    }

    if($(window).scrollTop() > 65){

      // if($('#guide_btn').hasClass('guide_active')){
      //   $('#guide_btn').trigger('click');
      // }

      $('#header_separator').show();
      $('header').css({'position': 'fixed', 'top': '-65px' });
      $('#main_content').css({'position': 'relative', 'top': '115px'});
      $('#main_menu_link').addClass("main_menu_fixed");
      // $('#guide_btn_container').fadeOut(300);
      $('#header_main_title1_container').addClass('header_title_fixed');
      $('#hsection1_main_title').addClass('hsection_title_fixed');
      $('#header_menu_container').fadeOut(300, function(){
        $('#brand_link').addClass('brand_link_fixed');
        $('#login_link').addClass('login_link_fixed');
        $('.header_btn').addClass('header_btn_fixed');
        $('#haw_left_border').addClass('haw_left_border_fixed');
        $('#dataset_btn').addClass('dataset_btn_fixed');
        $('#guide_btn_container').addClass('guide_btn_container_fixed');
        $('#guide_btn').addClass('guide_btn_fixed');
        // $('#search_form_container').addClass('search_form_container_fixed');
        $('#search_input').addClass('search_input_fixed');
        $('#search_submit_btn').addClass('search_submit_btn_fixed');
        $('#datapoint_guide_dote').addClass('datapoin_guide_dote_fixed');
        $('#dataset_guide_dote').addClass('dataset_guide_dote_fixed');
        $('#db_guide_dote').addClass('db_guide_dote_fixed');
      });
    } else {
      $('#header_separator').hide();
      $('header').css({'position': 'relative', 'top': '0px' });
      $('#main_content').css({'position': 'relative', 'top': '0px'});
      $('#main_menu_link').removeClass("main_menu_fixed");
      $('#brand_link').removeClass('brand_link_fixed');
      $('#login_link').removeClass('login_link_fixed');
      $('.header_btn').removeClass('header_btn_fixed');
      $('.haw_left_border_fixed').removeClass('haw_left_border_fixed');
      $('#dataset_btn').removeClass('dataset_btn_fixed');
      // $('#search_form_container').removeClass('search_form_container_fixed');
      $('#search_input').removeClass('search_input_fixed');
      // $('#guide_btn_container').fadeIn(500);
      $('#header_menu_container').fadeIn(500);
      $('#header_main_title1_container').removeClass('header_title_fixed');
      $('#hsection1_main_title').removeClass('hsection_title_fixed');
      $('.search_submit_btn_fixed').removeClass('search_submit_btn_fixed');
      $('.guide_btn_container_fixed').removeClass('guide_btn_container_fixed');
      $('.guide_btn_fixed').removeClass('guide_btn_fixed');
      $('.datapoin_guide_dote_fixed').removeClass('datapoin_guide_dote_fixed');
      $('.dataset_guide_dote_fixed').removeClass('dataset_guide_dote_fixed');
      $('.db_guide_dote_fixed').removeClass('db_guide_dote_fixed');
    }
  });

var controller = new ScrollMagic.Controller();

if ($('#main_section2').length) {
  new ScrollMagic.Scene({
    triggerElement: '#main_section2',
    triggerHook: 0.5
  })
  .addTo(controller)
  .on('enter', function(){
    activeLeftLink(2);
  })
  .on('leave', function(){
    activeLeftLink(1);
  });
}

if ($('#main_section3').length) {
  new ScrollMagic.Scene({
    triggerElement: '#main_section3',
    triggerHook: 0.5
  })
  .addTo(controller)
  .on('enter', function(){
    activeLeftLink(3);
  })
  .on('leave', function(){
    activeLeftLink(2);
  });
}
