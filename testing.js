



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

	$("#jank").click(function(){alert("Everything's loaded!")});

}