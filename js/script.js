/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var ageInput = $("#age").val();
        var cheeseSnack = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var cnStaff = $("#question3").val().length;
        var totalScore;
    var ageScore = ageBox(ageInput)
    var cheeseScore = cheeseBox(q1Result)
    var lunchScore = lunchBox(q2Result)
    var staffScore = staffBox(cnStaff)
    totalScore = ageScore + cheeseScore + lunchScore + staffScore;
    $(".result").html(lastFunction(totalScore));
});
        function ageBox (age) {
            if (age <= 16) {
                return 1
            }
            else if (age <= 20) {
                return 2  
            }
            else if (age <= 27) {
                return 3   
            }
            else {
                return 4
            }
        }
        function cheeseBox (cheese) {
            if (cheese === "cheddar" || cheese === "Cheddar") {
                return 1
            }
            else if (cheese === "swiss" || cheese === "Swiss") {
                return 2  
            }
            else if (cheese === "gouda" || cheese === "Gouda") {
                return 3   
            }
            else {
                return 4
            }
        }
        function lunchBox (lunch) {
            if (lunch === "sandwich" || lunch === "Sandwich") {
                return 1
            }
            else if (lunch === "soup" || lunch === "Soup") {
                return 2  
            }
            else {
                return 3;
            }
        }
        function staffBox (cnStaff) {
            if (cnStaff <= 4) {
                return 1;
            }
            else if (cnStaff <= 6) {
                return 2; 
            }
            else if (cnStaff <= 8) {
                return 3;  
            }
            else {
                return 4;
            }
        }
        function lastFunction(score) {
            if (score <= 2) {
                return "You are Ritz Bits"
            }
             if (score <= 5) {
                return "You are Goldfish"
            }
             if (score <= 11) {
                return "You are CheezIts"
            }
            else {
                return "You are Cheetos"
            }
        }
        
});
