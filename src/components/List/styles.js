import styled from 'styled-components';

//Obs ali por exemplo estou acessando o header dentro do container
//no js é só fazer assim, se fosse no ts. teria que colocar o '>'tag
//ex: >span
export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
 
 //Olha se passou a propriedade done, se for true coloca a opacidade como 0.6 
 //caso contratio como 1
  opacity: ${props => props.done ? 0.6 : 1};
  
  //Dizendo que ira estilizar pos a primeira div
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
 
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;