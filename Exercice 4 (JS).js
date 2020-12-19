
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("Le paragraphe est masqué maintenant");
        });
    });
});
