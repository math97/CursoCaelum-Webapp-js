let cartoes = document.querySelectorAll('.cartao')
let contador = cartoes.length;

function criarCartao(valor) {

    contador++;

    const cartao = document.createElement('article');
    cartao.classList.add('cartao');
    cartao.tabIndex = 0;
    cartao.id = `cartao_${contador}`;

    cartao.innerHTML = ` <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
              <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
  
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
              Padrão
            </label>
  
            <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
              Importante
            </label>
  
            <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
              Tarefa
            </label>

            <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
              Inspiração
            </label>
          </div>
          <p class="cartao-conteudo" contenteditable tabindex="0">${valor}</p>`;

    cartao.addEventListener('focusin', (evento) => {

        cartao.classList.add('cartao--focado')
    })
    cartao.addEventListener('focusout', (evento) => {

        cartao.classList.remove('cartao--focado')

    })
    cartao.addEventListener('change', function mudaCor(event) {


        const elementoSelecionado = event.target
        const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
               if (isRadioTipo) {
            cartao.style.backgroundColor = elementoSelecionado.value
        }
    })

    cartao.addEventListener("keyup", function deixaClicarComEnter(event) {
        if (event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === 'Enter' || event.key === '')) {
            event.target.click()
            console.log(event.target)
        }
    })

    cartao.addEventListener('click', (evento) => {
        console.log(evento)
        isTrash = evento.target.classList.contains('opcoesDoCartao-remove')
        if (isTrash) {
            cartao.classList.add("cartao--some");
            cartao.addEventListener("transitionend", function () {
                this.remove()
            })
        }

    })
 

    document.querySelector('.mural').insertAdjacentElement('beforeend', cartao);

    return cartao;

}

/* 
;(function(){

listaCartoes=document.querySelectorAll('.cartao');


listaCartoes.forEach(cartao => {
    Verifica se entrou em focus.Nesse caso Focusin e focosout "borbulha" para os pais

    //focusin
    cartao.addEventListener('focusin',(evento)=>{
        // console.log(evento)
        cartao.classList.add('cartao--focado')
    })

    //focusout
    cartao.addEventListener('focusout',(evento)=>{
        // console.log(evento)
        cartao.classList.remove('cartao--focado')
        
    })
    //change nas cores
    cartao.addEventListener('change',function mudaCor(event){
    //   console.log(event) mostra o event
    //     console.log(event.target) onde comecou a bolha do evento 
        const elementoSelecionado = event.target
        const isRadioTipo   =   elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
        //cartao.style.backgroundColor = isRadioTipo?elementoSelecionado.value:null nao pode ser ternário pois outra imput iria colocar coll nula
        if (isRadioTipo) {
            cartao.style.backgroundColor=elementoSelecionado.value
        }
    })

    cartao.addEventListener("keyup",function deixaClicarComEnter(event){
        
        if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key==='Enter' || event.key==='')){
            event.target.click()
            console.log(event.target)
        }
    })

    cartao.addEventListener('click',(evento)=>{

      console.log(evento) 
      isTrash=evento.target.classList.contains('opcoesDoCartao-remove')
      if(isTrash){
          cartao.classList.add("cartao--some");
          cartao.addEventListener("transitionend",function(){
              this.remove()
       
          })
      }
    
    })
    
});

})() */