import styled, {
  Keyframes,
  StyledComponent,
  ThemeProvider,
} from 'styled-components';

interface LetterUniqueTextProps {
  text: string;
  style: StyledComponent<'span', any, {}, never>;
  animation: Keyframes;
  animationDelay: number;
  specialStylesByIndex?: {
    [index: string]: {
      style: StyledComponent<'span', any, {}, never>;
      animation: Keyframes;
    };
  };
}

function LetterUniqueText(props: LetterUniqueTextProps) {
  const letters = [];
  let specialIndexes: string[] = [];
  if (props.specialStylesByIndex) {
    specialIndexes = Object.keys(props.specialStylesByIndex);
  }

  for (let i = 0; i < props.text.length; i++) {
    const letter = props.text[i];

    if (letter === '|') {
      letters.push(<br key={i + letter} />);
      continue;
    } else if (letter === ' ') {
      letters.push(
        <div
          key={i + letter}
          style={{ width: '1rem', display: 'inline-block' }}
        ></div>
      );
      continue;
    } else if (specialIndexes && specialIndexes.includes(i.toString())) {
      const SpecialStyle = props.specialStylesByIndex![i].style;
      const specialAnimation = props.specialStylesByIndex![i].animation;

      const theme = {
        animation: specialAnimation,
        animationDelay: i * props.animationDelay,
      };

      letters.push(
        <ThemeProvider key={i + letter} theme={theme}>
          <SpecialStyle>{letter}</SpecialStyle>
        </ThemeProvider>
      );
      continue;
    }

    const theme = {
      animation: props.animation,
      animationDelay: i * props.animationDelay,
    };

    letters.push(
      <ThemeProvider key={i + letter} theme={theme}>
        <props.style>{letter}</props.style>
      </ThemeProvider>
    );
  }

  return <>{letters}</>;
}

export default LetterUniqueText;
