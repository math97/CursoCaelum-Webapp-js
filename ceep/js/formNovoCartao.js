;(function(){
    const form=document.querySelector('.formNovoCartao')

    form.classList.remove('no-js')

    form.addEventListener('submit',(event)=>{
        event.preventDefault();


        let textarea= form.querySelector('[name=formNovoCartao-conteudo]');
        textarea=textarea.value.trim();
        let isTextAreaVazio=textarea.nodeValue=='';
        const titulo= document.createElement('h3')

        if(isTextAreaVazio){
            console.log('preencha algo')
            textarea.placeholder = "Preencha algo"
            titulo.textContent="Preencha algo"
        }else{
            console.log(textarea.value)
            
            titulo.textContent=textarea.value

        }
        form.insertAdjacentElement('beforeend',titulo)

        console.log(event)
    })





})()