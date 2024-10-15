class Villain {
    constructor(name, plan) {
        this.name = name
        this.plan = plan

        document.getElementById("plan-text").innerHTML = this.plan
    }

    changePlan(newPlan) {
        this.plan = newPlan
    }
}

const joker = new Villain("Joker", "kill Batman")

const button = document.getElementById("button")
button.addEventListener("click", function(e) {
    joker.changePlan("not kill Batman")
    document.getElementById("plan-text").innerHTML = joker.plan
});
