const dateE1 = document.getElementById("date");
const submitE1 = document.getElementById("submit");
const resultatE1 = document.getElementById("resultat");



/*Le programme examine cette fonction en premier (pour récupérer le val_age), puis repasse une 2eme fois après la 2eme fonction.
Elle sert à récupérer la valeur de l'âge obtenu grâce à la première fonction pour la ressortir en HTML.*/
function calcul_age() {
    const val_age = dateE1.value;
    if (val_age === "") {
        alert("Rentre un âge");
    } 
    else {
        const age = getAge(val_age);
    resultatE1.innerText = `Ton âge est de ${age} ans`;
}
}




/* Il me semble que le programme examine cette fonction en premier. 
Cette fonction sert à soustraire la date actuelle à la date de naissance de la personne.*/
function getAge(val_age) {
    const currentDate = new Date();
    const date_age = new Date(val_age);
    let age = currentDate.getFullYear() - date_age.getFullYear();
    const month = currentDate.getMonth() - date_age.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < date_age.getDate())) {
        alert("Rentre un âge correct");
    }

    return age;
}


submitE1.addEventListener("click", calcul_age)
