import React, { useState, useContext } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";
import './styles.css';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais ({ aoEnviar }) {
    const [ nome, setNome ]           = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ cpf, setCpf ]             = useState('');
    const [ promocoes, setPromocoes ] = useState(true);
    const [ novidades, setNovidades ] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [ erros, validarCampos, possoEnviar ] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={ nome }

                onChange={(event) => setNome(event.target.value)}
            />

            <TextField
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={ sobrenome }

                onChange={(event) => setSobrenome(event.target.value)}
            />

            <TextField
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
                error={ !erros.cpf.valido }
                helperText={ erros.cpf.texto }
                value={ cpf }

                onChange={(event) => setCpf(event.target.value)}
                onBlur={ validarCampos }
            />

            <FormControlLabel
                id="promocoes"
                name="promocoes"
                label="Promo????es"
                control={
                    <Switch
                        color="primary"
                        name="Promo????es"
                        checked={ promocoes }

                        onChange={(event) => setPromocoes(event.target.checked)}
                    />
                }
            />

            <FormControlLabel
                id="novidades"
                name="novidades"
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

            <Button variant="contained" color="primary" type="button">Voltar</Button>
            <Button variant="contained" color="primary" type="submit">Pr??ximo</Button>
        </form>
    );
}

export default DadosPessoais;
