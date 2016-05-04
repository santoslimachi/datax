//buttonLeftMenu.js

Template.buttonLeftMenu.events({ 	
    'click #buttonmainmenu': function(e){     
     	console.log("You pressed the button buttonMenuleft");
     	//alert('botonPresionado');
     	$('#leftMainMenu.ui.sidebar').sidebar('toggle');
;
    }
});
