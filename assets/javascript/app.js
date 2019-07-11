$( document ).ready(function() {
    
    var question1 = {
        question : "How cute is Szilard?",
        answera : "Super cute",
        answerb : "Totally cute",
        answerc : "The cutest",
        answerd : "Puppy"
    }

    var question2 = {
        question : "this is number 2?",
        answera : "possible solution",
        answerb : "another answer",
        answerc : "this one might be right",
        answerd : "probably not"
    }

    function displayQA (each) {
        $("#game").append("<br>" + each.question + "<br><input type='radio' name='question1' value='choice1'>" + each.answera + "<input type='radio' name='question1' value='choice1'>" + each.answerb + "<input type='radio' name='question1' value='choice1'>" + each.answerc + "<input type='radio' name='question1' value='choice1'>" + each.answerd + "<br>");
    }

    var timeLeft = 10;


    function countdown ()  {
        setTimeout(countdown, 1000);
        if (timeLeft == -1) {
            clearTimeout;
        } else {
            $("#timer").html("You have " + timeLeft + " seconds left!");
            timeLeft--;
        } 
        
    };
    
    
    $( "#start" ).click(function() {
        $("#button").empty();
        displayQA(question1);
        displayQA(question2);
        countdown(1000);
        
  
      });
    
    

// when start button is clicked, show hidden div and start timer
// when timerr runs out, click submit
// when submit button is pressed, +1 for every correct answer chosen

});