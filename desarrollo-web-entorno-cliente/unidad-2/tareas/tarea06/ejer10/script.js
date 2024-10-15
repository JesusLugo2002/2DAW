const button = document.getElementById("button")
const container = document.getElementsByTagName("img")[0]

button.addEventListener("click", function() {
    button.remove();
    container.src = "img/batsignal.png";
});