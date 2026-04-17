import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Atividade03() {
    // O hook useState gerencia o valor do contador
    const [Funcao, setFuncao] = useState();

    const Cadastrar = () => setFuncao("Cadastrar");
    const Editar = () => setFuncao("Editar");
    const Listar = () => setFuncao("Listar");
    const Excluir = () => setFuncao("Excluir");
    const Cancelar = () => setFuncao("Cancelar");

    return (
        <div className={styles.container}>
            <h1>Exemplo 4 - Uso de componentes</h1>
            <h2>O valor atual é: {Funcao}</h2>

         
            <Botao texto="Cadastrar" aoClicar={Cadastrar    } />
            <Botao texto="Editar" aoClicar={Editar}  />
            <Botao texto="Listar" aoClicar={Listar}  />
            <Botao texto="Excluir " aoClicar={Excluir}  />
            <Botao texto="Cancelar" aoClicar={Cancelar} />
        </div>
    );
}

export default Atividade03;