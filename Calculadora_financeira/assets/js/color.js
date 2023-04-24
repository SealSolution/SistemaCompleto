let txt = document.querySelector('#text')
let label_txt = document.querySelector('#labeltxt')

function trocarCor(cor) {
    /* verificar se a cor escolhida for branco */
    cor.hadleEvent = addEventListener("click", function () {
        if (cor == '#fff') {
            txt.style.color = '#000';
            label_txt.style.color = '#000';
            document.body.style.background = cor;
        } else {
            document.body.style.background = cor;
            txt.style.color = cor;
            label_txt.style.color = cor;
        }
    });

    localStorage.setItem('storedValue', document.body.style.backgroundColor = cor);
    localStorage.setItem('storedValue', txt.style.color = cor);
    localStorage.setItem('storedValue', label_txt.style.color = cor);

    //marcar a opção selecionada

    document.querySelectorAll('span').forEach(function (item) {

        item.classList.remove('active');
    });
    event.target.classList.add('active');

}

/* retornar valor do salvo no local storage*/
if (localStorage.storedValue) {

    document.body.style.backgroundColor = localStorage.storedValue;
    txt.style.color = localStorage.storedValue;
    label_txt.style.color = localStorage.storedValue;

    if (localStorage.storedValue == '#fff') {
        txt.style.color = '#000';
        label_txt.style.color = '#000';
    }
}


