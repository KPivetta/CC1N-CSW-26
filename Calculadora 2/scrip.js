function calcularIdade() {
  const diaNascimento = document.getElementById("diaNascimento").value;
  const mesNascimento = document.getElementById("mesNascimento").value;
  const anoNascimento = document.getElementById("anoNascimento").value;
  const resultado = document.getElementById("resultado");

  const hoje = new Date();

  const diaAtual = hoje.getDate();
  const mesAtual = hoje.getMonth() + 1;
  const anoAtual = hoje.getFullYear();

  if (
    diaNascimento === "" ||
    mesNascimento === "" ||
    anoNascimento === "" ||
    anoNascimento > anoAtual
  ) {
    resultado.style.display = "block";
    resultado.innerHTML = "Digite uma data válida.";
    return;
  }

  let idade = anoAtual - anoNascimento;

  if (
    mesAtual < mesNascimento ||
    (mesAtual === Number(mesNascimento) &&
      diaAtual < Number(diaNascimento))
  ) {
    idade--;
  }

  resultado.style.display = "block";
  resultado.innerHTML = `Você tem ${idade} anos.`;
}