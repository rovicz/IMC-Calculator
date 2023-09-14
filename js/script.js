const formulario = document.querySelector("#formulario");
const result = document.querySelector(".result");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

function calculatorIMC(event) {
  const calculoIMC = (peso.value / (altura.value * altura.value)).toFixed(2);
  event.preventDefault();

  if (calculoIMC > 18.5 && calculoIMC < 25) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está no <strong>peso ideal</strong>.</span>`;
  } else if (calculoIMC > 17 && calculoIMC < 18.5) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Magreza Leve.</strong></span>`;
  } else if (calculoIMC > 16 && calculoIMC < 17) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Magreza Moderada.</strong></span>`;
  } else if (calculoIMC < 16) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Magreza Grave.</strong></span>`;
  } else if (calculoIMC > 25 && calculoIMC < 30) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Sobrepeso.</strong></span>`;
  } else if (calculoIMC > 30 && calculoIMC < 35) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Obesidade I.</strong></span>`;
  } else if (calculoIMC > 35 && calculoIMC < 40) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Obesidade II (Severa)</strong>.</span>`;
  } else if (calculoIMC > 40) {
    result.innerHTML = `<span>O seu IMC possui um valor de <strong>${calculoIMC}</strong>, isso significa que você está com <strong>Obesidade III (Morbida)</strong>.</span>`;
  }
}

formulario.addEventListener("submit", calculatorIMC);
