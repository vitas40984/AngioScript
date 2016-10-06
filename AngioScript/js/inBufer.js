copyDescription.onclick = function() {
	var range = document.createRange();
	range.selectNode(document.getElementById('descriptionOut'));
	window.getSelection().addRange(range);
	try {  
	    var successful = document.execCommand('copy');  
	    var msg = successful ? 'successful' : 'unsuccessful';  
	    console.log('Copy email command was ' + msg);  
	  } catch(err) {  
	    console.log('Oops, unable to copy');  
	  }  
	window.getSelection().removeAllRanges(); 
}

copyConclusion.onclick = function() {
	var range = document.createRange();
	range.selectNode(document.getElementById('conclusionOut'));
	window.getSelection().addRange(range);
	try {  
	    var successful = document.execCommand('copy');  
	    var msg = successful ? 'successful' : 'unsuccessful';  
	    console.log('Copy email command was ' + msg);  
	  } catch(err) {  
	    console.log('Oops, unable to copy');  
	  }  
	window.getSelection().removeAllRanges(); 
}
