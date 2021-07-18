function GetUrl(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url,false);
    request.send();

    return request.responseText
}

function main(){
let data = GetUrl("http://localhost:21263/titulos")
let titulos = JSON.parse(data);
let tabela = document.getElementById("tabela");
let opcao = situacao();
let dados="";

console.log(opcao);
console.log(titulos);

for (var i =0; i < titulos.length; i++ ) {
  if (titulos[i].situacao==opcao){
  dados += titulos[i];
  }
}



titulos.forEach(element => {
  let linha = crialinha(element);
  tabela.appendChild(linha);
});

}

function situacao(){
var select = document.getElementById('situacao_cliente');
var value = select.options[select.selectedIndex].value;

return value;

}


function crialinha(usuario) {



    let linha = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdData_vencimento = document.createElement("td");
    let tdDescricao = document.createElement("td");
    let tdValor = document.createElement("td");
    let tdSituacao = document.createElement("td");
  
  
      
      tdNome.innerHTML = usuario.nome
      tdData_vencimento.innerHTML = usuario.data_vencimento
      tdDescricao.innerHTML = usuario.descricao
      tdValor.innerHTML = usuario.valor
      tdSituacao.innerHTML = usuario.situacao
  
     
      linha.appendChild(tdNome);
      linha.appendChild(tdData_vencimento);
      linha.appendChild(tdDescricao);
      linha.appendChild(tdValor);
      linha.appendChild(tdSituacao);
    
      return linha;
  }

