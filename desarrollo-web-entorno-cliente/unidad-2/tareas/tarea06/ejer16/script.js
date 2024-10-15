const password = document.getElementById("password")
const submit = document.getElementById("submit")
const text = document.getElementById("result-text")

submit.addEventListener("click", function(e) {
    if (password.value == "Vengadores") {
        text.textContent = "Assemble!"
    } else {
        alert("Incorrect password!")
        password.value = ""
    }
});