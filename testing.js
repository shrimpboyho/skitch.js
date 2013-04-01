



/* Initialize all external resources */
skitch.initLibs("jquery","js",function() {

		myCodeStart();	

});


skitch.initLibs('bootstrap','css',function(){

	

});

skitch.initLibs('bootstrap','js',function(){

	

});

/* Begin Code */

function myCodeStart(){

	$("#jank").unbind('click').click(function(){

		alert("Everything's loaded!")
		$("#jank2").modal('show');

	});
	
	

}

