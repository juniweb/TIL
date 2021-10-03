// 글로벌 css 호출
import '../styles/styles.scss';
// import { createGlobalStyle, ThemeProvider } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

// const theme = {
//   colors: {
//     primary: '#0070f3'
//   }
// }

// export default function App({ Component, pageProps}) {
//   return (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps}/>
//       </ThemeProvider>
//     </>
//   )
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
