const dateE1 = document.getElementById("date");
const submitE1 = document.getElementById("submit");
const resultatE1 = document.getElementById("resultat");

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


function getAge(val_age) {
    const currentDate = new Date();
    const date_age = new Date(val_age);
    let age = currentDate.getFullYear() - date_age.getFullYear();
    const month = currentDate.getMonth() - date_age.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < date_age.getDate())) {
        age--;
    }

    return age;
}


submitE1.addEventListener("click", calcul_age)