$("#start-button").on("click", function (){
    game.start();
})

$(document).on("click", "#finish-button", function(){
    sound.play();
    game.done();
})

var questions = [{
    question: "Who is Pam engaged to at the very beginning of the show?",
    answers: ["Trevor", "Roy", "Mark", "Toby"],
    correctAnswer: "Roy",
}, {
    question: "What college did Andy graduate from?",
    answers: ["Cornell", "ITT Tech", "Hogwarts", "Scranton University"],
    correctAnswer: "Cornell",
}, {
    question: "Who does Phyllis marry?",
    answers: ["Robert California", "Shawn Savage", "Bob Vance", "Bill Vaughn"],
    correctAnswer: "Bob Vance",
}, {
    question: "What's the name of Angela's cat who dies?",
    answers: ["Bandit", "Kitty", "Sprinkles", "Cupcake"],
    correctAnswer: "Sprinkles",
}, {
    question: "What does Michael burn his foot on?",
    answers: ["A Candle", "Curling Iron", "Hot Coals", "George Foreman Grill"],
    correctAnswer: "George Foreman Grill",
}, {
    question: "Who accidentally starts a fire in the office?",
    answers: ["Creed", "Ryan", "Merideth", "Toby"],
    correctAnswer: "Ryan",
}, {
    question: "What nicknames are given to Pete and Clark at the start of their Dunder Mifflin Career?",
    answers: ["Princess and The Frog", "Rick and Morty", "Dumb and Dumber", "Plop and Dwight Jr."],
    correctAnswer: "Plop and Dwight Jr.",
}, {
    question: "What is the name of the action movie Michael made?",
    answers: ["Paperboy", "Threat Level Midnight", "Non-Stop Action: The Movie", "Fat and Furious"],
    correctAnswer: "Threat Level Midnight",
}, {
    question: "What kind of farm does Dwight have?",
    answers: ["Worm Farm", "Ostrich Farm", "Dairy Farm", "Beet Farm"],
    correctAnswer: "Beet Farm",
}, {
    question: "What's the name of the company that Ryan founds?",
    answers: ["WUPHF", "Ryan's Racers", "My-Book", "Face-Space"],
    correctAnswer: "WUPHF",
}];

var sound = new Audio();
    sound.src = "andy_bernard_sms.mp3";

var game = {
    correct: 0,
    incorrect: 0,
    counter: 100,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            console.log("Time's Up!");
            game.done();
        };
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#wrapper").prepend("<h2>Time Remaining: <span id='counter'> 100 </span> Seconds</h2>");
            $("#start-button").remove();
            for (var i = 0; i < questions.length; i++) {
                $("#wrapper").append("<h3>" + questions[i].question + "</h3>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $("#wrapper").append("<input type='radio' name = 'question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
                }
            }  
            $("#wrapper").append("<br><button id='finish-button'>Submit</button>");
    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function(){
            if ($(this).val() == questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-1']:checked"), function(){
            if ($(this).val() == questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"), function(){
            if ($(this).val() == questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"), function(){
            if ($(this).val() == questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-4']:checked"), function(){
            if ($(this).val() == questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-5']:checked"), function(){
            if ($(this).val() == questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-6']:checked"), function(){
            if ($(this).val() == questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-7']:checked"), function(){
            if ($(this).val() == questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-8']:checked"), function(){
            if ($(this).val() == questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-9']:checked"), function(){
            if ($(this).val() == questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
    
        this.result();
    },

    result: function() {
        clearInterval(timer);
        $("#wrapper h3").remove();
        $("#wrapper").html("<h2>All Done!</h2>");
        $("#wrapper").append("<h3>Correct Answers: " + this.correct +"</h3>");
        $("#wrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3");
        $("#wrapper").append("<h3>Unanswered: " + (questions.length - ( this.correct + this.incorrect)) + "</h3");

    }

};