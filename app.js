//Checks to see that the HTML has loaded before javascript is run
$(document).ready(function () {


    //Creating a div element and appending it to the body
    $("body").append("<div></div>");

    //Create an unordered list and appending it to the body
    $("body").append("<ul></ul>");

    //Button is diabled unless the user types input into the field 
    $("#text").keyup(function () {
        if ($(this).val() == '') {
            $(".enableOnInput").prop('disabled', true);
        } else {
            $(".enableOnInput").prop('disabled', false);
        }
    });

    //When button is clicked an alert tells the user the button has been clicked. If text is entered in the text box when the button is clicked then an alert with the inputted text is shown to the user
    $("#btnSubmit").click(function (event) {
        event.preventDefault();
        alert("The button has been clicked");
        let txt = $("#text").val();
        alert(txt);
        $("ul").append("<li>" + txt + "</li>");
        //When user clicks on li element it gets assigned a random color
        $("li").click(function () {
            $(this).css({ "color": rColor() });
        });
        $("li").dblclick(function () {
            $(this).remove();
        });
    });

    //function to pick a random color
    function rColor() {
        let colorR = Math.floor((Math.random() * 256));
        let colorG = Math.floor((Math.random() * 256));
        let colorB = Math.floor((Math.random() * 256));
        let color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
        return color;
    }

});

