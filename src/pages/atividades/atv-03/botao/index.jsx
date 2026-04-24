import styles from './index.module.css';

function Botao({ texto, aoClicar, acao, cor }) {
    return (
        <button
            className={`${styles.botao} ${acao === '+' ? styles.mais : styles.menos}`}
            onClick={aoClicar}
            backgroundColor={cor}
        >
            {texto}
        </button>
    );
}

export default Botao;