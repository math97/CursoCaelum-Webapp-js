;(()=>{
    'use strict';
    const bt = document.querySelector('.botaoSync');

    bt.classList.remove('no-js');

    bt.addEventListener('click',function(){


        bt.classList.add('botaoSync--esperando')
        bt.classList.remove('botaoSync--sincronizado')
        let cartoes=document.querySelectorAll('.cartao');
        
        let dados=[];
        cartoes.forEach(cartao=>{
            if(cartao.classList.contains('ajuda')){


            }else{
            const conteudo=cartao.querySelector('.cartao-conteudo').innerHTML;
            const cor=cartao.style.backgroundColor;
            dados.push({conteudo,cor});
            }
        })
        
        
        const dadosUser={
            usuario:'matheus',
            cartoes:dados
        };
  
        const req=new XMLHttpRequest();
        req.open('POST','http://ceep.herokuapp.com/cartoes/salvar');

        req.setRequestHeader('Content-Type','application/json');
        req.responseType='json',
        req.send(JSON.stringify(dadosUser));
        req.addEventListener('load',()=>{
            console.log(req.response)
            bt.classList.replace('botaoSync--esperando','botaoSync--sincronizado')
        })

        req.addEventListener('error',function(){
            bt.classList.replace('botaoSync--esperando','botaoSync--deuRuim')
        })

    })


})()