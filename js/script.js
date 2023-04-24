const cep = document.getElementById("cep");
const botao = document.getElementById("buscar");
const texto = document.getElementById("texto");

botao.addEventListener("click", function() {
  const cepBuscado = cep.value;

  fetch(`https://viacep.com.br/ws/${cepBuscado}/json/`)
  .then(response => response.json())
  .then(data => {
    if (data.erro) {
      alert("CEP não encontrado!")
    } else {
      const cidade = data.localidade;
      const estado = data.uf;
      const bairro = data.bairro;

      texto.innerHTML = `${cepBuscado}, ${cidade}, ${estado}, ${bairro}`
    }
  })
})