import styles from "../styles/Estilando.module.css"
import Layout from "../components/Layout"

export default function Estilando() {
  return (
    <Layout titulo='Exemplo de CSS Modularizado'>    
      <div className={ styles.violeta }>      
        <h1>Usando o CSS em módulos</h1>     
      </div>
    </Layout>
  )
}