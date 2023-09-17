$(function () {
  // get data
  let text = $("h1").html();
  console.log(text);
  // set a data

  // event
  $("#changeText").on("click", function () {
    $("#textId").html("Welcome to edureka");
  });
});
