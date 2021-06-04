import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";
import './styles.css';

function FormularioCadastro () {
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ promocoes, setPromocoes ] = useState(true);
    const [ novidades, setNovidades ] = useState(true);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            console.table({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={ nome }

                onChange={(event) => setNome(event.target.value)}
            />

            <TextField id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={ sobrenome }

                onChange={(event) => setSobrenome(event.target.value)}
            />

            <TextField id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
                value={ cpf }

                onChange={(event) => setCpf(event.target.value)}
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        color="primary"
                        name="Promoções"
                        checked={ promocoes }

                        onChange={(event) => setPromocoes(event.target.checked)}
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        color="primary"
                        name="Novidades"
                        checked={ novidades }

                        onChange={(event) => setNovidades(event.target.checked)}
                    />
                }
            />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
