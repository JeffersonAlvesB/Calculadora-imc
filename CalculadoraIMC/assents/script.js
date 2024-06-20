//Calculando Imc
const Calcular = document.querySelector(".calcular");
Calcular.addEventListener("click", (event) => {
  event.preventDefault();

  let altura = document.querySelector(".altura").value;
  let peso = document.querySelector(".peso").value;

  // Verificando se os valores são positivos
  if (altura <= 0 || peso <= 0) {
    alert("Altura e peso devem ser valores positivos.");
    return;
  }

  // Verificando peso razoavel para o calculo
  if (altura < 0.2 || altura > 3 || peso < 10 || peso > 300) {
    alert("Altura e peso devem estar dentro do intervalo aceitável.");
    return;
  }

  let IMC = peso / (altura * altura);
  let resultado = document.querySelector(".resultado");

  if (IMC < 16) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Baixo peso(grau I)`;
    resultado.style.display = "block";
  } else if (IMC >= 16 && IMC <= 16.99) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Baixo peso(grau II)`;
    resultado.style.display = "block";
  } else if (IMC >= 17 && IMC <= 18.49) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Baixo peso(grau III)`;
    resultado.style.display = "block";
  } else if (IMC >= 18.5 && IMC <= 24.99) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Peso adequado`;
    resultado.style.display = "block";
  } else if (IMC >= 25 && IMC <= 29.99) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Sobrepeso`;
    resultado.style.display = "block";
  } else if (IMC >= 30 && IMC <= 34.99) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Obesidade(grau I)`;
    resultado.style.display = "block";
  } else if (IMC >= 35 && IMC <= 39.99) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Obesidade(grau II)`;
    resultado.style.display = "block";
  } else if (IMC >= 40) {
    resultado.innerHTML = `Seu imc é ${IMC.toFixed(
      2
    )}, Você está com Obesidade(grau III)`;
    resultado.style.display = "block";
  }
});

//Dark mode
let sol = document.querySelector(".sol_img");
let lua = document.querySelector(".lua_img");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let tituloIMG = document.querySelector(".titulo_img");
let modo = document.querySelector(".modo");

sol.addEventListener("click", function () {
  body.classList.add("dark_mode");
  container.classList.add("container_darkmode");
  tituloIMG.classList.add("tituloImg_darkmode");
  modo.classList.add("modo_light");
  sol.style.display = "none";
  lua.style.display = "block";
  modo.innerHTML = "Modo Escuro: Desativado";
});

lua.addEventListener("click", function () {
  body.classList.remove("dark_mode");
  container.classList.remove("container_darkmode");
  tituloIMG.classList.remove("tituloImg_darkmode");
  modo.classList.remove("modo_light");
  sol.style.display = "block";
  lua.style.display = "none";
  modo.innerHTML = "Modo Escuro: Ativado";
});
