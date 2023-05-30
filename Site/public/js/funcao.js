// sessão
function validarSessao() {
    // aguardar();
    var idUserAtual = sessionStorage.ID_USUARIO;    
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login/index.html";
    }
}

function mostrar_dados(){


    var mostrar_email = document.getElementById("emailUser");
    var email = sessionStorage.EMAIL_USUARIO;
    mostrar_email.innerHTML = email;


    var mostrar_cpf = document.getElementById("cpfUser");
    var cpf = sessionStorage.CPF_USUARIO;
    mostrar_cpf.innerHTML = cpf;

    sessionStorage.TIPO_USUARIO ;

    sessionStorage.NIVEL_ACESSO_USUARIO;
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login/index.html";
}

function limparSessao_telas() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../../login/index.html";
}




