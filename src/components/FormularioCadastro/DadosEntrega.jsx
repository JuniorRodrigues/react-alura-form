import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosEntrega () {
    return (
        <form>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="endereco"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="estado"
                label="Estado"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="cidade"
                label="Cidade"
                variant="outlined"
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;
