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
