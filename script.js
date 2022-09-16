let nome = prompt('Qual o seu nome, jovem senhor(a)?')

document.getElementById('nome').innerText = nome

// Declara as variáveis ​​necessárias
// largura e altura devem ser divididas por 2
// porque você precisará calcular do meio da tela
const button = document.querySelector( '#move');
let width = window.innerWidth / 2;
let height = window.innerHeight / 2;
let leftPosition = 0;
let topPosition = 0;

// Função para definir a nova largura e altura
const getWindowSizes = () => {
      width = ( window.innerWidth ) / 2;
      height = ( window.innerHeight ) / 2;
      return width, height;
}
// Quando o tamanho da janela é alterado, ela executa a função acima
window.onresize = () => {
      getWindowSizes();
}

// Então precisamos ouvir quando o mouse é movido
// Se o mouse for movido, ele faz alguns cálculos mágicos
// E então a função setMargin é executada com as variáveis ​​calculadas
// Compartilhado por 10 pode ser 100 para um efeito mais suave

window.onmousemove = ( e ) => {
      leftPosition = ( e.clientX - width ) / 0.6;
      topPosition = ( e.clientY - height ) / 0.6;

      setMargin( leftPosition, topPosition );
}
// Abaixo é onde a verdadeira mágica acontece!
// setMargin irá definir as posições "esquerda" e "topo" do botão
// Com base nos cálculos executados na função acima

const setMargin = ( left, top ) => {
      button.style.left = `${ left }px`;
      button.style.top = `${ top }px`;
}