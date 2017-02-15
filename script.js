$(document).ready(function(){
    
var myPassword= "hsfirox";

 $("button").click(function(){ 
     var input=$("#input").val();
     if(input=== myPassword){
        $("h2").html("Correct" );
        
    
    
     } else {
        $("h2").html("Incorrect, please try again" );
        
    }
    
 }); 

});
