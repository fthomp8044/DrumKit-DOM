let numberOfDrumButtons = document.querySelectorAll(".drum").length;
//set a variable to let the querySelectorAll of the drums by the length of how many drums we had.
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    alert("This button has been clicked");
  }


}
