$("ul").on("click","li",function(){$(this).toggleClass("completed")}),$("ul").on("click","span",function(t){$(this).parent().fadeOut(500,function(){$(this).remove()}),t.stopPropagation()}),$("input[type='text']").keypress(function(t){if(13===t.which){var i=$(this).val();$(this).val(""),$("ul").append('<li><span><i class="fa fa-trash"></i></span> '+i+"</li>")}}),$(".fa-plus").click(function(){$("input[type='text']").fadeToggle(),$("input[type='text']").focus()});