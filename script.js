$("#squirtle").hide();
$("#pikachu").hide();
$("#bulbasaur").hide();
$("#charmander").hide();
$(".reset").hide();

$(".submit").click(function() {
    $(".container img").hide();
    var age = $(".age").val().toLowerCase();
    var color = $(".color").val().toLowerCase();

    if (color === "red" && age >= 18) {
        $("h3").text("Pickachu");
        $("#pikachu").show();
        $(".submit").hide();
        $(".reset").show();
        $("body").css("background-color","red");
        $("body").css("color","white");
    } else if (color === "red" && age <= 18) {
        $("h3").text("Charmander");
        $("#charmander").show();
        $(".submit").hide();
        $(".reset").show();
        $("body").css("color","white");
        $("body").css("background-color","red");
    } else if (color === "blue" && age <= 18) {
        $("h3").text("Squirtle");
        $("#squirtle").show();
        $(".submit").hide();
        $(".reset").show();
        $("body").css("background-color","blue");
        $("body").css("color","white");
    } else if (color === "blue" && age >= 18) {
        $("h3").text("Bulbasaur");
        $("#bulbasaur").show();
        $("body").css("color","white");
        $(".submit").hide();
        $(".reset").show();
        $("body").css("background-color","blue");
    } else {
    alert("Error: Please check your answers!");
    }

});

$(".reset").click(function() {
    $("p").text("");
    $("h3").text("");
    $(".reset").hide();
    $(".container img").hide();
    $(".submit").show();
    $(".color").val("");
    $(".age").val("");
    $("body").css("background-color","");
});