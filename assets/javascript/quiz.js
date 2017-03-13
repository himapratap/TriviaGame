    var questions = [
        q1 = {
            query: "What is the longest river in the world",
            choices: ["amazon", "b", "c", "d", "e"],
            answer: "c"
        },

        q2 = {
            query: "hai",
            choices: ["a", "b", "c", "d", "e"],
            answer: "c"
        }


    ];


    $(document).ready(function() {
        var form = 0;


        function startGame() {
            setQuestions();
        }


        function setQuestions() {
            console.log("Setting questionnaire");
            form = $("<form id='quiz'></form>");
            console.log(form);
            addQuestions();
            $(".content").html(form);
        }


        /*
<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> 1
  </label>
</div>
        */

        function addQuestions() {
            console.log("Adding questions to the form");
            var question = "";
            // form.append("<div class='form-group'>"); form-check-inline
            for (var i = 0; i < questions.length; i++) {
                var formGroup = $("<div class='form-check form-check-inline'>");
                var questionObj = questions[i];
                var label = $("<label class='form-check-label'>").text(questionObj.query);
                var id = "q" + i;
                label.append("</br>");
                var choices = questionObj.choices;
                for (var j = 0; j < choices.length; j++) {
                    var choiceId = id + 'c' + j;
                    var choice = $("<input id='" + choiceId + "' class='form-check-input form-check-inline' name='" + id + "' type='radio' value='" + choices[j] + "'>");
                    label.append(choice).append(choices[j]);
                }

                /* formGroup.append("<input id=" + id + "  class = 'form-check-input form-check-inline ' type='radio'>").append(questions[i].choices[1]);
                formGroup.append("<input id=" + id + "  class = 'form-check-input form-check-inline' type='radio'>");
*/
                form.append("</br>");
                form.append(label);

            }


        }

        $('#quiz :input :radio').on('change', function() {
            console.log("changed ...");
            alert("hhh" + $(":input :radio :checked").val());
        })

        $(".start").click(function() {
            console.log("Starting the game");
            startGame();

        });




    });
