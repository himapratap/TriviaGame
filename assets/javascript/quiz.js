    var questions = [
        q0 = {
            query: "Which of the following is a single global function defined in the jQuery library?",
            choices: ["jQuery()", "$()", "Queryanalysis()", "None of the mentioned"],
            answer: "jQuery()"
        },

        q1 = {
            query: "Which of the following is an equivalent replacement of $(document).ready(f)?",
            choices: ["jQuery(f)", "$(f)", "#(f)", "None of the mentioned"],
            answer: "$(f)"
        },

        q2 = {
            query: "How can you get the total number of arguments passed to a function?",
            choices: ["Using args.length property", "Using arguments.length property", "Both", "None of the mentioned"],
            answer: "Using arguments.length property"
        },

        q3 = {
            query: "Which built-in method sorts the elements of an array?",
            choices: ["changeOrder(order)", "order()", "sort()", "None of the mentioned"],
            answer: "sort()"
        },

        q4 = {
            query: "Which of the following jQuery method finds all sibling elements in front of the current element?",
            choices: ["parents( selector )", "prevAll( selector)", "siblings( selector )", "None of the mentioned"],
            answer: "prevAll( selector)"
        },



    ];

    var displayElement, display, minutes, seconds, timerId;
    var totalTimeInSec = 120;
    var incorrect =0 ,correct =0,unanswered = 0,answered= 0;

    $(document).ready(function() {
        var form = 0;


        function startGame() {
            clearScreen();
            setQuestions();
            setSubmitButton();
            // setTimerDisplay();
        }

        function setSubmitButton() {
            $(".content").append('<button type="button" class="btn btn-primary submit">Submit</button>');

        }

        $(document).on("click", ".submit", function() {
            console.log("submit called");
            showScoreCard();
        });

        function clearScreen() {
            $(".content").html(" ");
        }

        function setTimerDisplay() {
            displayElement = $("<div>").attr("id", "display");
            console.log(displayElement)
            $(".content").append(displayElement);

            timerId = setInterval(decrement, 1000);

        }


        function decrement() {
            console.log("Timer called");
            minutes = Math.floor(totalTimeInSec / 60);
            seconds = totalTimeInSec % 60;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            displayElement.text(minutes + ":" + seconds);

            if (totalTimeInSec == 0) {
                clearInterval(timerId);
                showScoreCard();
            } else {
                totalTimeInSec--;

            }



        }

        function showScoreCard() {
            evaluate();
            clearScreen();
            var unanswered = questions.length - answered;
            $(".content").append(" <p> Correct answers :" + correct + " </p>");

            $(".content").append(" <p> Uncorrect answers:" + incorrect  + " </p>");

            $(".content").append(" <p> Unanswered answers:" + unanswered  + " </p>");

        }

        function evaluate() {
            var selections = $("input[type ='radio']:checked");
            console.log( " selections " +selections);
            for (var i = 0; i < selections.length; i++) {
                var questionNo = selections[i].name;
                var selectedAnswer = selections[i].value;
                var correctAnswer = questions[questionNo].answer;
                if (correctAnswer == selectedAnswer) {
                    correct++;
                }else{
                    incorrect ++;
                }
                answered ++ ;
            }


        }

        function setQuestions() {
            console.log("Setting questionnaire");
            form = $("<form id='quiz'></form>");
            console.log(form);
            addQuestions();
            $(".content").append(form);
            form.append("<div class='form-group'>");
        }




        function addQuestions() {
            console.log("Adding questions to the form");
            var question = "";
            for (var i = 0; i < questions.length; i++) {
                var formGroup = $("<div class='form-check form-check-inline'>");
                var questionObj = questions[i];
                var label = $("<label class='form-check-label col-sm-12' >").text(questionObj.query);
                label.append("</br>");;
                var name = i;
                var choices = questionObj.choices;
                for (var j = 0; j < choices.length; j++) {
                    var newDiv = $('<div class = "col-sm-3">');
                    var choice = $("<input class='form-check-input' name='" + name + "' type='radio' value='" + choices[j] + "'/>");
                    newDiv.append(choice).append(choices[j]);

                    label.append(newDiv);
                }

                form.append("</br>");
                form.append(label);

            }


        }

        /*  $(document).on('change', "input[type ='radio']:checked", function(event) {



              //alert("hhh" + $(":input :radio :checked").val());
          })*/

        $(".start").click(function() {
            console.log("Starting the game");
            startGame();

        });




    });
