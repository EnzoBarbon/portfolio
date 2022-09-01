import styled from "styled-components";

const Container = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;
const Canvas = styled.canvas`
height: 100vh;
width: 100vw;
`;


function CanvasBackground(){


  return (
    <Container>
      asaldasdasdhjdksafsdfhkjashdfkashf
      <Canvas width={100} height={100}/>
    </Container>
  )
}


export default CanvasBackground;
