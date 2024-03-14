// Seleciona todos os elementos com a classe 'parallax'
var parallaxElements = document.querySelectorAll('.parallax');

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', function() {
  // Para cada elemento parallax
  parallaxElements.forEach(function(el) {
    // Calcula a taxa de parallax (por exemplo, 0.3 significa que o elemento se moverá a 30% da velocidade de rolagem)
    var rate = 0.6;

    // Define a posição do background do elemento com base na posição de rolagem da janela
    var pos = window.pageYOffset * 1;

    // Aplica a posição ao elemento
    el.style.backgroundPosition = 'center ' + pos + 'px';
  });
});