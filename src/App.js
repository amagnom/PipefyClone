import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

//deve-se colocar os components criados no App

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Bord';


// <> chama-se fragment, é uma div, só que ela não aparece no html, serve p englobar

//dndprovider vai usar api do html 5 para fazer a parte do drag and drop
function App() {
  return (

    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />

      <GlobalStyle />
    </DndProvider>

  );
}

export default App;
