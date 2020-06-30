function check(form){
	var valid=false;
	var x = document.getElementById('html').checked;
	var y = document.getElementById('css').checked;
	var z = document.getElementById('java').checked;
	var result = x || y || z;
	if(result==false){
    	alert('Please select one reason.');
    	return false;
   		document.form[0].html[6].focus();
	}
	else{
		valid = true;
	}
}

function display(){
    var m = document.getElementById("name").value;
    var n = document.getElementById("mail").value;
    var o = document.getElementById("number").value;
    var p = document.getElementById("college").value;
    var a = document.getElementById("male").checked;
	var b = document.getElementById("female").checked;
	var c = document.getElementById("other").checked;
	var q = document.getElementById("html").checked;
	var r = document.getElementById("css").checked;
	var s = document.getElementById("java").checked;
    document.write("First Name : "+m);
    document.write('<br>');
    document.write("E-mail : "+n);
    document.write('<br>');
    document.write("Phone no : "+o);
    document.write('<br>');
	document.write("Gender : ");
	if(a==true){
		document.write("Male");
		document.write('<br>');
	}
	if(b==true){
		document.write("Female");
		document.write('<br>');
	}
	if(c==true){
		document.write("Other");
		document.write('<br>');
	}
	
	document.write("Reasons for RDIP : ");
	if(q==true){
		document.write("HTML ");	
	}
	if(r==true){
		document.write("CSS ");
	}
	if(s==true){
		document.write("JavaScript ");
	}
	document.write('<br>');
	document.write("College : "+p);
    document.write('<br>');

}


