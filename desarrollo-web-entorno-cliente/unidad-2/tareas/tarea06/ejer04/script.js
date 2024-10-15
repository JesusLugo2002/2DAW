const realms = Array.from(document.getElementsByClassName("realm"))
realms.forEach(realm => {
    realm.addEventListener("click", () => {
        const fixedName = realm.id[0].toUpperCase() + realm.id.slice(1);
        alert(`¡Este es el reino de ${fixedName}!`)
    });
});
