import React from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";

function FormularioCadastro () {
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
            <FormControlLabel label="Promoções"
                control={ <Switch color="primary" name="Promoções" defaultChecked /> }
            />
            <FormControlLabel label="Novidades"
                control={<Switch color="primary" name="Novidades" defaultChecked />}
            />
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
