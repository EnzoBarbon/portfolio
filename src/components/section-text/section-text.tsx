import { useEffect, useState } from 'react';
import { debounceTime } from 'rxjs';
import styled, { StyledComponent } from 'styled-components';
import ParallaxScrollEvents$ from '../../store/state';

export interface SectionTextProps {
  title: string;
  TitleStyledComponent:
    | StyledComponent<'div', any, {}, never>
    | StyledComponent<'code', any, {}, never>;
  subtitle: string;
  SubtitleStyledComponent: StyledComponent<'div', any, {}, never>;
  color: string;
  ballOffsetLimits: number[];
  style?: React.CSSProperties;
}

const SectionContainer = styled.div.attrs(
  (props: { ballOffset: number }) => props
)`
  position: relative;
  background-color: #1c1c1c;
  border-top: 2px solid ${(props) => props.color};
  box-shadow: var(--boxShadow);
  width: fit-content;
  padding: 3rem;
  border-radius: 2rem;
  &::after {
    transform: translateX(50%) translateY(-50%);
    top: 0;
    left: ${(props) => props.ballOffset}%;
    position: absolute;
    content: ' ';
    background-color: ${(props) => props.color};
    padding: 2rem;
    border-radius: 100%;
    box-shadow: var(--boxShadow);
    transition: 2s;
  }

  /* &:hover:after { */
  /*   left: 90%; */
  /* } */
`;

export function SectionText(props: SectionTextProps) {
  useEffect(() => {
    ParallaxScrollEvents$.pipe(debounceTime(100)).subscribe((scrollPos) => {
      console.log(scrollPos, 'abc');
      if (
        scrollPos >= props.ballOffsetLimits[0] * -2 &&
        scrollPos <= props.ballOffsetLimits[1] * 2
      ) {
        if (scrollPos >= props.ballOffsetLimits[1]) {
          setBallOffset(95);
        } else if (scrollPos <= props.ballOffsetLimits[0]) {
          setBallOffset(0);
        } else {
          setBallOffset(
            ((scrollPos - props.ballOffsetLimits[0]) /
              (props.ballOffsetLimits[1] - props.ballOffsetLimits[0])) *
              100
          );
        }
      }
    });
  }, []);
  const [ballOffset, setBallOffset] = useState<number>(0);

  return (
    <SectionContainer
      style={props.style}
      ballOffset={ballOffset}
      color={props.color}
    >
      <props.TitleStyledComponent>{props.title}</props.TitleStyledComponent>
      <props.SubtitleStyledComponent>
        {props.subtitle}
      </props.SubtitleStyledComponent>
    </SectionContainer>
  );
}

export default SectionText;
