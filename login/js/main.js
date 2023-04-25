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
    if (
        nomeUsuario && email && senha &&
        cepuser && ruauser && bairrouser && cidadeuser && ufuser && cnpjuser
    ) {
        Skips.innerHTML = ``
        StatusCadastro.innerHTML = `  
        
       <p style="color:green; font-weight: bold;">SUCESSO !!</p>
       <p>Seu cadastro foi finalizado com sucesso, obrigado por confiar na seal solution seus tomates estão em
         ótimas mãos</p><br>

         <a class="btn solid" id="submit" style="text-decoration:none; width:auto;" href="../login/index.html">Realizar Login</a>

     `
    }
    else {
        StatusCadastro.innerHTML = `  
        <p style="color:red; font-weight: bold;">ERRO !!</p>
        <p>Campos preenchidos incorretamente.</p>
      `  
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
