document.addEventListener("DOMContentLoaded", function () {
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");
  const highContrastButton = document.getElementById("high-contrast");
  const toggleAnimationsButton = document.getElementById("toggle-animations");

  // Aumentar fonte
  increaseFontButton.addEventListener("click", function () {
    document.body.classList.add("increase-font");
    document.body.classList.remove("decrease-font");
  });

  // Diminuir fonte
  decreaseFontButton.addEventListener("click", function () {
    document.body.classList.add("decrease-font");
    document.body.classList.remove("increase-font");
  });

  // Ativar/desativar contraste alto
  highContrastButton.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
  });

  // Ativar/desativar animações
  toggleAnimationsButton.addEventListener("click", function () {
    document.body.classList.toggle("no-animations");
  });

  // Animação fade-in nas seções
  const sections = document.querySelectorAll("section");

  // Função para verificar se a seção está visível
  function checkVisibility() {
    sections.forEach((section) => {
      const position = section.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        section.classList.add("fade-in");
      }
    });
  }

  // Verifica a visibilidade na carga da página
  checkVisibility();

  // Adiciona evento de scroll para verificar a visibilidade das seções
  window.addEventListener("scroll", checkVisibility);
});
