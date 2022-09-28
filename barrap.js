console.log(1);

let ul = document.querySelector(".ullista");
ul.hidden = true;

function barSearch() {
  let text = document.getElementById('txtBusca').value
  text = text.toLowerCase();
  let li = document.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    if (!li[i].innerHTML.toLowerCase().includes(text)) {
      li[i].style.display = "none";
    } else {
      li[i].style.display = "list-item";
      //li[i].hidden = false;
      ul.hidden = false;
    }
  }
}

function addLi(elemento){
        if(elemento==""){
          alert("Informe a pesquisa!");
          document.getElementById("txtAdd").focus();
        }else{
          let lista = document.querySelector(".ullista");
          let novaLista = document.createElement("li");
              novaLista.textContent = elemento;
              //novaLista.hidden = true;
              lista.appendChild(novaLista);
        }
}