var skitch = {
			
	
				
	initLibs : function initLibs(filename, filetype){
		 
					 if (filetype=="js"){ //if filename is a external JavaScript file
					  
					 	if(filename == "$" || filename == "jquery" || filename == "jQuery"){

					  		
					  		//EXTERNAL:
								
								var callback = function(){
								    $(document).ready(function(){
								         console.log('jquery');
								         loadReady();
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

					 	else{

					 		var fileref=document.createElement('script');
					  		fileref.setAttribute("type","text/javascript");
					  		fileref.setAttribute("src", filename);
					 	}

					 }

					 else if (filetype=="css"){ //if filename is an external CSS file
					  	


					  	if(filename == "bootstrap" ){
						  	var fileref=document.createElement("link");
						  	fileref.setAttribute("rel", "stylesheet");
						  	fileref.setAttribute("type", "text/css");
						  	fileref.setAttribute("href", "http://twitter.github.com/bootstrap/assets/js/bootstrap.min.js");
						}

						else{

					 		var fileref=document.createElement("link");
						  	fileref.setAttribute("rel", "stylesheet");
						  	fileref.setAttribute("type", "text/css");
						  	fileref.setAttribute("href", filename);
					 	}



					 }


					 if (typeof fileref!="undefined"){
					  document.getElementsByTagName("head")[0].appendChild(fileref);
					}

				},
}

