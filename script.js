const handleOnchange = () => {
  var option = document.querySelector("input[name = option]:checked").value;
  document.querySelector(".show")?.classList.replace("show", "hidden"); //hide all show elemnt
  document.getElementById(option).classList.replace("hidden", "show"); //show only the selected option

  // Reset styles for all boxes
  document
    .querySelectorAll(".second-box, .third-box, .fourth-box")
    .forEach((box) => {
      box.classList.remove("active"); // Remove active class
      box.classList.add("inactive"); // Add inactive class
    });

  // Change the class for the selected box
  const selectedBox = document
    .querySelector(`input[name='option'][value='${option}']`)
    .closest(".second-box, .third-box, .fourth-box");
  if (selectedBox) {
    selectedBox.classList.add("active"); // Add active class to the selected box
  }

  console.log("Selected Option:", option);
};
