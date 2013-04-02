var skitch = {
			
	/* CODE FOR LOADING ALL CSS AND JS */
				
	initLibs : function initLibs(filename, filetype, callbackFunc){
		 
					 if (filetype=="js"){ //if filename is a external JavaScript file
					  
					 	
					 	/* LOAD JQUERY */

					 	if(filename == "$" || filename == "jquery" || filename == "jQuery"){

					  		
					  		//EXTERNAL:
								
								 // adding the script tag to the head as suggested before
								   var head = document.getElementsByTagName('head')[0];
								   var script = document.createElement('script');
								   script.type = 'text/javascript';
								   script.src = 'http://code.jquery.com/jquery-latest.min.js';

								   // then bind the event to the callback function 
								   // there are several events for cross browser compatibility
								   script.onreadystatechange = callbackFunc;
								   script.onload = callbackFunc;

								   // fire the loading
								   head.appendChild(script);

								   console.log('jquery js');

					 	}

					 	/* LOAD BootStrap */
					 	
					 	if(filename == "bootstrap"){

					  		
					  		//EXTERNAL:
								
							   // adding the script tag to the head as suggested before
							   var head = document.getElementsByTagName('head')[0];
							   var script = document.createElement('script');
							   script.type = 'text/javascript';
							   script.src = 'http://twitter.github.com/bootstrap/assets/js/bootstrap.min.js';

							   // then bind the event to the callback function 
							   // there are several events for cross browser compatibility
							   script.onreadystatechange = callbackFunc;
							   script.onload = callbackFunc;

							   // fire the loading
							   head.appendChild(script);

							   console.log('bootstrap js');



					 	}

					 	/* LOAD EXTERNAL JS FILE */

					 	

					 }

					 
					 else if (filetype=="css"){ //if filename is an external CSS file
					  	


					  	if(filename == "bootstrap" ){
						  	
						  	//EXTERNAL:
								var docy = document; // shortcut
								var cssId = 'myCss';  // you could encode the css path itself to generate id..
								if (!docy.getElementById(cssId))
								{
								    var head  = docy.getElementsByTagName('head')[0];
								    var link  = docy.createElement('link');
								    link.id   = cssId;
								    link.rel  = 'stylesheet';
								    link.type = 'text/css';
								    link.href = 'http://twitter.github.com/bootstrap/assets/css/bootstrap.css';
								    link.media = 'all';
								    

								    link.onreadystatechange = callbackFunc;
							   		link.onload = callbackFunc;

								    head.appendChild(link);
								    console.log('bootstrap css');
								}
							

						}




					 }


				},

	/* CODE FOR LOADING STRING SCRIPTS */

	runScript : function runScript(type,code,callbackFunc){
		
		if(type=="js"){

			// EXECUTE JS
								
				var compactCode = new Function (code); 
				
				compactCode();  

				console.log('ran some stringed code');	
				
				callbackFunc();

		}

		if(type=="c"){

			// TRANSLATE AND EXECUTE C CODE
								
				var directives = code.replace(/^#include\s+$<jquery>/,"skitch.initLibs('jquery','js',function(){\nmain();\n}\n);");
				directives = code.replace(/^#include\s+$<bootstrapjs>/,"skitch.initLibs('bootstrap','js',function(){\nmain();\n}\n);");
				var main = directives.replace('int main(){','function main(){');
				//var otherfunctions = main.replace();

				console.log(main);
				callbackFunc();
		}
	},
	
	/* IFRAME CONTROL ELEMENTS */

	injectHTML : function injectHTML(id,code,callbackFunc){

		mydoc = document.getElementById(id).contentWindow.document;
		mydoc.open();
		mydoc.write(code); 
		mydoc.close();
		callbackFunc();
	},
	
}

