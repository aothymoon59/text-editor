function styleChange(id, value) {
  document.getElementById(id).addEventListener("click", function () {
    let textElement = document.getElementById("mainText");
    textElement.classList.toggle(value);
  });
}
// text Bold
styleChange("bold", "font-bold");
// text Italic
styleChange("italic", "italic");
// text Underline
styleChange("underline", "underline");
// text left
styleChange("alignLeft", "text-left");
// text center
styleChange("alignCenter", "text-center");
// text right
styleChange("alignRight", "text-right");
// text Justify
styleChange("alignJustify", "text-justify");
// text Uppercase
styleChange("uppercase", "uppercase");
// text Justify
styleChange("lowercase", "lowercase");

// change text size
document.getElementById("number").addEventListener("blur", function (e) {
  let fontPx = e.target.value;
  fontPx = parseInt(fontPx);
  let textElement = document.getElementById("mainText");
  textElement.style.fontSize = `${fontPx}px`;
});
// change font color
document.getElementById("color").addEventListener("blur", function (e) {
  console.log(e.target.value);
  let colorCode = e.target.value;
  let textElement = document.getElementById("mainText");
  textElement.style.color = colorCode;
});
