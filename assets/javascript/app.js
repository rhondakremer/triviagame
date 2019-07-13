$( document ).ready(function() {
    
    var question1 = {
        name : 'question1',
        question : "How cute is Szilard?",
        choices : ["Super cute", "Totally cute", "The cutest","Puppy"],
        correct: "3"
    }

    var question2 = {
        name : "question2",
        question : "this is number 2?",
        choices : ["possible solution", "another answer", "this one might be right", "probably not"],
        correct : "0",
    }

    function displayQA (each) {
        
        $("#game").append("<br>" + each.question + "<br><input type='radio' name=" +each.name+ " value='0'>" + each.choices[0] + "<input type='radio' name=" + each.name + " value='1'>" + each.choices[1] + "<input type='radio' name=" + each.name + " value='2'>" + each.choices[2] + "<input type='radio' name=" +each.name+ " value='3'>" + each.choices[3] + "<br>");
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
    var radioButton;
    function compareAnswers (each) {
        var radioButton = $('input[type=radio]:checked').val();
        console.log(radioButton);
        console.log(each.correct);
        if (radioButton == each.correct) {
            console.log("You don't suck");
        } else if (radioButton !== each.correct) {
            console.log("gay");
        }
    }

   
    
    
    $("#start").click(function() {
        $("#button").empty();
        displayQA(question1);
        displayQA(question2);
        countdown(1000);
        $("#submitButton").show();
        
  
      });
    
    $("#submit").click(function() {
        console.log("hey bitch");
        compareAnswers(question1);
        compareAnswers(question2);
    
        
        
  
      });
    

// when start button is clicked, show hidden div and start timer
// when timerr runs out, click submit
// when submit button is pressed, +1 for every correct answer chosen

});