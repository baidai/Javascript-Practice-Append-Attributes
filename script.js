// grab elements to do something with - button to click on
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
// want status (open or closed)
let menuStatus = false;


//menu closed when site loads
menu.style.marginLeft = "-300px";

// f() to open and close
function menuToggle(){
	if (menuStatus == false){
		menu.style.marginLeft = "0px";
		menuStatus = true;
	}
	else if (menuStatus == true){
		menu.style.marginLeft = "-300px";
		menuStatus = false;
	}
}

//event handler (dont put () at end of menuToggle, or it will run when site loads)
//menuBtn.onclick = menuToggle;

let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");

// e is event linked to event
function changeBtnText(e){
	e.preventDefault();
	btn.innerHTML = "Get it Right Get it Tight!";
}

function changeBkColor(){
	btn.style.backgroundColor = "red";
}

// use one fuction, that hold two or more fuctions, to make two events from the event (click)
function twoMethods(e){
	e.preventDefault();
	btn.innerHTML = "Get it Right Get it Tight!";
	btn.style.backgroundColor = "red";
	btn.style.color = "white";
}

function stopFormSubmit(e){
	e.preventDefault();
}

//btn.onclick = changeBtnText;
btn.onclick = twoMethods; // use instead two run two methods
form.onclick = stopFormSubmit;

// instead of two methods, can use an event listner
//btn.addEventListner("click", changeBtnText);
//btn.addEventListner("click", changeBkColor);
//btn.addEventListner("click", function(){btn.style.color = "white";});

//Also if want to input data into fuction 
//put f() inside and aynonomous f()
// e must be in aynon f()

//adjust f() to include name
function changeText(e, name){
	e.preventDefault();
	btn.innerHTML = "Get it Right Get it Tight!";
}

btn.addEventListner("click", function(e){
	changeText = (e,"Get it Right!" );
});
btn.addEventListner("click", function(){
	btn.style.backgroundColor = "blue";
});