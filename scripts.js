/**
 * @author Chidinma Irene Nwoye
 */
console.log("javascript file loaded");

function loadedJSON(dataAlice){        //It's outside loadedData because it has to be defined before it's used in loadedData, a consequent function
	console.log(dataAlice.count);     //console.log the "count" property of our dataAlice project
	
	
}
//this is my custom data loaded function
function loadedData(){
	
	console.log("I'm at document ready!");
	
	//use jQuery to create a new div element
	var myDiv = $("<div>"); //create a box in memory call it my div
	//use jQuery to add text to it
	//"myDiv", and add some html (in this case just a string)
	$(myDiv).html("Here's my new div");
	
	//hey jQuery, grab the div with the id "ContentCointaner"
	// and put my new div inside it
	//I expect to see a new div, containing the text "Here's my new div"
	//appear inside the div with the id "ContentContainer"
	$("#ContentContainer").append(myDiv);
	
	//use the jQuery get fucntion to load my JSON file 
	//It takes 3 parameters: the 1st parameter is the name of the file - UEMP270V_data.json
	//The 2nd parameter is the function to call once the file is loaded; it doesn't go into quotation mark because it's the name of a function
	//The 3rd parameter is a string of the file type to expect
	$.get("UEMP270V_data.json",loadedJSON,"json");  
	
}

//Document ready happens when the entire webpage is loaded
//When that happens I want to initiate the "loadedData" function/activity that I defined above


$( document ).ready(loadedData);

console.log("This statement is after document ready");

