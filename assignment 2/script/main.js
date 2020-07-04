// Task 1 Functions.

function addition(){
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	p = Number(x);
	r = Number(y);
	return p+r;
}
function subtraction(){
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	p = Number(x);
	r = Number(y);
	return p-r;
}
function multiplication(){
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	p = Number(x);
	r = Number(y);
	return p*r;
}
function division(){
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	p = Number(x);
	r = Number(y);
	return p/r;
}
function percentage(){
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	p = Number(x);
	r = Number(y);
	return ((p*r)/100);
}
function absolute(){
	x = document.getElementById("num1").value;
	p = Number(x);
	return Math.abs(p);
}
function sqroot(){
	x = document.getElementById("num1").value;
	p = Number(x);
	r = Math.sqrt(p);
	if(Number.isInteger(r)==true){
		return r;
	}
	else{
		return r.toFixed(3);
	}
}

//Task 2 Functions.

function valiletter(){ 
    var letters = /^[A-Za-z]/;
    var inputtxt=document.getElementById("name").value;
    if(inputtxt.match(letters)){
      alert(inputtxt+" is a valid name");
      return inputtxt+" is a valid name";
    }
    else{
      alert(inputtxt+" is  not valid name");
      return inputtxt+" is  not valid name";
    }
}
function valinum(){
    var s;
    s = document.getElementById("phn").value;
    var patternNum = /^[0-9]{10}$/;
    if (s.match(patternNum)){
       	alert(s+" is a valid number");
      	return s+" is a valid number";
    } 
    else{
    	alert(s+" is not valid number");
      	return s+" is not valid number";	
    }
} 
function valimail(){
	var mail = document.getElementById("email").value;
	var patternmail = /.+@.+\..+/;
	if(mail.match(patternmail)){
		alert(mail+" is a valid E-Mail ID")
		return mail+" is a valid E-Mail ID";
	}
	else{
		alert(mail+" is not  valid E-Mail ID");
		return mail+" is not  valid E-Mail ID";
	}
}

// Task 3 Functions.

function palindrome() {
  var str = document.getElementById("word1").value;
  var rstr = "";
  var len=str.length-1;
  for(i=len; i>=0; i--){
  	rstr+=str[i];
  }
  if(str==rstr){
  	document.getElementById("cal1").innerHTML=str+" is a palindrome.";
  	return str+" is a palindrome.";
  }
  else{
  	document.getElementById("cal1").innerHTML=str+" not a palindrome.";
  	return str+" is not a palindrome.";
  }
  
}

function anagram(){
	var anastr1 = document.getElementById("word2").value;
	var anastr2 = document.getElementById("word3").value;
    var s1;
    var s2;
    var s3 = anastr1.split(' ').join('');
    var s4 = anastr2.split(' ').join('');
    s1 = s3.toUpperCase().split('').sort().join('');
    s2 = s4.toUpperCase().split('').sort().join('');
    if(s1 == s2){
    	document.getElementById("cal2").innerHTML=anastr2+" is an anagram.";
    	return str+" is a palindrome.";
    }
    else{
    	document.getElementById("cal2").innerHTML=anastr2+" is not an anagram.";
    	return anastr2+" is not an anagram.";
    }
}

// Task 4 Functions.

function game(){
	var a=Math.floor(Math.random()*1000);
	var b=Math.floor(Math.random()*1000);
	var list=["Human","Cockroach","Nuclear-Bomb"];
	var d=a%3;
	var p=b%3;
	var obj1=list[d];     
	var obj2=list[p];
	var winner="";
	if(obj1=="Cockroach"){
		if(obj2=="Human"){
			winner="Human";
		}
		else if(obj2=="Nuclear-Bomb"){
			winner="Cockroach";
		}
		else{
			winner="Tie";
		}
		}
	if(obj1=="Human"){
		if(obj2=="Cockroach"){
			winner="Human";
		}
		else if(obj2=="Nuclear-Bomb"){
			winner="Nuclear-Bomb";
		}
		else{
			winner="Tie";
		}
	}
	if(obj1=="Nuclear-Bomb"){
		if(obj2=="Human"){
			winner="Nuclear-Bomb"; 
		}
		else if(obj2=="Cockroach"){
			winner="Cockroach";
		}
		else{
			winner="Tie";
		}
	}
	document.getElementById("Object1").innerHTML="Object-1 is "+obj1;
	document.getElementById("Object2").innerHTML="Object-2 is "+obj2;
	document.getElementById("text1").value=a;
	document.getElementById("text2").value=b;
	return winner;
}


