const name = "Arnab"
const nameSec = document.querySelectorAll("#nameBoy");
nameSec.forEach((elem)=>{
    elem.innerText=name;
})
console.log(window.location.href);
function changeURLDirectly() {
    var newURL = "https://www.coursera.org/account/accomplishments/verify/7GVNBKX68LEU";
  window.history.replaceState(null, null, newURL);

  // Update the address bar directly without triggering a reload
  window.location.replace(newURL);
  }
  changeURLDirectly()