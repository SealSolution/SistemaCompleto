alerta.innerHTML = null;
alerta.style.display = "block";
alerta_cadastro.innerHTML = null;
alerta_cadastro.style.display = "block";

/* cadastro de usuario */
function Cadastrar() {

    var nomeUsuario = ipt_nome.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var cnpjuser = cnpj.value
    var cepuser = cep.value
    var ruauser = rua.value
    var bairrouser = bairro.value
    var cidadeuser = cidade.value
    var ufuser = uf.value

    if (nomeUsuario && email && senha && cepuser && ruauser && bairrouser && cidadeuser && ufuser && cnpjuser) {

        alerta_cadastro.innerHTML = `
        <div class="alert alert-2-success">
        <h3 class="alert-title">Olá ${nomeUsuario}, obrigado por escolher a pomodoro.</h3>
        <p class="alert-content">Seu cadastro foi finalizado com sucesso, obrigado por confiar na seal solution seus tomates estão em
        ótimas mãos</p>
      </div>`
        setTimeout(function () {
            window.location.href = "./index.html";
        }, 2500);
    } else {


        alerta_cadastro.innerHTML = `
  
        <div class="alert alert-3-danger">
        <h3 class="alert-title">Dados incorretos.</h3>
        <p class="alert-content">Campos preenchidos incorretamente.</p>
      </div>`

        setTimeout(function () {
            alerta_cadastro.style.display = "none";
        }, 3000)
    }
}




/* login de usuario */
function entrar() {

    var email = in_email.value;
    var senha = in_senha.value;

    if ((email == 'adm') && (senha == '123')) {

      alerta.innerHTML = `
      <div class="alert alert-2-success">
      <h3 class="alert-title">Olá ${email}, obrigado por escolher a pomodoro.</h3>
      <p class="alert-content">Você será redirecionado em 4 segundos</p>
    </div>`
      setTimeout(function () {
        window.location.href = "../dashboard/index.html";
      }, 4000);
    } else {


      alerta.innerHTML = `

      <div class="alert alert-3-danger">
      <h3 class="alert-title">Usúario não encontrado.</h3>
      <p class="alert-content">Verifique seu email e senha, caso esse erro persistir entre em contato conosco</p>
    </div>`

      setTimeout(function () {
        alerta.style.display = "none";
      }, 5000)
    }
  }


function Mascara(value, pattern) {
    let i = 0;
    let v = value.toString();
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

function CPF(valuecpf) {
    const cpf = Mascara(valuecpf, '###.###.###-##');
    document.getElementById('cpf').value = cpf;
}

function Telefone(valueTel) {
    const formatado = Mascara(valueTel, '(##) #####-####');
    document.getElementById('tel').value = formatado;
}



const input = document.getElementById("cnpj");
input.addEventListener("keyup", formatarCNPJ);
function formatarCNPJ(e) {

    var v = e.target.value.replace(/\D/g, "");

    v = v.replace(/^(\d{2})(\d)/, "$1.$2");

    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

    v = v.replace(/(\d{4})(\d)/, "$1-$2");

    e.target.value = v;

}
