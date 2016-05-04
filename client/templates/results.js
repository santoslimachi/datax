

Template.results.helpers({
	getRute:function(){
				return Router.current().url;
			},	
	label: function(){		
				return  Iron.Location.get().path;
			},	
	label_rout: function(){		
				return  "results";
			}	
});

