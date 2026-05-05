import { Link } from "react-router";

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
        <h1>Aula de React com Vite JS</h1>
        <div className={styles.containerCards}>   
          <h2>Exemplos</h2>       
          <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
          <Link to="/exemplo/2">Exemplo 2 - Uso de module CSS</Link>
          <Link to="/exemplo/3">Exemplo 4 - Uso de module CSS</Link>
          <Link to="/exemplo/5">Exemplo 5 - Uso de module CSS</Link>
          <Link to="/exemplo/6">Exemplo 6 - Uso de module CSS</Link>
           
        </div>
        
        <div className={styles.containerCards}>    
          <h2>Atividades</h2>
          <Link to="/Atividade/1/">Atividade01- </Link>
          <Link to="/Atividade/2/">Atividade 02</Link>
           <Link to="/Atividade/3/">Atividade 03</Link>
            
        </div>
    </div>
  )
}

export default Home;
