import styled from 'styled-components';
import positions from '../../constants/parallax-positions';
import { ScrollToEvents$ } from '../../store/state';
import styles from './menu-bar.module.scss';

const FirstLetter = styled.div`
  position: absolute;
  top: 2rem;
  left: 1rem;
  font-family: Montserrat;
  font-weight: bolder;

  font-size: 3rem;

  color: var(--lightblack);
  color: orange;
  opacity: 0.3;
`;
const SecondLetter = styled.div`
  position: absolute;
  top: 4rem;
  left: 3.5rem;
  font-family: Montserrat;
  font-weight: bolder;

  transform: rotateZ(30deg);
  font-size: 3rem;

  /* color: var(--lightblack); */
  color: orange;
  opacity: 0.3;
`;

const NavegationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  position: fixed;
  top: 0;
  width: var(--menuWidth);
  height: 100%;
  background-color: var(--darkblack);
  color: white;
`;

const NavegationItem = styled.div`
  font-family: Montserrat;
  position: relative;
  font-size: 1.3rem;
  padding-block: 1rem;
  width: 100%;
  /* border: 1px solid var(--lightblack); */
`;

const Circle = styled.div.attrs((props: { color: string }) => props)`
  &::after {
    left: 50;
    content: '';
    position: absolute;
    opacity: 0.6;
    filter: blur(1px);
    background-color: ${(props) => props.color};
    padding: 0.6rem;
    border-radius: 100%;
    box-shadow: var(--boxShadow);
    transform: translateX(-50%) translateY(-50%);
    transition: 0.5s ease;
  }
  &:hover:after {
    cursor: pointer;
    opacity: 0.9;
    filter: blur(0.4px);
  }
`;

function MenuBar() {
  const sendScrollToEvent = (position: number) => {
    console.log(position, 'position being sent to event');
    ScrollToEvents$.next(position);
  };

  return (
    <NavegationContainer>
      <FirstLetter>{'E'}</FirstLetter>
      <SecondLetter>{'B'}</SecondLetter>
      <NavegationItem>About</NavegationItem>
      <NavegationItem
        onClick={() => sendScrollToEvent(positions.aboutMe.finish)}
      >
        <Circle color={'var(--red)'} />
      </NavegationItem>
      <NavegationItem
        onClick={() => sendScrollToEvent(positions.whatIDo.finish)}
      >
        <Circle color={'var(--lightBlue)'} />
      </NavegationItem>
      <NavegationItem
        onClick={() => sendScrollToEvent(positions.whatIKnow.finish)}
      >
        <Circle color={'orange'} />
      </NavegationItem>
      <NavegationItem>Projects</NavegationItem>
    </NavegationContainer>
  );
}

export default MenuBar;
