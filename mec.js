$(document).ready( function(){
      
    $('.fade').each( function(i){

    //DELAY TEMPO PARA EXECUTAR DEPOIS QUE A PAGINA CARREGA
    //ANIMATE TEMPO DE ANIMAÇÃO
    $(this).delay(5000).animate({'opacity':'1'},1500);

    }); 
      
});