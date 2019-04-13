$(document).ready(function() {

    //Global variables
    var wins = 0;
    var losses = 0;
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    
    //Array of different gem images
    var gImages = ["assets/images/pinkg.svg", "assets/images/purpleg.svg", "assets/images/tealg.svg", "assets/images/yellowg.svg"];
    
    //Assigning random number to each gem
    function gemValues() {

        for (var i = 0; i < gImages.length; i++) {
        
            var image = $("<img>");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) +1);
            $("#gems").append(image);
        }

    }

    function playGame() {

        
        var counter = 0;
        $(".your-number").text("Your points: " + counter); 

        //Generates random number 
        var targetNumber = Math.floor(Math.random() * (120-19) + 19);
            
        //And displays it on the browser
        $(".number").text("Number to guess: " + targetNumber);
            console.log(targetNumber);

        //When user clicks on a gem 
        $(".gem-buttons").on("click", function() {
            
        //Assigns random number to each click
            
            gemIsClicked = true;
            var gemValue = ($(this).attr("data-letter"));
            gemValue = parseInt(gemValue);
            //Adds every click to global counter
            counter += gemValue;
            
            console.log(gemValue);
            console.log(counter);
            
            $(".your-number").text("Your points: " + counter);
            
            if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $(".wins").text("Wins: " + wins);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
            else if (counter >= targetNumber) {
            alert("You lose!");
            losses++;
            $(".losses").text("Losses: " + losses);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
        });
    }
    
    gemValues();
    playGame();

});