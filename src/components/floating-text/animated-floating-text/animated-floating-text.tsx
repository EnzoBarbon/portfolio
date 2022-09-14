import styled, { keyframes } from 'styled-components';

interface FloatingTextProps {
  text: string;
  fontSize: number;
  xPosition: number;
  yPosition: number;
  animationDuration: number;
}

const floatAnim = keyframes`
0% {
opacity:0;
transform : translateX(-50vw);
}
10%{
opacity: 1;
}
90%
{
opacity: 1;
}
100%
{
opacity:0;
transform : translateX(50vw);
}
`;

const Container = styled.div.attrs(
  (props: { fontSize: number; xPosition: number; yPosition: number }) => props
)`
  position: absolute;
  transform: translate(
    ${(props) => props.xPosition}vw,
    ${(props) => props.yPosition}vh
  );
  font-size: ${(props) => props.fontSize}rem;
`;

const AnimatedText = styled.div.attrs(
  (props: { animationDuration: number }) => props
)`
  transition: 0.5s ease;
  animation: ${floatAnim} ${(props) => props.animationDuration}s infinite;
  animation-timing-function: linear;
  &:hover {
    color: crimson;
  }
`;
function AnimatedFloatingText(props: FloatingTextProps) {
  return (
    <>
      <Container
        fontSize={props.fontSize}
        xPosition={props.xPosition}
        yPosition={props.yPosition}
      >
        <AnimatedText animationDuration={props.animationDuration}>
          <code> {props.text}</code>
        </AnimatedText>
      </Container>
    </>
  );
}

export default AnimatedFloatingText;
