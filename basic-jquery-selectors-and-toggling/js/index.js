
// Select all elements with class "box" and store in a variable

var _boxes = document.getElementsByClassName('box');
// On click of a box, toggle the class "selected". This is crucial to
// completing the remaining functions, as they should only apply
// style changes to selected elements.
// Hints: use jQuery "click" function, and $(this) selector

$(_boxes).click(function() {
	if ($(this).hasClass("selected") == true) {
		$(this).removeClass("selected");
		}
	else {
		$(this).addClass("selected");
	
	}
});

function makeCircle(){
  // Add class "circle" to any elements with class "selected"
  $(".selected").addClass("circle");
}

function makeSquare(){
  // Remove class "circle" from any elements with class "selected"
  $(".selected").removeClass("circle");
}

function changeColor(color){
  // Use the parameter passed into this function to add a class to any
  // selected element. The parameter is the class.

  //if then statements to remove current color class and apply new
  	if ($(".selected").hasClass("red") == true) {
  		$(".selected").removeClass("red");
    }
  	else if ($(".selected").hasClass("blue") == true) {
		$(".selected").removeClass("blue");
  	}

  	else {
  		$(".selected").removeClass("white");
  	}

  $(".selected").addClass(color);
}

// On click of button with id="circle", call makeCircle() function
$("#circle").click(function() {
	makeCircle();
});

// On click of button with id="square", call makeSquare() function
$("#square").click(function() {
	makeSquare();
});
// On click of button with class="circle", use the value in the
// data-attribute tag to pass a color paremeter into the changeColor() function
$(".color").click(function() {
	changeColor($(this).data("color"));
});

// On click of button with id="toggle", toggle the selected elements.
// Hint: for a less jumpy animation, look up jQuery slideToggle()
$("#toggle").click(function() {
	$(_boxes).slideToggle("slow");
});

// On click of button with id="select-all", add class "selected" to all boxes
$("#select-all").click(function() {
	$(_boxes).addClass("selected");
});
// On click of button with id="deselect", remove class "selected" from all boxes
$("#deselect").click(function() {
	$(_boxes).removeClass("selected");
});
// On click of button with id="reset", restore page to original state
$("#reset").click(function() {
	location.reload();
});
// On click of button with id="spin", add class "spin" to selected elements
$("#spin").click(function() {
	if ($(".selected").hasClass("spin") == true) {
		$(".selected").removeClass("spin");
	}
	else {
		$(".selected").addClass("spin");

	}
});