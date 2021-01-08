import React from 'react';

//deve-se colocar os components criados no App
import GlobalStyle from './styles/global';
import Header from './components/Header';

// <> chama-se fragment, é uma div, só que ela não aparece no html, serve p englobar

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
