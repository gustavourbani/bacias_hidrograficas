function exibirTextoNaTelaId(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
  }

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }


document.getElementById('b1').onclick = function clicarBacia(){
  document.getElementById('a0').removeAttribute('hidden');
  document.querySelector('h2').removeAttribute('hidden');
  document.querySelector('h3').removeAttribute('hidden');
  document.getElementById('a1').removeAttribute('hidden');
  document.querySelector('h1').setAttribute('hidden', true);
  exibirTextoNaTela("h2", "Sub-bacia 1: Parque fontes do Ipiranga");
  exibirTextoNaTelaId("Area", "Área de Drenagem: 3,98 km²");
  exibirTextoNaTelaId("CN", "Curve Number: 80,14");
  exibirTextoNaTelaId("Ctr10", "77,50 mm");
  exibirTextoNaTelaId("Qtr10", "29,60 m³/s");
  exibirTextoNaTelaId("Ctr25", "92,20 mm");
  exibirTextoNaTelaId("Qtr25", "41,70 m³/s");
  exibirTextoNaTelaId("Ctr100", "113,90 mm");
  exibirTextoNaTelaId("Qtr100", "60,90 m³/s");
}

document.getElementById('b2').onclick = function clicarBacia(){
  document.getElementById('a0').removeAttribute('hidden');
  document.querySelector('h2').removeAttribute('hidden');
  document.querySelector('h3').removeAttribute('hidden');
  document.getElementById('a1').removeAttribute('hidden');
  document.querySelector('h1').setAttribute('hidden', true);
  exibirTextoNaTela("h2", "Sub-bacia 2: São Paulo Expo");
  exibirTextoNaTelaId("Area", "Área de Drenagem: 4,63 km²");
  exibirTextoNaTelaId("CN", "Curve Number: 82,83");
  exibirTextoNaTelaId("Ctr10", "77,50 mm");
  exibirTextoNaTelaId("Qtr10", "49,10 m³/s");
  exibirTextoNaTelaId("Ctr25", "92,20 mm");
  exibirTextoNaTelaId("Qtr25", "64,30 m³/s");
  exibirTextoNaTelaId("Ctr100", "113,90 mm");
  exibirTextoNaTelaId("Qtr100", "87,70 m³/s");
}

document.getElementById('b3').onclick = function clicarBacia(){
  document.getElementById('a0').removeAttribute('hidden');
  document.querySelector('h2').removeAttribute('hidden');
  document.querySelector('h3').removeAttribute('hidden');
  document.getElementById('a1').removeAttribute('hidden');
  document.querySelector('h1').setAttribute('hidden', true);
  exibirTextoNaTela("h2", "Sub-bacia 3: Viaduto Min. Aliomar Baleeiro");
  exibirTextoNaTelaId("Area", "Área de Drenagem: 4,91 km²");
  exibirTextoNaTelaId("CN", "Curve Number: 87,33");
  exibirTextoNaTelaId("Ctr10", "77,50 mm");
  exibirTextoNaTelaId("Qtr10", "74,00 m³/s");
  exibirTextoNaTelaId("Ctr25", "92,20 mm");
  exibirTextoNaTelaId("Qtr25", "95,80 m³/s");
  exibirTextoNaTelaId("Ctr100", "113,90 mm");
  exibirTextoNaTelaId("Qtr100", "128,90 m³/s");
}

document.getElementById('b4').onclick = function clicarBacia(){
  document.getElementById('a0').removeAttribute('hidden');
  document.querySelector('h2').removeAttribute('hidden');
  document.querySelector('h3').removeAttribute('hidden');
  document.getElementById('a1').removeAttribute('hidden');
  document.querySelector('h1').setAttribute('hidden', true);
  exibirTextoNaTela("h2", "Sub-bacia 4: Chacara Inglesa e Bosque da Saúde");
  exibirTextoNaTelaId("Area", "Área de Drenagem: 4,08 km²");
  exibirTextoNaTelaId("CN", "Curve Number: 82,65");
  exibirTextoNaTelaId("Ctr10", "77,50 mm");
  exibirTextoNaTelaId("Qtr10", "45,60 m³/s");
  exibirTextoNaTelaId("Ctr25", "92,20 mm");
  exibirTextoNaTelaId("Qtr25", "61,60 m³/s");
  exibirTextoNaTelaId("Ctr100", "113,90 mm");
  exibirTextoNaTelaId("Qtr100", "87,70 m³/s");
}

document.getElementById('b5').onclick = function clicarBacia(){
  document.getElementById('a0').removeAttribute('hidden');
  document.querySelector('h2').removeAttribute('hidden');
  document.querySelector('h3').removeAttribute('hidden');
  document.getElementById('a1').removeAttribute('hidden');
  document.querySelector('h1').setAttribute('hidden', true);
  exibirTextoNaTela("h2", "Sub-bacia 5: Museu do Ipiranga até Rio Tamanduateí");
  exibirTextoNaTelaId("Area", "Área de Drenagem: 7,16 km²");
  exibirTextoNaTelaId("CN", "Curve Number: 84,04");
  exibirTextoNaTelaId("Ctr10", "77,50 mm");
  exibirTextoNaTelaId("Qtr10", "93,70 m³/s");
  exibirTextoNaTelaId("Ctr25", "92,20 mm");
  exibirTextoNaTelaId("Qtr25", "41,70 m³/s");
  exibirTextoNaTelaId("Ctr100", "113,90 mm");
  exibirTextoNaTelaId("Qtr100", "170,70 m³/s");
  }

