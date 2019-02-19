;(function(){

listaCartoes=document.querySelectorAll('.cartao');

listaCartoes.forEach(cartao => {
    /**Verifica se entrou em focus.Nesse caso Focusin e focosout "borbulha" para os pais*/

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
/*         console.log(event) mostra o event
        console.log(event.target) onde comecou a bolha do evento */
        const elementoSelecionado = event.target
        const isRadioTipo   =   elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
        //cartao.style.backgroundColor = isRadioTipo?elementoSelecionado.value:null nao pode ser ternário pois outra imput iria colocar coll nula
        if (isRadioTipo) {
            cartao.style.backgroundColor=elementoSelecionado.value
        }
    })

    cartao.addEventListener("keydown",function deixaClicarComEnter(event){
        if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key==='Enter' || event.key==='')){
            event.target.click()
        }
    })
    
});

})()