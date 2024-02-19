function IDF() {
let T = parseFLoat(prompt('Digite o tempo de recorrência desejado'))
let t = parseFLoat(prompt('Digite o tempo de recorrência desejado'))

let p = 32.77*(t+20)**-0.8780 + 16.10*(t+30)**-0.9306 * (-0.4692 - 0.8474*Math.log(T/(T-1)))

}