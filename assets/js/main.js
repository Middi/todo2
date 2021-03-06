// Check off todos by clicking

$("ul").on("click", "li", function () { 
    $(this).toggleClass("completed");
});

// Clicking X removes Todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grabbing todo text from input
        var todoInput = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + todoInput + '</li>');
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
    $("input[type='text']").focus();
});