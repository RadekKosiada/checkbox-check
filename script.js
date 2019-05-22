function loading() {
  window.open('http://www.example.com', '_blank');
}

//export from html to JS this function
function confirm () {
  alert('Are you sure you want to remove the selected companies?')
}

// DISABLING CHECKBOXES
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var exportButton = document.getElementById("export");
var removeCompanyButton = document.getElementById("remove-company");

exportButton.addEventListener("click", checkForCheck);
removeCompanyButton.addEventListener("click", checkForCheck);

console.log("all boxes", checkboxes, "checkedOne", checkedOne);

//add function to html and here 
function handleChange(checkbox) {
  if(checkbox.checked == true){
    exportButton.addEventListener("click", loading);
    removeCompanyButton.addEventListener("click", confirm);
  } else {
    exportButton.removeEventListener("click", loading);
    removeCompanyButton.removeEventListener("click", confirm);
 }
}

function checkForCheck() {
  //move this array to inside of the function;
  var checkedOne = Array.prototype.slice
  .call(checkboxes)
  .some(function(box) {
    return box.checked;
  });
  if (!checkedOne) {
    console.log("all boxes", checkboxes, "checkedOne", checkedOne);
    exportButton.removeEventListener("click", loading);
    removeCompanyButton.removeEventListener("click", confirm);

    alert("Please check at least one box");
  } 
};
    