;(function(){
    document.querySelector('#btnAjuda');

    btnAjuda.classList.remove('no-js')

    btnAjuda.addEventListener('click',()=>{
        let listaAjuda=[{conteudo:'oi',cor:'pink'},
                        {conteudo:'tchau',cor:'blue'},
                        {conteudo:'MPNSM',cor:'green'},
                        {conteudo:'#descubra',cor:'red'}
                    ];

        const conexaoApi  =  new XMLHttpRequest();
        conexaoApi.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes');
        conexaoApi.responseType = 'json'
        conexaoApi.send();

        conexaoApi.addEventListener('load',function(){
            console.log(conexaoApi.response);

            listaAjuda=conexaoApi.response.instrucoes
            let cartoesAjuda = [];
            let ajuda='ajuda';
            for(const list of listaAjuda){
                cartoesAjuda.push(criarCartao(list,ajuda));
            }
        })

/*         lista.forEach(item => {
            console.log(item);
        }); */


        
        
        



        
    })



})()