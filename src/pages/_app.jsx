// Os arquivos globais (quantos quiser) devem ser importados e referenciados aqui no _app.jsx
import '../styles/globals.css'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

//Este é o arquio que faz toda a aplicação funcionar!!! Se excluído nada funciona!!!
//Não há no Next.Js o index.html
