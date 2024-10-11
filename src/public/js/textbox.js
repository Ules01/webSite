// Sélectionne tous les boutons "Plus"
const buttons = document.querySelectorAll('.more-btn');

// Ajoute un événement de clic sur chaque bouton
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const textBox = button.parentElement; // Trouve le parent qui est la boîte de texte
    textBox.classList.toggle('expanded'); // Ajoute/enlève la classe 'expanded'
    button.textContent = textBox.classList.contains('expanded') ? 'Moins' : 'Plus'; // Change le texte du bouton
  });
});