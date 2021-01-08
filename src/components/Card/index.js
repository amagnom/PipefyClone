//useRef é para poder passar mais de uma referência
import React, { useRef, useContext } from 'react';

//biblioteca para fazer o drag and drop
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Bord/context';

import { Container, Label } from './styles';

//Funcao para arrastar recebe como parametro a referencia e passa q esta arrastando
export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);




  //todo item arrastavel da aplicação precisa ter um tipo, ai colocou card
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });






  //a funcao de drop, que é de trocar o item de lugar
  const [, dropRef] = useDrop({
    //tipos aceitos, CARD
    accept: 'CARD',

    //esse hover é para quando passar um card sobre o outro
    hover(item, monitor) {
      //tudo isso vem do react dnd
      
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      
      //salva qual é o index do item que esta sendo arrastado 
      const draggedIndex = item.index;
      //salva qual é o index do destino
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        //se arrastar o mesmo card para cima do mesmo card já mata
        return;
      }

      //pega o tamnho do elemento ( que estou passando o mouse em cima)
      const targetSize = ref.current.getBoundingClientRect();
      //calcula qual é o centro do elemento, para ver se ta acima ou abaixo
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      //pega o quanto arrastou o elemento na tela
      const draggedOffset = monitor.getClientOffset();

      //calcula o quanto ele percorreu - a distancia do até o topo da tela
      const draggedTop = draggedOffset.y - targetSize.top;
 

      //movimentacoes invalidas
      //tentando arrastar um item A que ta antes do B e ele continua antes do B
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }


      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })


  //passa a outra referencia
  dragRef(dropRef(ref));












  //no header vai vir as labels

  //se tiver o data.user aí sim ele carrega a imagem
  return (

    <Container ref={ref} isDragging={isDragging}>

      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>

      <p>{data.content}</p>
      { data.user && <img src={data.user} alt="" />}

    </Container>

  );
}