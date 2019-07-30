//cpf valido
export const _validaCPF = (textCpf) => {
    // Extrai somente os números
    var cpf = textCpf;
    exp = /\.|\-/g
    cpf = cpf.toString().replace(exp, "");

    // Verifica se foi informado todos os digitos corretamente
    if (cpf.length != 11) {

        return false;
    }
    // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
    if (cpf.match(/(\d)\1{10}/)) {
        return false;
    }
    // Faz o calculo para validar o CPF
    for (let t = 9; t < 11; t++) {
        for (d = 0, c = 0; c < t; c++) {
            d += cpf[c] * ((t + 1) - c);
        }
        d = ((10 * d) % 11) % 10;
        if (cpf[c] != d) {
            return false;
        }
    }
    return true;
}

//email valido
export const _validaEmail = (textEmail) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(textEmail) === true) {
        return true;
    }
    else {
        return false;
    }
}

//senha com mais de 6 caracteres
export const _validaSenha = (textSenha) => {
    if (textSenha.length < 6) {
        return false;
    } else {
        return true;
    }
}

export const _validaNomeSobrenome = (textoNome) => {
    return !!textoNome.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/);
}