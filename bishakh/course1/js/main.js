const name = "Arnab";
const nameSec = document.querySelectorAll("#nameBoy");
nameSec.forEach((elem) => {
  elem.innerText = name;
});
var newURL = "/account/accomplishments/verify/7GVNBKX68LLU";
function changeURLDirectly() {
  window.history.replaceState(null, null, newURL);
}
changeURLDirectly();
