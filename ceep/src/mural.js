;(()=>{


$.ajax({
    url:'http://ceep.herokuapp.com/cartoes/carregar',
    method:'GET',
    dataType:'jsonp',
    data:{usuario:'matheus'},
    sucess: function(resposta){
        console.log(resposta.cartoes);
    }
})

/*     const req =  new XMLHttpRequest;
    req.open('GET','http://ceep.herokuapp.com/cartoes/carregar');
    req.responseType='json';
    req.setRequestHeader('Content-Type','application/json');
    req.send(JSON.stringify({usuario:'matheus'}));

    req.addEventListener('load',function(){

    })
 */

})()