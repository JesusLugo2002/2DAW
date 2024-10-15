const frodoRing = document.getElementById("frodo")
const text = document.getElementById("title")
frodoRing.addEventListener("click", function(e) {
    text.textContent = "Haz elegido correctamente..."
});