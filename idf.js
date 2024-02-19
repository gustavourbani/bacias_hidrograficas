function exibirTextoNaTelaId(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
  }

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }


document.getElementById('b6').onclick = function calcularIDF(){
    ts = document.getElementById('t').value;
    Ts = document.getElementById('T').value;
    t = parseFloat(ts);
    T = parseFloat(Ts);
    i1 = 32.77*((t+20)**(-0.878));
    i2 = (16.1*((t+30)**(-0.9306)));
    i3 = (-0.4692-0.8474*Math.log(Math.log(T/(T-1))));
    i = (32.77*((t+20)**(-0.878))) + ((16.1*((t+30)**(-0.9306)))*((-0.4692-0.8474*Math.log(Math.log(T/(T-1))))));
    P = t*i;
    huff2 = [0.132169184171036, 0.273936158864777, 0.207836474764128, 0.116053209756588, 0.0710081923023539, 0.0530066037620353, 0.0459418695922014, 0.0279323433830245, 0.0240266969757489, 0.0240110305240549, 0.0161735225136696, 0.00790471339038224];
    huff = new Array();
    for (var i = 0; i < 12; i++){
        huff[i] = P*huff2[i];   
    }
  document.getElementById('tabelaidf').removeAttribute('hidden')
  exibirTextoNaTelaId('C10', huff[0]);
  exibirTextoNaTelaId('C20', huff[1]);
  exibirTextoNaTelaId('C30', huff[2]);
  exibirTextoNaTelaId('C40', huff[3]);
  exibirTextoNaTelaId('C50', huff[4]);
  exibirTextoNaTelaId('C60', huff[5]);
  exibirTextoNaTelaId('C70', huff[6]);
  exibirTextoNaTelaId('C80', huff[7]);
  exibirTextoNaTelaId('C90', huff[8]);
  exibirTextoNaTelaId('C100', huff[9]);
  exibirTextoNaTelaId('C110', huff[10]);
  exibirTextoNaTelaId('C120', huff[11]);

  const ctx = document.getElementById('grafico1');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        datasets: [{
          label: 'Chuva em MM',
          data: huff,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }