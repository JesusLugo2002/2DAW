const darkBtn = document.getElementById("dark-side")
const lightBtn = document.getElementById("light-side")

darkBtn.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
})

lightBtn.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
})