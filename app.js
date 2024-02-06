function exibirTextoNaTelaId(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
  }

exibirTextoNaTelaId("Ctr10", "Chuva de Projeto TR 10 anos:77,5 mm")
exibirTextoNaTelaId("Qtr10", "Vazão TR 10 Anos:")
exibirTextoNaTelaId("Ctr25", "Chuva de Projeto TR 25 anos:77,5 mm")
exibirTextoNaTelaId("Qtr25", "Vazão TR 25 Anos:")
exibirTextoNaTelaId("Ctr100", "Chuva de Projeto TR 100 anos:77,5 mm")
exibirTextoNaTelaId("Qtr100", "Vazão TR 100 Anos:")


document.getElementById('b1').onclick = function clicarBacia(){
    document.querySelector('h2').removeAttribute('hidden');
    document.querySelector('h3').removeAttribute('hidden');
    document.getElementById('a1').removeAttribute('hidden');
    document.querySelector('h1').setAttribute('hidden', true);
}


