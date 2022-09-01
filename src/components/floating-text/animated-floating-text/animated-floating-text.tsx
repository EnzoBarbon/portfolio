import styled, { keyframes } from 'styled-components'

interface FloatingTextProps {
  text: string
  fontSize: number
  xPosition: number
  yPosition: number
  animationDuration: number
}

function AnimatedFloatingText(props: FloatingTextProps) {
  const floatAnim = keyframes`
0% {
opacity:0;
transform : translateX(-50vw);
}
5%{
opacity: 1;
transform : translateX(-50vw);
}
95%
{
opacity: 1;
transform : translateX(50vw);
}
100%
{
opacity:0;
transform : translateX(50vw);
}
`

  const Container = styled.div`
    position: absolute;
    transform: translate(${props.xPosition}vw, ${props.yPosition}vh);
    font-size: ${props.fontSize}rem;
  `

  const AnimatedText = styled.div`
    transition: 0.5s ease;
    animation: ${floatAnim} ${props.animationDuration}s infinite;
    animation-timing-function: linear;
    &:hover {
      color: crimson;
    }
  `
  return (
    <>
      <Container>
        <AnimatedText>
          <code> {props.text}</code>
        </AnimatedText>
      </Container>
    </>
  )
}

export default AnimatedFloatingText
