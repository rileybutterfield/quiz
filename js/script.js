/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var age = $("#age").val();
        var cheeseSnack = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var cnStaff = $("#question3").val().length;
        var totalScore = 0
        function ageBox (age) {
            age = parseInt(age)
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
                return 3
            }
        }
        function staffBox (cnStaff) {
            if (cnStaff <= 4) {
                return 1
            }
            else if (cnStaff <= 6) {
                return 2  
            }
            else if (cnStaff <= 8) {
                return 3   
            }
            else {
                return 4
            }
        }
        console.log(cheeseBox())
    });

});
