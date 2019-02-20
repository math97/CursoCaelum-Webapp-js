;(function () {
    const form = document.querySelector('.formNovoCartao')

    form.classList.remove('no-js')

    form.addEventListener('submit', (event) => {
        event.preventDefault();


        const textarea = form.querySelector('.formNovoCartao-conteudo');
        const value = textarea.value.trim();
        const isTextAreaVazio = value == "";

        if (isTextAreaVazio) {

            const msgErroEl = document.createElement('h3')
            msgErroEl.classList.add('formNovoCartao-msg')
            msgErroEl.textContent = "Preencha algo"
            textarea.insertAdjacentElement('afterend', msgErroEl)

            msgErroEl.addEventListener('animationend', function () {
                this.remove()

            })
        } else {
            const cartao = criarCartao(value);
            form.reset();
            cartao.focus();
            
        }

    })
})()

    /* ;(function () {
        const form = document.querySelector('.formNovoCartao')
    
        let cartoes = document.querySelectorAll('.cartao')
    
        form.classList.remove('no-js')
    
        let contador = cartoes.length;
    
        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
    
            const textarea = form.querySelector('.formNovoCartao-conteudo');
            const value = textarea.value.trim();
            const isTextAreaVazio = value == "";
    
    
    
    
            if (isTextAreaVazio) {
                //cria elemento e adiciona classe
                const msgErroEl = document.createElement('h3')
                msgErroEl.classList.add('formNovoCartao-msg')
    
                //passa um valor e insere elemento no html
                msgErroEl.textContent = "Preencha algo"
                textarea.insertAdjacentElement('afterend', msgErroEl)
    
                msgErroEl.addEventListener('animationend', function () {
                    this.remove()
    
                })
            } else {
    
                const cartao = document.createElement('article');
                cartao.classList.add('cartao');
    
                //cartao.setAttribute('tabindex',0);
                cartao.tabIndex=0;
    
                //cartao.textContent=value; não é mais utilizado pq o inner vai sobrepor
    
    
            //   cartoes.forEach(card => {
            //         contador += 1
            //     });
    
                contador+=1;
    
              //cartao.setAttribute('id',`cartao${contador}`);
                cartao.id=`cartao_${contador}`;
    
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
              <p class="cartao-conteudo" contenteditable tabindex="0">${value}</p>`
    
                cartao.addEventListener('focusin', (evento) => {
                    // console.log(evento)
                    cartao.classList.add('cartao--focado')
                })
    
                //focusout
                cartao.addEventListener('focusout', (evento) => {
                    // console.log(evento)
                    cartao.classList.remove('cartao--focado')
    
                })
                //change nas cores
                cartao.addEventListener('change', function mudaCor(event) {
                    //         console.log(event) mostra o event
                    //         console.log(event.target) onde comecou a bolha do evento
                    const elementoSelecionado = event.target
                    const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
                    //cartao.style.backgroundColor = isRadioTipo?elementoSelecionado.value:null nao pode ser ternário pois outra imput iria colocar coll nula
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
                textarea.focus()
    
                document.querySelector('.mural').insertAdjacentElement('beforeend', cartao);
    
                form.reset();
    
    
    
    
    
            }
    
    
    
            //console.log(event)
        })
    
    
    
    
    
    })() */



