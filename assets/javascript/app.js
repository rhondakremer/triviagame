$(document).ready(function () {

    var questions = [

        {
            question: "Who was the founder of Chico, CA?",
            choices: ["Charles H. Bennett", "General John Bidwell", "Arnold Schwarzenegger", "Ulysses Grant"],
            correct: "General John Bidwell"
        }
        ,
        {
            question: "In what year was the city of Chico founded?",
            choices: ["1801", "1840", "1860", "1872"],
            correct: "1860",
        }
        ,
        {
            question: "Who were the original inhabitants of the land that became Chico?",
            choices: ["Mechoopda Maidu", "Wamapoke", "Apache", "Cherokee"],
            correct: "Mechoopda Maidu"
        },
        {
            question: "Chico is home to the world's largest _____",
            choices: ["Butter churn", "Gold nugget", "Yo-yo", "Slinky"],
            correct: "Yo-yo",
        }
        ,
        {
            question: "Which brewery is located in Chico, CA?",
            choices: ["Mission Brewery", "Coachella Valley Brewing Company", "El Segundo Brewing Company", "Sierra Nevada Brewing Company"],
            correct: "Sierra Nevada Brewing Company",
        }
        ,
        {
            question: "Bidwell Park is the _____ largest municipal park in CA.",
            choices: ["1st", "2nd", "3rd", "4th"],
            correct: "3rd",
        }
    ]


    function start() {
        for (let i = 0; i < questions.length; i++) {
            $('#game').append("<h2>" + questions[i].question + "</h2>");
            for (let j = 0; j < questions[i].choices.length; j++) {
                $('#game').append("<input type='radio' name='question" + i + "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
            }
        }
    }

    function displayCorrect() {
        for (let i = 0; i < questions.length; i++) {
            $('#game').append("<h2>" + questions[i].question + "</h2>");
            for (let j = 0; j < questions[i].correct.length; j++) {
                $('#game').append(questions[i].correct[j]);
            }
        }
    }




    var timeLeft = 10;
    var timer;

    function countdown() {
        timer = setTimeout(countdown, 1000);
        if (timeLeft == -1) {
            clearTimeout(timer);
            $("#timer").text("You ran out of time!");
            compareAnswers();
            $("#game").empty();
            $("#submitButton").empty();
            $("#results").html("Correct: " + game.correct + "<br>Incorrect: " + game.incorrect);
            displayCorrect();
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
            if ($("input[name='question" + i + "']:checked").val() === questions[i].correct) {
                game.correct++;
                console.log("yes")
            } else {
                game.incorrect++;
                console.log("no");
            };

        };

    };

    $("#start").click(function () {
        $("#button").empty();
        start();
        countdown(1000);
        $("#submitButton").show();
    });

    $("#submit").click(function () {
        compareAnswers();
        $("#game").empty();
        $("#timer").empty();
        clearTimeout(timer)
        $("#submitButton").empty();
        $("#results").html("Correct: " + game.correct + "<br>Incorrect: " + game.incorrect);
        displayCorrect();
    });





});