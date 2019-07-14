$(document).ready(function () {
    var numbers = [1, 2, 3,]

    var questions = [
        {
            name: 'question1',
            question: "How cute are puppies",
            choices: ["Super cute", "Totally cute", "The cutest", "Puppy"],
            correct: "3",
            correctAnswer: "The cutest"
        }
        ,
        {
            name: "question2",
            question: "this is number 2?",
            choices: ["possible solution", "another answer", "this one might be right", "probably not"],
            correct: "0"
        }]

    function displayQA() {

        $("#game").append("<br>" + question + "<br><input type='radio' name=" + name + " value='0'>" + choices[0] + "<input type='radio' name=" + name + " value='1'>" + choices[1] + "<input type='radio' name=" + name + " value='2'>" + choices[2] + "<input type='radio' name=" + name + " value='3'>" + choices[3] + "<br>");
    }

    var card = $('#game');

    var start = function () {
        for (let i = 0; i < questions.length; i++) {
            //display question 
            card.append("<h2>" + questions[i].question + "</h2>");
            for (let j = 0; j < questions[i].choices.length; j++) {
                card.append("<input type='radio' name= 'question-" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
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
    var radioButton;
    var game = {
        correct: 0,
        incorrect: 0,
        counter: 10
    }

    function compareAnswers() { //put questions and answers into array?
        //var radioButton = $('input[type=radio]:checked').val();
        var radioButton = card.children("input:checked");
        for (let i = 0; i < radioButton.length; i++) {
            if ($(radioButton[i]).val() === questions[i].correct) {
                game.correct++;
                console.log("You rock! ")
            } else {
                game.incorrect++;
                console.log("Make better life choices!")
            }
        }
    }




    $("#start").click(function () {
        console.log("I am being clicked!");
        $("#button").empty();
        start();
        countdown(1000);
        $("#submitButton").show();
    });

    $("#submit").click(function () {
        compareAnswers();
        //console.log(correct);
    });

    // when start button is clicked, show hidden div and start timer
    // when timerr runs out, click submit
    // when submit button is pressed, +1 for every correct answer chosen

});