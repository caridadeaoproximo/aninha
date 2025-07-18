document.addEventListener("DOMContentLoaded", function () {
  // Get all donation buttons
  const donationButtons = document.querySelectorAll(".post-button2");

  // Add click event listener to each button
  donationButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Não faz mais nada, deixa o link padrão funcionar
      // Ou seja, não chama generatePix nem previne o default
    });
  });
});
