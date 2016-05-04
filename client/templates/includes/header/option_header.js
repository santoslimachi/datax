Template.optionsHeader.onRendered(function(){
	$('.header_btn').each(function(){
		$(this).qtip({
			prerender: true,
			content: {
				text: $(this).next()
			},
			show: {
				event: 'click'
			}, hide: {
				event: 'click unfocus'
			}, position: {
				my: 'top center',
				at: 'bottom center',
				adjust: {
					y: 13
				}
			}
		});
	});
});



Template.optionsHeader.onRendered(function(){
	$('#dataset_btn').dropdown();
});

