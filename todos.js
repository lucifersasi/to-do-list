


//click to strike through the completed to-do

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//deleting todo with span

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){ //500millisecond s trans time
		$(this).remove();
	});
	event.stopPropagation();
});

// creating a todo

$("input[type = 'text']").keypress(function(event){
	if (event.which === 13) {
		//grabbong the value
		var todotext = $(this).val();
		//setting the text input to null
		$(this).val("");
		//create new li and add it to ul
		$("ul").append("<li>"+'<span><i class="fas fa-trash-alt"></i></span>'+todotext+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
