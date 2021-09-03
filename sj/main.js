//comprovando se esta ok
document.addEventListener('DOMContentLoaded' , function(){
    console.log("this work");

    // mostrarError();
    document.getElementById("buttomSave").onclick = createRecordatorio;
});
// verificar se a texto
function textValid(texto){
    if(texto == null || texto == "" || texto.lenght < 1 ){
        return false;
    }else {
        return true;

    } 
}

// funcao erro

function mostrarError(){
    var html = "";
    html += '<div class="alert alert-danger" role="alert">';
    html += 'Please insert a thing';
    html += '</div>';

    document.getElementById('error').innerHTML = html;
    
} 

// funcao limpar error

function limparError(){
    document.getElementById('error').innerHTML = "";
}

// fomcao criar lembrete

function createRecordatorio(){
    var conteudoTextArea = document.getElementById("texto").value;
    if(!textoValido(conteudoTextArea)){
        mostrarError();
    }
    limparError();
    
// criar variaveis

var referencia = new Date();
var Id = referencia.getTime();
var data = refencia.toLocalDateStraing();
var texto = conteudoTextArea;
}

// joson

var recordatorio = {"id": id, "data": data. "texto": texto};

// funcao para provar os lembretes

comprovarRecordatorio(recordatorio);

 function comprovarRecordatorio(recordatorio){
     var recordatorioExistendes = localStorage.getItem("recordadtorio");
     if(recordatorioExistendes == null || recordatorioExistendes == ""){
     var recordatorios
 = [];
     recordatorios.push(recordatorio);

    //  save
    saveRecordatorios(recordatorios);
     }
 }


