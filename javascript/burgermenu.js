
// The showMenu function uses the translateX property to reposition an element in the horizontal plane, in order for the dropdown menu to come in
function showMenu() {
    document.getElementById("dropdownMenu").style.transform = "translateX(0)";
  }
  // The closeMenu function uses the translateX property again, however this time it pushes to dropdown to the right and out of the user's sight
  function closeMenu() {
    document.getElementById("dropdownMenu").style.transform = "translateX(200px)";
  }