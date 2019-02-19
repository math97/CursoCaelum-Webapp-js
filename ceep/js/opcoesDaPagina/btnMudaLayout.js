;(function(){

    const btn = document.querySelector('#btnMudaLayout');
    const mural= document.querySelector('.mural');
    
    function mudaTexto(){
    
    /*  if(btn.textContent=='Blocos'){
            btn.textContent='Linhas'
        }
        else{
            btn.textContent='Blocos'
        } */
    
        btn.innerText=='Linhas'?btn.textContent='Blocos':btn.textContent='Linhas'
    
    }
    
    
    
    function mudaLayout(){
    
        mural.classList.toggle('mural--linha')
       // mural.classList.contains('mural--linha')?mural.classList.remove('mural--linhas'):mural.classList.add('mural--linhas')
    
    
       /*     if(mural.classList.contains('mural--linha')){
            //remove
            mural.classList.remove('mural--linha')
        }
        else{
            mural.classList.add('mural--linha')
        } */
    }
    
    //possibilidade de chamar duas funções em uma
    /* btn.onclick = ()=>{
        mudaLayout();
        mudaTexto();
    } */
    
    //duas funções em uma usando outro tipo de declaração anônima
    /* btn.onclick=function(){
        mudaLayout();
        mudaTexto();
    } */
    
    //melhor maneira de executar mais de uma função no botao
    btn.addEventListener('click',mudaTexto);
    btn.addEventListener('click',mudaLayout);
    
    btn.classList.remove('no-js');

})()    
