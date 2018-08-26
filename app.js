//Checks to see that the HTML has loaded before javascript is run
$(document).ready(function (){
    //Button is diabled unless the user types input into the field 
    $("#text").keyup(function (){
        if ($(this).val() == ''){
            $(".enableOnInput").prop('disabled', true);
        } else {
            $(".enableOnInput").prop('disabled', false);
        }
    })

    //When button is clicked an alert tells the user the button has been clicked. If text is entered in the text box when the button is clicked then an alert with the inputted text is shown to the user
    $("#btnSubmit").on("click", function(){
        alert("The button has been clicked");
        let txt = $("#text").val();
        alert(txt);
    })
});

