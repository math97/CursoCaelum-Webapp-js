;(function(){
    document.querySelector('#btnAjuda');

    btnAjuda.classList.remove('no-js')

    btnAjuda.addEventListener('click',()=>{
        let lista=['1 ajuda ','2 ajuda','3 ajuda','4 ajuda','#Descubra'];

/*         lista.forEach(item => {
            console.log(item);
        }); */

        let cartoesAjuda = [];
        for(const list of lista){
            cartoesAjuda.push(criarCartao(list));
        }
        
        
        



        
    })



})()