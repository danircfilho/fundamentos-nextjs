export default function Titulo(props) {

  //props é somente leitura e não pde ser mudado ex: props.titulo + novo nome
  
  return (
    <h1>{ props.titulo }</h1>
  )
}