$(document).ready(function () {


    alert("Ready? You have 45 seconds to answer the following questions!")



    var questions = [
        {
            question: "1. Kobe Bryant nickname is The Black Mamba!",
            answer: "t"
        }, {
            question: "2. Shaquille O'Neal's first NBA basketball team was the Lakers?",
            answer: "f"
        }, {
            question: "3. The Bad Boys defeated Michael Jordan Chicago Bulls, and won the championship.",
            answer: "t"
        }, {
            question: "4. Kobe Bryant scored 82 points in a game.",
            answer: "f"
        }, {
            question: "5. The Orlando Magic once had two consecutive years of first picks.",
            answer: "t"
        }, {
            question: "6. June 6, 1946, in New York City, was the start of the NBA.",
            answer: "t"
        }, {
            question: "7. NBA teams, on average, has 14 players on there roster.",
            answer: "t"
        }, {
            question: "8. There are 3 NBA basketball teams in california",
            answer: "f"
        }
    ];


    var index = 0;
    var TFquestions = questions[index];
    console.log[index];
    console.log(TFquestions.question);
    console.log(TFquestions.answer);



    $(".displayQuestion").text(TFquestions.question);

    if (TFquestions === questions.length) {
        return;
    }
    var userTrue = "t";
    $(".uTpick").on("click", userTrue);
    console.log(userTrue);

    var userFalse = "f";
    $(".uFpick").on("click", userFalse);
    console.log(userFalse);



function correctlyAnswered(final){

    var score = 0;
    var userCorrect = score;
    var percent;
    percent = score/TFquestions.length;
}



    function userStart(event) {
        // Captures the key press, converts it to lowercase, and saves it to a variable.


        var userTrue = event.key.toLowerCase();
        var userFalse = event.key.toLowerCase();

        if (userTrue === 't' || userFalse === 'f') {
            var correct = TFquestions.answer === userTrue;
            var correct = TFquestions.answer === userFalse;
            if (correct) {
                score++;
                console.log("Correct! ");
                console.log(score);
            } else {
                console.log("Wrong! ");
                console.log(score);
            }
            index++;
            console.log(questions[index].question);
        }
    }

    userStart();

});

// display question 1 at a time, load one question on the screen
// after you answer
// answer you select on the screen , work with boolean
// answer true true = true , false false, = false
// timer 

// 