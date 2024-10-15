const button = document.getElementById("button")
const img = document.getElementsByTagName("img")[0]

button.addEventListener("click", function(e) {
    img.style.visibility = img.style.visibility == "hidden" ? "visible" : "hidden";
    button.innerHTML = img.style.visibility == "hidden" ? "Llamar a Batman!" : "Despedir a Batman!"
});