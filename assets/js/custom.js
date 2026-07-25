function passWord(myHREF) {
	var count = 1;
	var pass1 = prompt('SMB2021 Recordings are password protected. The password can be found in the #general channel in the SMB2021 Slack space. Recordings will be uploaded twice daily.','');
	var password = "SMB2021@UCR";
	var maxattempt = 1;
	 
	while (count < 2) {
		if (pass1==password) {
			window.location.href = myHREF;
			break;
		} else {
			alert("Password incorrect, Please try again.")
		}
		count+=1;
	}
}

function getDateString(date) {
	var minutes=(date.getMinutes()<10?'0':'') + date.getMinutes();
	var hours=date.getHours();
	var tag="am";
	if (hours>12) {
		hours=hours-12;
		tag="pm";
	}
	
	if (hours==12) {
		tag="pm";
	}
	
	if (hours==0) {
		hours = 12;
		tag="am";
	}
	
	return hours+":"+minutes+tag;
}

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}


function getNewOffset(myOffset) {	
	var dt = new Date();
	var tz = dt.getTimezoneOffset(); // minutes
	return (myOffset/60)-tz+(4*60);	
}


// Function
const milliseconds = (h, m, s) => ((h*60*60+m*60+s)*1000);

function getOffset() {
	var hrs = -(new Date().getTimezoneOffset() / 60)
	return hrs;
}

function myFunction(myClass) {
	var myStringArray = ["text-MEPI","text-CDEV","text-EDUC","text-IMMU","text-NEUR","text-MFBM","text-POPD","text-ONCO","text-OTHE"];
	var arrayLength = myStringArray.length;
	
	if (myClass == "all") {
		for (var j = 0; j < arrayLength; j++) {
	    var thisClass = myStringArray[j];
	    var divsToHide = document.getElementsByClassName(thisClass);
		  for(var i = 0; i < divsToHide.length; i++){
			  
			  // make visible
			  divsToHide[i].style.display = "inline";		  
		  }
		}
	} else {
		for (var j = 0; j < arrayLength; j++) {
	    var thisClass = myStringArray[j];
	    var divsToHide = document.getElementsByClassName(thisClass);
	    
	    if (thisClass == myClass) {
		    for(var i = 0; i < divsToHide.length; i++){
				  // make visible
				  divsToHide[i].style.display = "inline";		  
			  }
	    } else {
		    for(var i = 0; i < divsToHide.length; i++){
				  // make invisible
				  divsToHide[i].style.display = "none";		  
			  }
	    }	    
		}
	}
}


function abstractsHide() {
	
	
	// change all "hide-abstracts" -> "show-abstracts", 
	// or vice versa
	
	var divsToShow = document.getElementsByClassName('hide-abstracts');
	
	if (divsToShow.length>0) {
		// show all abstracts
		while (divsToShow.length) {
			var thisDiv = divsToShow[0];
	    thisDiv.classList.remove('hide-abstracts');
	    thisDiv.classList.add('show-abstracts');
	  }		
	  document.getElementById("switch-text").innerHTML = "Click to hide abstracts";
	} else {
		var divsToHide = document.getElementsByClassName('show-abstracts');
		
		// show all abstracts
		while (divsToHide.length) {
			var thisDiv = divsToHide[0];
	    thisDiv.classList.remove('show-abstracts');
	    thisDiv.classList.add('hide-abstracts');
	  }
	  
	  document.getElementById("switch-text").innerHTML = "Click to show abstracts";
	}
}


function timeZone(myZone){
	if (myZone==1) {
		document.querySelector('.timeZone3').style.display = 'none';
		document.querySelector('.timeZone2').style.display = 'none';
    document.querySelector('.timeZone1').style.display = 'block';
	} else if (myZone == 2) {
		document.querySelector('.timeZone3').style.display = 'none';
		document.querySelector('.timeZone1').style.display = 'none';
    document.querySelector('.timeZone2').style.display = 'block';
	} else {
		document.querySelector('.timeZone1').style.display = 'none';
		document.querySelector('.timeZone2').style.display = 'none';
    document.querySelector('.timeZone3').style.display = 'block';
	}
}

/*
function changeTimeZone(myZone) {	
	var divsToShow = document.getElementsByClassName('hide-abstracts');
	
	if (divsToShow.length>0) {
		// show all abstracts
		while (divsToShow.length) {
			var thisDiv = divsToShow[0];
	    thisDiv.classList.remove('hide-abstracts');
	    thisDiv.classList.add('show-abstracts');
	  }		
	  document.getElementById("switch-text").innerHTML = "Click to hide abstracts";
	} else {
		var divsToHide = document.getElementsByClassName('show-abstracts');
		
		// show all abstracts
		while (divsToHide.length) {
			var thisDiv = divsToHide[0];
	    thisDiv.classList.remove('show-abstracts');
	    thisDiv.classList.add('hide-abstracts');
	  }
	  
	  document.getElementById("switch-text").innerHTML = "Click to show abstracts";
	}
}
*/


	