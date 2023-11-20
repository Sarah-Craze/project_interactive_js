let clicNumber = 0; // Variable compteur initialisée à 0

// Le document est rattacher à élément avec un TagName de la ligne 159
// Ajoute un écouteur d'événements au premier élément <footer> trouvé

document.getElementsByTagName("footer")[0].addEventListener("click", function(){
    clicNumber ++; // Incrémente le compteur à chaque clic
	console.log(`Click ${clicNumber}`);
});


// Select the element with the class "navbar-toggler" (the hamburger button)
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function() {
    // Select the element with the ID "navbarHeader" and toggle the "collapse" class
    document.getElementById("navbarHeader").classList.toggle("collapse");
});


// Sélectionnez la première carte
let firstCard = document.getElementsByClassName("card")[0];
// Vérifiez que la carte est correctement sélectionnée en la loggant dans la console
console.log(firstCard);

// Sélectionnez le bouton "Edit" de la première carte
let editButton = firstCard.getElementsByClassName("btn-outline-secondary")[0];
// Vérifiez que le bouton est correctement sélectionné en le loggant dans la console
console.log(editButton);

// Ajoutez un écouteur d'événements au bouton "Edit"
editButton.addEventListener("click", function() {
    // Changez la couleur du texte de la carte en rouge
    firstCard.style.color = "red";
});


// Sélectionnez la deuxième carte
let secondCard = document.getElementsByClassName("card")[1];
// Sélectionnez le bouton "Edit" de la deuxième carte
let editButtonSecondCard = secondCard.getElementsByClassName("btn-outline-secondary")[0];

// Ajoutez un écouteur d'événements au bouton "Edit"
editButtonSecondCard.addEventListener("click", function() {
    // Vérifiez si la couleur actuelle est verte
    if (secondCard.style.color === 'green') {
        // Si la couleur est verte, remettez la couleur par défaut
        secondCard.style.color = '';
    } else {
        // Si la couleur n'est pas verte, changez la couleur en vert
        secondCard.style.color = 'green';
    }
});


// Sélectionnez le premier lien (supposé être le lien vers le fichier Bootstrap) dans le document
let cdn = document.getElementsByTagName("link")[0];

// Ajoutez un écouteur d'événements pour le double-clic sur l'en-tête
document.getElementsByTagName("header")[0].addEventListener("dblclick", function() {
    // Vérifiez si la propriété disabled du lien est true
    if (cdn.disabled === true) {
        // Si elle est true, changez-la à false pour activer le lien
        cdn.disabled = false;
    } else {
        // Si elle est false, changez-la à true pour désactiver le lien
        cdn.disabled = true;
    }
});

