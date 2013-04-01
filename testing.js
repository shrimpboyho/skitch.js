



/* Initialize all external resources */
skitch.initLibs("jquery","js",function() {

	skitch.initLibs('bootstrap','js',function(){

		skitch.initLibs('bootstrap','css',function(){

			myCodeStart();

		});

	});


});





/* Begin Code */

function myCodeStart(){

	$("#jank").unbind('click').click(function(){

		alert("Everything's loaded!")
		$("#jank2").modal('show');

	});
	
	

}

