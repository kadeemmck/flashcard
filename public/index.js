$('#addNewCard').hide()
$(document).ready(function() {
    
    
    $.ajax({
        type: 'GET',
        url: '/question',
        success: function(data){
            console.log(data)

           
         $("#question").html(data[1].question) 
               $("#answer").html(data[1].answer)     
          
         
        $('#addCardButton').click(function(){
            $('#addNewCard').show(); 
        
            })
            
           $("#nextButton").click(function(){
              $('#nextButton').show();
            })

           },

            error: function(request,error){
             console.log(error)
           
         }
  
   })
    
   let random = Math.floor(Math.random() * data.length)
   answer = data[random].answer
   $("#question").html(data[random].question)
   $("#answer").hide()
   
     




});