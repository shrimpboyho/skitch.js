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

	/* Run a string script */

	skitch.runScript('js',"alert('derp');$('#jank2').modal('show');",function(){
		console.log("The script just ran.");
	});
	skitch.runScript('c',"#include <jquery>\nint main(){\njews;\n}",function(){
		console.log("The c script just ran.");
	});

	/* INJECT an IFRAME */

	skitch.injectHTML('bunz',"<textarea></textarea>",function(){

		console.log("Injection worked.");

	});

}



