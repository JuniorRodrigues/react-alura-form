import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import 'fontsource-roboto';

class App extends Component {
    render () {
        return (
            <Container maxWidth="sm" component="article">
                <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
                <FormularioCadastro />
            </Container>
        );
    }
}

export default App;
