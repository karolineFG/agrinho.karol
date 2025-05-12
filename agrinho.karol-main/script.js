
// Função para aumentar ou diminuir o tamanho da fonte
function alterarTamanhoFonte(acao) {
  var body = document.body;

  if (acao === 'aumentar') {
    if (body.classList.contains('grande-fonte')) {
      body.classList.add('muito-grande-fonte');
    } else {
      body.classList.add('grande-fonte');
    }
  } else if (acao === 'diminuir') {
    if (body.classList.contains('muito-grande-fonte')) {
      body.classList.remove('muito-grande-fonte');
    } else if (body.classList.contains('grande-fonte')) {
      body.classList.remove('grande-fonte');
    }
  }
}

// Função para alternar entre o contraste claro e escuro
function alternarContraste() {
  document.body.classList.toggle('contraste-escuro');
}
