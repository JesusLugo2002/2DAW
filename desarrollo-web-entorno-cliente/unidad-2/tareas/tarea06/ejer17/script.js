const missions = document.getElementsByClassName("mission")

for (let mission of missions) {
    mission.addEventListener("click", function(e) {
        mission.classList.add("completed");
    });
}