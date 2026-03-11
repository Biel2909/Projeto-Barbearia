
var nome = document.getElementById("nome").value;
var data = document.getElementById("data").value;
var hora = document.getElementById("hora").value;

function salvar(event){
    event.preventDefault();
    if(nome !=="" && data !=="" && hora !==""){
        
        var nome = document.getElementById("nome").value;
        var data = document.getElementById("data").value;
        var hora = document.getElementById("hora").value;
        text = 'Agendamento salvo com sucesso! Nome: ' + nome + ' Data: ' + data + '   Hora: ' + hora;
        document.getElementById("teste").innerHTML = `
            <div = "principal">
                <div id = "agen">
                    Cocluido: ${text}
                </div>
            </div>`;    
                
    }
    else{

        alert("Por favor, preencha todos os campos antes de salvar o agendamento."); 
    }
}
function mostrarResultado(){
    
    if(nome !=="" && data !=="" && hora !==""){
        var nome = document.getElementById("nome").value;
        var data = document.getElementById("data").value;
        var hora = document.getElementById("hora").value;
        text = 'Confirmacão do corte: ' + nome + ' Data: ' + data + '   Hora: ' + hora;
        document.getElementById("confirmacao").innerHTML = text;
    }   
    else{
        error = "Nenhum agendamento encontrado!";
        document.getElementById("confirmacao").innerHTML = error;
    }
}