const heroSelector = document.getElementById("hero-selector")
const text = document.getElementById("result-text")

heroSelector.addEventListener("change", function(e) {
    switch (heroSelector.value) {
        case "spiderman":
            text.textContent = "Spiderman has his spider web!"
            break;
        case "ironman":
            text.textContent = "Ironman has his advanced technology!"
            break;
        case "hulk":
            text.textContent = "Hulk has his super strength and lettuce color skin!"
            break;
        case "captain-america":
            text.textContent = "Captain America has his shield"
            break;
        case "dr-strange":
            text.textContent = "Doctor Strange has his infinity stone!"
            break;
        case "black-widow":
            text.textContent = "Black Widows has her speed"
            break;
        default:
            break;
    }
});