var tdList = document.querySelectorAll('td');
tdList[0].addEventListener('click',showmsg0);
function showmsg0(e){
	document.getElementById("tbl").style.background="red";
}

tdList[1].addEventListener('click',showmsg1);
function showmsg1(e){
	var today = new Date();    
    var year = today.getFullYear();
    var month = today.getMonth()+1;       
    var day = today.getDay()+1;
    var date;
    if(month<10&&day<10){        
    	date = (year + "-0" + month + "-0" + day);
    }
    if(month>10&&day<10){
    	date = (year + "-" + month + "-0" + day);
    }
    if(month<10&&day>10){
    	date = (year + "-0" + month + "-" + day);
    }
    if(month>10&&day>10){
    	date = (year + "-" + month + "-" + day);
    }
    document.getElementById("td2").innerHTML=date;
}

tdList[2].addEventListener('click',showmsg2);
function showmsg2(e){
	document.getElementById("tbl").insertRow(2);
}

tdList[3].addEventListener('click',showmsg3);
function showmsg3(e){
	document.getElementById("tbl").deleteRow(1);
}

tdList[4].addEventListener('click',showmsg4);
function showmsg4(e){
	x=event.clientX;
	y=event.clientY;
	alert("X 坐标: " + x + ", Y 坐标: " + y);
}


tdList[5].onclick=function(){
	window.open("http://www.taobao.com/");
}