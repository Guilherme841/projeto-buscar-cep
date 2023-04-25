const cep = document.getElementById("cep");
const botao = document.getElementById("buscar");
const cepp = document.getElementById("cepp");
const bairro = document.getElementById("bairro")
const rua = document.getElementById("rua");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const ddd = document.getElementById("ddd");


botao.addEventListener("click", function() {
  const cepBuscado = cep.value;

  fetch(`https://viacep.com.br/ws/${cepBuscado}/json/`)
  .then(response => response.json())
  .then(data => {
    if (data.erro) {
      alert("CEP não encontrado!")
    } else {
      const localidade = data.localidade;
      const uf = data.uf;
      const bairroo = data.bairro;
      const logradouro = data.logradouro;
      const dddd = data.ddd;

      cepp.innerHTML = `Cep pesquisado: ${cepBuscado}.`
      rua.innerHTML = `Rua: ${logradouro}.`
      cidade.innerHTML = `Cidade: ${localidade}.`
      estado.innerHTML = `Estado: ${uf}.`
      bairro.innerHTML = `Bairro: ${bairroo}.`
      ddd.innerHTML = `DDD: ${dddd}.`
    }
  })
})