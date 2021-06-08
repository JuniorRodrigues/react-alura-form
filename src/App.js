import { Container, createMuiTheme, CssBaseline, ThemeProvider, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import 'fontsource-roboto';

import { validarCPF, validarSenha, validarNome } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App () {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
    () =>
        createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
            },
        }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="sm" component="article">
                <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
                <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
                    <FormularioCadastro aoEnviar={ aoEnviarForm } />
                </ValidacoesCadastro.Provider>
            </Container>
        </ThemeProvider>
    );

    function aoEnviarForm (dados) {
        console.table(dados)
    }
}

export default App;
