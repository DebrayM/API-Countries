/**
 * API Countries
 */

// fetch() est en méthode GET par défaut
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        // console.log(countries);
        // Récupération de l'élément HTML "datalist"
        let datalist = document.querySelector('#countries');
        
        // Boucle sur les pays récupérés
        countries.forEach(countrie => {
            // Création d'un élément HTML "option"
            let option = document.createElement('option');
            
            // Ajoute le nom du pays dans l'attribut "value"
            option.value = countrie.name.common;

            // Ajoute le nom du pays à afficher au visiteur
            option.innerText = countrie.name.common;
            
            // Insère l'élément "option" dans le datalist
            datalist.appendChild(option);
        });
    })

    // Écouteur d'évènement sur le formulaire
document.querySelector('form').addEventListener('submit', viewCountrie);

function viewCountrie(event) {
    // Empêche le formulaire de rafraîchir la page
    event.preventDefault();

    // Récupère la valeur contenue dans le champ "input"
    let country = document.querySelector('input').value;

    // Passe le nom du pays dans l'URL de l'API
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then(response => response.json())
        .then(countrie => {
            // console.log(countrie);

            // Récupère le conteneur des mes infos
            let infos = document.querySelector('#country-info');

            // Récupération de l'objet contenu dans le tableau de retour
            let country = countrie[0];

            /**
             * [
             *  0: {
             *      capital: 'Paris',
             *      ...
             *  }
             * ]
             */

            infos.innerHTML = `
                <h2>Informations</h2>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population}</p>
                <p>Drapeau: <img src="${country.flags.png}" alt="Drapeau"></p>
            `;
        })
        .catch(error => {
            let infos = document.querySelector('#country-info');
            infos.innerText = 'Non trouvé';
        });
}