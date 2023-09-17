$(function () {
  //userFullName
  // userEmail
  // userMobile
  // userAddress
  // user = [{...},{...},{...}]
  let lsData = localStorage.getItem("users");
  let users = [];
  if (lsData !== null) {
    // convert jsonString Data to JSON
    users = JSON.parse(lsData);
  }

  $("#saveData").on("click", function () {
    let userFullName = $("#userFullName").val();
    let userEmail = $("#userEmail").val();
    let userMobile = $("#userMobile").val();
    let userAddress = $("#userAddress").val();

    let newUser = {
      userFullName,
      userEmail,
      userMobile,
      userAddress,
    };

    // save record of user
    users.push(newUser);

    alert("User Saved Successfully");
    // resting input
    $(".reset").val("");

    // store a data in local storage
    // we need to convert the array to string
    // we need preserver structure of array
    // JSON.stringify()
    localStorage.setItem("users", JSON.stringify(users));
    $(".thank-you").html(`Thank you ${userFullName} for submitting details.
    <button class="btn btn-primary" id="fillNewForm">Fill New Form</button>`);
    // $(".thank-you").removeClass("d-none").addClass("set-center");
    // $(".userForm").addClass("d-none");
    printData();
  });

  $(document).on("click", "#fillNewForm", function () {
    $(".thank-you").addClass("d-none");
    $(".userForm").removeClass("d-none");
  });

  printData();

  function printData() {
    let list = users.map(function (user) {
      return `<tr>
                    <td>${user.userFullName}</td>
                    <td>${user.userEmail}</td>
                    <td>${user.userMobile}</td>
                    <td>${user.userAddress}</td>
                </tr>`;
    });
    $("tbody").html(list);
  }

  $(".AddButton").on("click", function () {
    $(".form-popup").animate(
      {
        right: "0px",
      },
      1000
    );
    $(".AddButton").fadeOut(1000);
  });

  $(".close").on("click", function () {
    $(".form-popup").animate(
      {
        right: "-425px",
      },
      500
    );
    $(".AddButton").fadeIn(500);
  });
});
