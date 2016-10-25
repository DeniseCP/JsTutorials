/*function person(name, age){
		this.name = name;
		this.age = age;
	}

	var denise = new person("Denise", 29);

	document.write(denise.name + " "+ denise.age);
	
	
	//----
	
	//Object Initializer
	//Faster than Constructor function

	taylor = {
		name : "Taylor",
		age : 29
	};
	bucky = {
		name : "Bucky",
		age : 24
	};
	
	document.write(taylor.name +" is "+ taylor.age);
	document.write("\n"+bucky.name +" is "+ bucky.age);
	
	//---
	function person(name, age){
		this.age = age;
		this.name = name;
		
		this.yearsUntilRetire = yearsLeft;
	}
	
	function yearsLeft(){
		var numbYears = 65 - this.age;
		return numbYears;
	}
	
	//var nathalie = new person("Nathalie", 28);
	var denise = new person("Denise", 29);
	
	//document.write(nathalie.yearsUntilRetire());
	document.write(denise.yearsUntilRetire());
	
	//-----
	
	//reverse, push and sort

	var bodyParts = new Array("head", "shoulder", "knees", "toes");

	bodyParts.reverse();

	//push is diffent from pop in java array
	// pop deletes the last element
	//push adds a new element at the end of the array
	bodyParts.push("tongue", "elbow");

	//sort the elements in aphabetical order and replace in your array

	bodyParts.sort();

	//join returns your array as a string separated by an ','
	var string = bodyParts.join(" - ");
	document.write(string);
	
	//----
	
	var pie = prompt("Enter your name:", "");
	document.write("Hello " + pie);

	var array = new Array(3);

	for (i = 0; i < 3; i++) {
		array[i] = prompt("Enter an Integer value: ", "");
	}
	
	var string = array.join();
	
	document.write(string);
	
	
	//---
	
	function everySec(){
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		
		document.write(hours+":"+minutes+":"+seconds+ "<br />" );
	}
	
	setInterval(everySec, 36000);
	*/