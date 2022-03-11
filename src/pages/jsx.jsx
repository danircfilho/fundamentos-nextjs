// JSX - Javascript com Jsx - referenciações
//JSX - entre tags HTML
//JS - entre chaves

export default function Jsx() {
  const a = 1
  const b = 2

  const titulo = <h1>Exemplo de titulo referenciando Js e Jsx</h1>

  function subtitulo() {
    return (
      <h2>{ 'subtitulo legal com todas as letras em maisculo'.toUpperCase() }</h2>
    )
  }

  return (    
    <div>
      {a + b}
      {titulo}
      {subtitulo()}   {/* invocando a função */}
      <h2>JSX normal</h2>
    </div>
  )
}