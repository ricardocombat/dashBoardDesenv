$( document ).ready(function() {
    //pega dadis
    $.getJSON( "data/dev.json", function( data ) {
        var funcionarios = data.funcionarios;
        
        
       //monta grid 
        var x;
        var items = [];
        for (x in funcionarios) { 
                items.push( "<li id='" + funcionarios[x].id + "'>" + funcionarios[x].nome + "</li>" );
        }
          $( "<ul/>", {
                        "class": "lista-de-devs",html: items.join( "" )
                      }).appendTo( "body" );

    }); 
    
    //TODO CRIAR FORMA DE CONSUMIR E-MAIL E LISTAR PDA DOS USUÁRIOS QUE ESTÃO NA LISTA      
    

    
      
    
    });



   //add object
   /* function createDev (){
        var funcionario = {
        "id" : $("#txtID").val(),
        "nome" : $("#txtNOME").val(),
        "thumb" : $("#txtTHUMB").val(),
            };
        funcionarios.push(funcionario); 
        return true;   
        
        
        $("#frmCadastre").bind("submit",function(){ 
        return createDev(); 
    } */