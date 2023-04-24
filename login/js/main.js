function Cadastrar() {
    var nomeUsuario = ipt_nome.value
    var sobreNome = ipt_sobreNome.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var telefone = tel.value
    var cpfuser = cpf.value
    var cnpjuser = cnpj.value
    var cepuser = cep.value
    var ruauser = rua.value
    var bairrouser = bairro.value
    var cidadeuser = cidade.value
    var ufuser = uf.value
    if (
        nomeUsuario && sobreNome && email && senha &&
        telefone && cepuser && ruauser && bairrouser && cidadeuser && ufuser && cpfuser
        || nomeUsuario && sobreNome && email && senha &&
        telefone && cepuser && ruauser && bairrouser && cidadeuser && ufuser && cnpjuser
    ) alert('Usuario cadastrado com sucesso.')
    else alert('Erro')
}
function Mascara(valuecpf, patternCpf) {
    let i = 0;
    let v = valuecpf.toString();
    v = v.replace(/\D/g, '');
    return patternCpf.replace(/#/g, () => v[i++] || '');
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
