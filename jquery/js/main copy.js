// run a javascript when page get load

// javascript code
window.addEventListener("load", function () {
  let element = document.querySelector("h1");
  let text = element.innerHTML;

  // jquery jQuery() or $()
  // let text2 = $("h1").html();

  // library
  // jquery functions as a wrapper function

  console.log(text);
  // console.log(text2);
});
