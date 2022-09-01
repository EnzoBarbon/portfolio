import { ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`
const Footer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: blue;
`

function ThirdPage() {
  return (
    <>
      {/* <ParallaxLayer offset={2} speed={1}> */}
      <Container></Container>
      <ParallaxLayer offset={2.2} speed={4}>
        <Footer></Footer>
      </ParallaxLayer>
    </>
  )
}

export default ThirdPage
