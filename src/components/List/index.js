import React from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';



//titulo da lista e se tera a opcao de cirar
//MdAdd icone de + do react icons, se tiver a opcao de criar passada por parametros

//vai passar a propriedade done, para ver se ela vai para o tipo concluido
export default function List({ data, index: listIndex }) {
  return (

    <Container done={data.done}>
   
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        { data.cards.map((card, index) => (
          <Card 
            key={card.id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        )) }
      </ul>

    </Container>
  );
}