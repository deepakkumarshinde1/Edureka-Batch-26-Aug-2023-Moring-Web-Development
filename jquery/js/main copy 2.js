window.addEventListener("load", function () {
  let element = document.querySelector("h1");
  let text = element.innerHTML;
  console.log(text);
});

// load
$(function () {
  let text = $("h1").html();
  console.log(text);
});

// $(function(){}) // load event
// $(selector).methods
