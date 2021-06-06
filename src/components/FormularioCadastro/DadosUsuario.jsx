import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario ({ aoEnviar }) {
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha] = useState('');

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ email, senha });
            }}
        >
            <TextField
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={ email }

                onChange = {(event) => setEmail(event.target.value)}
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={ senha }

                onChange={(event) => setSenha(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" size="large">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;
