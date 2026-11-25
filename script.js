function afficherLivres(tableauDeFilms) {
    liste.innerHTML = "";

    tableauDeFilms.forEach(function (livre) {
        const carte = document.createElement("div");
        carte.className = "col-md-4 mb-3";
        carte.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-text">Titre : ${livre.titre}</h3>
                    <p class="card-text">Genre : ${livre.genre}</p>
                </div>
            </div>`;
        liste.appendChild(carte);
    });
}

fetch("livres.json")
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (livres) {
        afficherLivres(livres);

        const bouton = document.getElementById("roman");

        bouton.addEventListener("click", function () {
            const romans = livres.filter(function (livre) {
                return livre.genre === "Roman";
            });
            afficherLivres(romans);
        });
    });
