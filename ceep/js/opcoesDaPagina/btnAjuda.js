;(function(){
    document.querySelector('#btnAjuda');

    btnAjuda.classList.remove('no-js')

    btnAjuda.addEventListener('click',()=>{
        let listaAjuda=[{conteudo:'oi',cor:'pink'},
                        {conteudo:'tchau',cor:'blue'},
                        {conteudo:'MPNSM',cor:'green'},
                        {conteudo:'#descubra',cor:'red'}
                    ];

/*         lista.forEach(item => {
            console.log(item);
        }); */

        let cartoesAjuda = [];
        for(const list of listaAjuda){
            cartoesAjuda.push(criarCartao(list));
        }
        
        
        



        
    })



})()