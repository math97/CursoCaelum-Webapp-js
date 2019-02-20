;(function(){
    const form=document.querySelector('.formNovoCartao')

    form.classList.remove('no-js')

    form.addEventListener('submit',(event)=>{
        event.preventDefault();


        const textarea= form.querySelector('.formNovoCartao-conteudo');
        const value=textarea.value.trim();
        const isTextAreaVazio=value=="";

        

        if(isTextAreaVazio){
            //cria elemento e adiciona classe
            const msgErroEl= document.createElement('h3')
            msgErroEl.classList.add('formNovoCartao-msg')

            //passa um valor e insere elemento no html
            msgErroEl.textContent="Preencha algo"
            textarea.insertAdjacentElement('afterend',msgErroEl)  

            msgErroEl.addEventListener('animationend',function(){
                this.remove()
            })
        }else{

            const cartao = document.createElement('article');
            cartao.classList.add('.cartao')
            cartao.textContent=value
            
            document.querySelector('.mural').insertAdjacentElement('beforeend',cartao)  


              
        }
        
        

        //console.log(event)
    })





})()