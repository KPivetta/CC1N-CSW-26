function calcularIdade() {
  const anoNascimento = document.getElementById("anoNascimento").value;
  const resultado = document.getElementById("resultado");

  const anoAtual = new Date().getFullYear();

  if (anoNascimento === "" || anoNascimento > anoAtual) {
    resultado.style.display = "block";
    resultado.innerHTML = "Digite um ano válido.";
    return;
  }

  const idade = anoAtual - anoNascimento;

  resultado.style.display = "block";
  resultado.innerHTML = `Você tem ${idade} anos.`;
}