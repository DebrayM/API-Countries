

    let url = 'https://restcountries.com/v3.1/all';

    //fetch communique avec l'API par l'intermediaire de l'URL
    //method get par defaut
    fetch(url)

    //récupération de la promesse de réponse
    //formatage de la réponse en JSON
    .then(response => response.json())
    .then(posts => 
    {
        //initialise la variable pays
        let pays = "";
        posts.forEach(country => {
            pays = pays + '<option value="'+ country.name.common +'">';
            pays = pays + country.name.common;
            pays = pays + "</option>";
        });
        // afficher la structure créée dans la sélection //
        document.getElementById("countries").innerHTML = pays;
    })
    .catch(error => alert('Erreur:'+ error))



function paysSelect() {

    //Quel est le nom du pays sélectionné
    let pays = document.querySelector('#country').value;
    // recherche les infos du pays sélectionné
    let url = 'https://restcountries.com/v3.1/name/';
    url = url + pays;
    url = url + '?fullText=true';

    //fetch communique avec l'API par l'intermediaire de l'URL
    fetch(url)
    //récupération de la promesse de réponse
    //formatage de la réponse en JSON
    .then(response => response.json())
    .then(post => 
    {
        //console.log(post[0].flags.png);
        //initialise les variables de récupération des données
        let divpays = "";
        //récupère les données
        divpays = divpays +'<div>';
        divpays = divpays +'<p>Capitale : ' + post[0].capital + '</p>';
        divpays = divpays +'<p>Population :' + post[0].population + '</p>';
        divpays = divpays +'<p>Drapeau : <img src="' + post[0].flags.png + '" alt="drapeau"></p>';
        divpays = divpays +'</div>';
        // afficher la structure créée dans la sélection //
        document.querySelector('#InfoPays').innerHTML = divpays;

    })

    .catch(error => alert('Erreur:'+ error))
}