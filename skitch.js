var skitch = {
			
	/* CODE FOR LOADING ALL CSS AND JS */
				
	initLibs : function initLibs(filename, filetype, callbackFunc){
		 
					 if (filetype=="js"){ //if filename is a external JavaScript file
					  
					 	
					 	/* LOAD JQUERY */

					 	if(filename == "$" || filename == "jquery" || filename == "jQuery"){

					  		
					  		//EXTERNAL:
								
								var callback = function(){
								    $(document).ready(function(){
								         console.log('jquery');
								         callbackFunc();
								    });

								}

								if( typeof jQuery === 'undefined' ){
								    var scr = document.createElement('script');
								    scr.src = 'http://code.jquery.com/jquery-latest.min.js';
								    document.getElementsByTagName('head')[0].appendChild(scr);

								    var timer = setInterval(function(){
								        if( typeof jQuery !== 'undefined' ){
								            clearInterval(timer);
								            callback();

								        }        
								    },100);
								}



					 	}

					 	/* LOAD BootStrap */
					 	
					 	if(filename == "bootstrap"){

					  		
					  		//EXTERNAL:
								
								var callback = function(){
								    $(document).ready(function(){
								         console.log('bootstrap js ');
								         callbackFunc();
								    });

								}

								if( true ){
								    var scr = document.createElement('script');
								    scr.src = 'http://twitter.github.com/bootstrap/assets/js/bootstrap.min.js';
								    document.getElementsByTagName('head')[0].appendChild(scr);

								    var timer = setInterval(function(){
								        if( typeof $().modal == 'function' ){
								            clearInterval(timer);
								            callback();

								        }        
								    },100);
								}



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
								    head.appendChild(link);
								    console.log('bootstrap css');
								}
							

						}




					 }


				},

	/* CODE FOR LOADING WEBFONTS */

	
}

