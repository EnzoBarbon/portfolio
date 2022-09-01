import { ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components'

function SecondPage() {
  const CurveOnTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - var(--menuWidth));
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 98px;
    }
  `
  const SecondPageContainer = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
  `

  return (
    <>
      {/* <ParallaxLayer offset={1} speed={1}> */}
      <CurveOnTop>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'></path>
        </svg>
      </CurveOnTop>
      <SecondPageContainer></SecondPageContainer>
    </>
  )
}

export default SecondPage
