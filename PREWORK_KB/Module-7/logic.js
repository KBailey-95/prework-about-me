// no comments here to describe any of these functions
// when the fact button is clicked
$("#factButton").on("click", function() {
	// booFacts was not created as an array, leaving the following function useless as there is no value set to index. The entire booFacts var is treated as a single string
	var number = Math.floor((Math.random() * booFactsArray.length));
	// We display the fact from the booFactsArray that is in the random position we just generated.
	$("#factText").text(booFactsArray[number])
})
//some close quotations came after the comma or in other seemingly random places designed to separate positions in the array. This was difficult becasuse the english-speaking inclination was to see these as normal statements I was misinterpreting
var booFactsArray = ["Boo is a pomeranian","Boo's best friend is another pomeranian named Buddy","Boo the Pomeranian was born on March 16, making him a Pisces","Boo's favourite food is grass","Boo has released two books"]
//
$("#textPink").on("click", function() {
	//no quotations around pink
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	//no indention here
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

// clicks were not in quotations so buttons didn't work
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})