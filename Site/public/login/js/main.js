alerta.innerHTML = null;
alerta_cadastro.innerHTML = null;


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


const input = document.getElementById("ipt_cnpj");
    input.addEventListener("keyup", formatarCNPJ);
    function formatarCNPJ(e) {

        var v = e.target.value.replace(/\D/g, "");

        v = v.replace(/^(\d{2})(\d)/, "$1.$2");

        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

        v = v.replace(/(\d{4})(\d)/, "$1-$2");

        e.target.value = v;
    }