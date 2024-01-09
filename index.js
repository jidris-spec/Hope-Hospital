function openDepartment(departmentName, button, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(departmentName).style.display = "block";
  button.style.backgroundColor = color;
}
// Get the element with id="Open" and click on it
document.getElementById("Open").click();
