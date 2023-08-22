function perguntaEndereco(){
    do {
        endereço = prompt("Insira o seu endereço: ");
        confirma = confirm("Seu endereço é: " + endereço);
    } while(!confirma);
    document.write("Seu endereço é " + endereco + ".");
}


function valida(){
    if(document.formulario.busca.value == ""){
        alert("Preencha o campo BUSCA corretamente");
        document.formulario.busca.focus();
        return false;
    }
    if(document.formulario.busca.value.length < 3){
        alert("Informe pelo menos 3 letras!");
        return false;
    }
    return true;
}

function validaData(){
    if(document.formulario.data.value == "" || document.formulario.data.value.length != 10){
        alert("Preencha o campo DATA corretamente");
        document.formulario.data.focus();
        return false;
    }
    expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/\d{4}$/;
    if(document.formulario.data.value.match(expReg) && document.formulario.data.value != ''){
        alert("Data válida");
        return true;
    }
    else{
        alert("Formato inválido de data");
        document.formulario.data.focus();
        return false;
    }
}

function cep(v){
    v.value=v.value.replace(/\D/g,"");
    v.value=v.value.replace(/^(\d{5})(\d)/,"$1-$2");
}

function camposPreenchidos(form){
    if(form.cep.value != "" && form.cep.value.length == 9) {
        return true;
    }
    return false;
}