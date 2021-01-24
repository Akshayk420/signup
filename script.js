$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
 
        var formValues= $(this).serialize();
 
        $.post("processForm.php", formValues, function(data){
            // Display the returned data in browser
            $("#result").html(data);
        });
    });
});
