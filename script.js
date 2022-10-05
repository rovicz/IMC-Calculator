function Paciente(nomeAtribuido, peso, altura, imc) {
  this.nome = nomeAtribuido;
  imc = peso / (altura * altura)
    if (imc > 18,5 && imc < 25) {
      return console.log(`O paciente ${nomeAtribuido} esta no peso ideal.`)
    }
    else if (imc > 25 && imc < 30) {
      return console.log(`O paciente ${nomeAtribuido} esta com sobrepeso.`)
    }
    else if (imc > 30 && imc < 35) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade I.`)
    }
    else if (imc > 35 && imc < 40) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade II (severa).`)
    }
    else if (imc > 40) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade III (morbida).`)
    }
    else if (imc > 17 && imc < 18.5) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza leve.`)
    }
    else if (imc > 16 && imc < 17) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza moderada.`)
    }
    else if (imc < 16) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza grave.`)
    }
    
}

const Victor = new Paciente('Victor', 70, 1.80); // O paciente Victor esta no peso ideal.
const Jean = new Paciente('Jean', 87, 1.60); // O paciente Jean esta com obesidade I.
const Drikas = new Paciente('drk', 55, 1.70); // O paciente drk esta no peso ideal.
const Leo = new Paciente('Leo', 68, 1.74); // O paciente Leo esta no peso ideal.