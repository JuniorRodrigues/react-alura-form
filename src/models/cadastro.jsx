function validarCPF (cpfNumber) {
    return (cpfNumber.length !== 11)
    ? { valido: false, texto: 'O CPF deve ter 11 dígitos' }
    : { valido: true, texto: '' };
}

function validarSenha (senha) {
    return (senha.length < 4 || senha.length > 72)
    ? { valido: false, texto: 'A senha deve ter entre 4 e 72 dígitos.' }
    : { valido: true, texto: '' };
}

export { validarCPF, validarSenha };
