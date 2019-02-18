/**no caso abaixo alterei o nome do btn para btntrash para nao houver poblema.
 * Função remover para ocasionar em transição e dps remoção do botao
 * usada a IIFE(Immediately Invoked Function Expression)
 */
/* let bntTrash=document.querySelector('.opcoesDoCartao-remove');

bntTrash.addEventListener('click',()=>{
    const cartao = bntTrash.parentNode.parentNode
    cartao.classList.add("cartao--some")
    cartao.addEventListener("transitionend",function(){
        cartao.remove()
    })
}) */

(function(){
    const btn = document.querySelector('.opcoesDoCartao-remove')
    console.log(btn)
})()