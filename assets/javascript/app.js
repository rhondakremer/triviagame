$(document).ready(function () {

    var questions = [
        {
            question: "Which of these options is the earliest form of French horn?",
            choices: ["Corno di caccia", "Trumpet", "Animal horns", "Hunting horn"],
            correct: "Animal horns",
        }
        ,
        {
            question: "Which horn player left his position as Principal Horn of a major symphony orchestra to become horn professor at Indiana University saying, 'I would rather quit several years too soon than 10 minutes too late'?",
            choices: ["Phillip Farkas", "Dale Clevenger", "Myron Bloom", "Dennis Brain"],
            correct: "Phillip Farkas"
        }]


    var start = function () {
        for (let i = 0; i < questions.length; i++) {
            $('#game').append("<h2>" + questions[i].question + "</h2>");
            for (let j = 0; j < questions[i].choices.length; j++) {
                $('#game').append("<input type='radio' name='question" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
            }
        }
    }




    var timeLeft = 10;


    function countdown() {
        setTimeout(countdown, 1000);
        if (timeLeft == -1) {
            clearTimeout;
        } else {
            $("#timer").html("You have " + timeLeft + " seconds left!");
            timeLeft--;
        }

    };

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 10
    }

    //var radioButton = [card.children("input:checked").val()];
    //var radioButton = $('input[type=radio]:checked').val();

    function compareAnswers() { 
        for (let i = 0; i < questions.length; i++) {
        if ($("input[name='question" +i+ "']:checked").val() === questions[i].correct) {

            console.log("yes")
        } else {
            console.log("no");
        };






    
        
        /*var correctAnswer;
        var radioButton = $("#game").children("input:checked").val();


        for (let i = 0; i < questions.length; i++) {
            correctAnswer = questions[i].correct;
            if (radioButton[i] === correctAnswer) {
                console.log(radioButton);
                game.correct++;
                console.log("You rock! ")
            } else {
                game.incorrect++;
                console.log("Make better life choices!" + radioButton)
            }
         
        } */
};

};

    $("#start").click(function () {
        console.log("I am being clicked!");
        $("#button").empty();
        start();
        countdown(1000);
        $("#submitButton").show();
    });

    $("#submit").click(function () {
        console.log("I work");
        compareAnswers();
        
        
    });

    



});