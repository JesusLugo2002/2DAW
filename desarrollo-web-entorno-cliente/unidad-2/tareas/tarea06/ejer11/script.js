class Superman {
    constructor() {
        this.standingImg = "img/standing.jpeg";
        this.flyingImg = "img/flying.png";

        this.createImage();
    }

    createImage() {
        let elem = document.createElement("img");
        elem.setAttribute("id", "superman");
        elem.setAttribute("src", this.standingImg);
        elem.setAttribute("alt", "superman");
        document.body.appendChild(elem)
    }

    fly() {
        const superman = document.getElementById("superman");
        superman.src = this.flyingImg;
        setInterval(function() {
            superman.style.bottom = "100%";
        }, 1000)
    }
}

const superman = new Superman()
const elem = document.getElementById("superman")

elem.addEventListener("click", function() {
    superman.fly()
});