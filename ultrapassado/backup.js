
alert ('Calcule a vazão para a chuva desejada');
let T = parseFloat(prompt('Digite o tempo de recorrência desejado'));
let t = parseFloat(prompt('Digite o tempo de recorrência desejado em minutos: '));
        
let i = (32.77*(t+20)**(-0.8780)) + (16.10*(t+30)**(-0.9306)) * (-0.4692 - 0.8474*(Math.log(Math.log(T/(T-1)))));
let P = t*i
console.log(P);    

let A = parseFloat(prompt('Digite a área de drenagem em km²'));
let C = parseFloat(prompt('Digite o coeficiente de runoff '));
let Q = (A*C*(i*60))*0.278;
console.log(Q); 