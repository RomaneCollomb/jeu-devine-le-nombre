// Générer un nombre aléatoire entre 1 et 100
let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const resetButton = document.getElementById("resetButton");
const historyList = document.getElementById("historyList");

checkButton.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Entrez un nombre valide entre 1 et 100 !";
        return;
    }

    essais++;
    attempts.textContent = essais;

    let resultText = "";

    if (guess === nombreSecret) {
        message.textContent = `Bravo ! 🎉 Tu as trouvé en ${essais} essais.`;
        message.style.color = "green";
        checkButton.disabled = true;
        resetButton.style.display = "block";
        resultText = "Trouvé 🎉"; // Ajout du message de victoire dans l'historique
    } else if (guess < nombreSecret) {
        resultText = "Trop bas ⬆️";
        message.textContent = resultText;
        message.style.color = "blue";
    } else {
        resultText = "Trop haut ⬇️";
        message.textContent = resultText;
        message.style.color = "red";
    }

    // Ajouter l'essai à l'historique
    const listItem = document.createElement("li");
    listItem.textContent = `${guess} → ${resultText}`;
    listItem.classList.add(guess === nombreSecret ? "trouvé" : guess < nombreSecret ? "trop-bas" : "trop-haut");
    historyList.appendChild(listItem);

    guessInput.value = "";
    guessInput.focus();
});

// Bouton rejouer
resetButton.addEventListener("click", () => {
    nombreSecret = Math.floor(Math.random() * 100) + 1;
    essais = 0;
    attempts.textContent = essais;
    message.textContent = "";
    historyList.innerHTML = ""; // Réinitialise l'historique
    checkButton.disabled = false;
    resetButton.style.display = "none";
});

