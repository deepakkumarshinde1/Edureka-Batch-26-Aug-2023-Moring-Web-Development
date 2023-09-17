let h1Text = document.querySelector("#text");
let button = document.querySelector("#change-text");
let inputText = document.querySelector(".input-text");
let tbody = document.querySelector("#tbody");

// element or null
// console.log(h1Text);

/// get inner data of element; ===> .innerHTML
// console.log(h1Text.innerHTML);

// set data from javascript to html element ==> .innerHTML
// h1Text.innerHTML = "Welcome to edureka";

// on button click we want to change text
// event
// event  user interaction
// keyboard and mouse
// addEventListener

button.addEventListener("click", function () {
  // get value of input ==> .value
  changeTextFun();
});

inputText.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    changeTextFun();
  }
});

let list = [];
function changeTextFun() {
  let value = inputText.value;

  if (value === "") {
    alert("Please enter some value to save");
  } else {
    // h1Text.innerHTML = value;
    // save a data in array ==> push

    let newStudent = {
      name: value,
    };

    list.push(newStudent); // [{...},{...},{...},{...}]
    inputText.value = "";

    // print data in table

    let newList = list.map(function (value, index) {
      return `<tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
             </tr>`;
    });
    // convert list to string
    let htmlElements = newList.join("");
    tbody.innerHTML = htmlElements;
  }
}

// // map --> re-create array
// let array = [10, 20, 30, 40, 50];
// // square of each value and store it in an new array
// let newArray = array.map(function (value) {
//   // return "<p>" + value * value + "</p>";
//   return `<p>${value * value}</p>`;
// });
// //  convert array to string ==> join('')
// let htmlElement = newArray.join("");
// console.log(htmlElement);

/*


<table>
  <tr>
    <th id="name">Name</th>
    <th id="email">Email</th>
    <th id="phone">Phone</th>
    <th id="addr">Address</th>
  </tr>
  <tr>
    <td headers="name">John Doe</td>
    <td headers="email">someone@example.com</td>
    <td headers="phone">+45342323</td>
    <td headers="addr">Rosevn 56,4300 Sandnes,Norway</td>
  </tr>
</table>


*/
