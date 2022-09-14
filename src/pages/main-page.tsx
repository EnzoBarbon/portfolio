import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled, { keyframes } from 'styled-components';
import CanvasBackground from '../components/canvas-background/canvas-background';
import FloatingText from '../components/floating-text/floating-text';
import LetterUniqueText from '../components/letter-unique-text/letter-unique-text';
import MenuBar from '../components/menu-bar/menu-bar';
import styles from './main-page.module.scss';
import SecondPage from './second-page/second-page';
import { config } from 'react-spring';
import ThirdPage from './third-page/third-page';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import SectionText from '../components/section-text/section-text';
import ParallaxScrollEvents$, { ScrollToEvents$ } from '../store/state';
import positions from '../constants/parallax-positions';
import { Subscription } from 'rxjs';

export const SectionTitleStyle = styled.code`
  font-size: 7rem;
  font-weight: bolder;
  font-family: Montserrat;
  color: white;
  letter-spacing: 0.1rem;
  text-shadow: var(--textshadow);
`;
const SectionTextContainer = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  text-align: left;
  color: whitesmoke;
  opacity: 0.9;
  width: 55rem;
`;

const FastAppearBottom = keyframes`
0%{
opacity: 0;
transform: translateY(2rem);
}
50%{
opacity: 0.6;
}
100%{
transform: translateY(0rem);
opacity: 0.6;
}
`;

const HeaderDescription = styled.div`
  opacity: 0;
  font-size: 1.7rem;
  color: white;
  width: fit-content;
  letter-spacing: -0.1rem;
  font-family: Montserrat;
  text-align: left;
  margin-left: 14rem;
  margin-top: 2rem;
  animation: ${FastAppearBottom} 0.9s 1.3s ease;
  animation-fill-mode: forwards;
`;

const HeaderTextContainer = styled.div`
  width: fit-content;
  text-align: left;
`;
const HeaderLetterStyle = styled.span`
  opacity: 0;
  transition: 0.4s;
  font-size: 6rem;
  margin-left: ${(props) => props.theme.animationDelay};
  color: white;
  display: inline-block;
  font-weight: bolder;
  font-family: Montserrat;
  text-align: left;
  letter-spacing: -0.3rem;
  animation: ${(props) => props.theme.animation} 0.7s
    ${(props) => props.theme.animationDelay}s;
  animation-fill-mode: forwards;
  &:hover {
    color: var(--lightBlue);
  }
`;
const HeaderLetterStyleRed = styled.span`
  opacity: 0;
  transition: 0.4s;
  font-size: 6rem;
  margin-left: ${(props) => props.theme.animationDelay};
  color: var(--red);
  display: inline-block;
  font-weight: bolder;
  font-family: Montserrat;
  text-align: left;
  letter-spacing: -0.3rem;
  animation: ${(props) => props.theme.animation} 0.7s
    ${(props) => props.theme.animationDelay}s;
  animation-fill-mode: forwards;
`;
const HeaderLetterStyleBlue = styled.span`
  opacity: 0;
  transition: 0.4s;
  font-size: 6rem;
  margin-left: ${(props) => props.theme.animationDelay};
  color: var(--lightBlue);
  display: inline-block;
  font-weight: bolder;
  font-family: Montserrat;
  text-align: left;
  letter-spacing: -0.3rem;
  animation: ${(props) => props.theme.animation} 0.7s
    ${(props) => props.theme.animationDelay}s;
  animation-fill-mode: forwards;
`;

const HeaderLetterStyleOrange = styled.span`
  opacity: 0;
  transition: 0.4s;
  font-size: 6rem;
  margin-left: ${(props) => props.theme.animationDelay};
  color: orange;
  display: inline-block;
  font-weight: bolder;
  font-family: Montserrat;
  text-align: left;
  letter-spacing: -0.3rem;
  animation: ${(props) => props.theme.animation} 0.7s
    ${(props) => props.theme.animationDelay}s;
  animation-fill-mode: forwards;
`;

const HeaderAnim = keyframes`
0% {
text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
filter: blur(4px);
opacity: 0;
transform: scale(1.3);
}
100%{
text-shadow: 0 -1px #555555, 0 -2px #555555, 0 -3px #555555, 0 -4px #555555, 0 -5px #555555, 0 -6px #555555, 0 -7px #555555, 0 -8px #555555;
filter: blur(0px);
opacity: 1;
transform: scale(1);
}
`;

const specialStylesDictionary = {
  ['2']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
  ['10']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['11']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['12']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['13']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['15']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
  ['29']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
  ['30']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
};

const AboutTitleDictionary = {
  ['0']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
  ['11']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
  ['12']: {
    style: HeaderLetterStyleRed,
    animation: HeaderAnim,
  },
};

const WhatIDoDictionary = {
  ['0']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['12']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
  ['13']: {
    style: HeaderLetterStyleBlue,
    animation: HeaderAnim,
  },
};

const WhatIKnowDictionary = {
  ['0']: {
    style: HeaderLetterStyleOrange,
    animation: HeaderAnim,
  },
  ['14']: {
    style: HeaderLetterStyleOrange,
    animation: HeaderAnim,
  },
  ['15']: {
    style: HeaderLetterStyleOrange,
    animation: HeaderAnim,
  },
};

HeaderLetterStyle.defaultProps = {
  theme: {
    animation: { HeaderAnim },
    animationDelay: 0.0001,
  },
};

function MainPage() {
  const parallaxRef: MutableRefObject<any> = useRef();
  let scrollPos = 0;
  let scrollToEventsSub: Subscription;
  const handleScroll = () => {
    scrollPos = parallaxRef.current.current / parallaxRef.current.space;
    ParallaxScrollEvents$.next(scrollPos);
  };

  useEffect(() => {
    const documentParallaxRef = document.getElementById('parallax-main-layer');

    console.log(documentParallaxRef, 'ahora no lo pilla?');
    if (documentParallaxRef) {
      documentParallaxRef.addEventListener('scroll', handleScroll);

      scrollToEventsSub = ScrollToEvents$.subscribe((pos) => {
        console.log(parallaxRef, 'subscribieng');
        parallaxRef.current.scrollTo(pos);
      });
    }

    // return scrollToEventsSub.unsubscribe();
  }, []);
  return (
    <>
      <MenuBar />
      <Parallax
        id='parallax-main-layer'
        pages={3}
        style={{ top: 0, left: 0 }}
        config={{ mass: 1, tension: 200, friction: 60 }}
        ref={parallaxRef}
      >
        <ParallaxLayer offset={0} speed={0.1}>
          <div className={styles.customshapedividertop}>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>
          <CanvasBackground />
          <FloatingText />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={3}>
          <HeaderTextContainer
            style={{
              marginLeft: 12 + 'rem',
              marginTop: 14 + 'rem',
            }}
          >
            <LetterUniqueText
              text="  Hi, I'm Enzo|<Web developer/>"
              style={HeaderLetterStyle}
              animation={HeaderAnim}
              animationDelay={0.09}
              specialStylesByIndex={specialStylesDictionary}
            />
          </HeaderTextContainer>
          <HeaderDescription>
            Full stack developer centered around <br />
            building fast, intuitive and usefull web applications
          </HeaderDescription>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1} style={{ zIndex: 20 }}>
          <ParallaxLayer offset={0} speed={1.5}>
            <SectionText
              title='<About   me/>'
              TitleStyledComponent={SectionTitleStyle}
              subtitle='
                For over a decade I had many opportunities to work in a vast
                spectrum of web technologies what let me gather a significant
                amount of various experience. Working for companies and
                individuals around the globe I met and learnt from amazing and
                ambitious people.
              '
              SubtitleStyledComponent={SectionTextContainer}
              color='var(--red)'
              ballOffsetLimits={[
                positions.aboutMe.start,
                positions.aboutMe.finish,
              ]}
              style={{ marginLeft: '12rem', marginTop: '7rem' }}
            />
            {/* <SectionContainer */}
            {/*   color='var(--red)' */}
            {/*   ballOffset={firstBallOffset} */}
            {/*   style={{ marginLeft: '12rem', marginTop: '7rem' }} */}
            {/* > */}
            {/*   <HeaderTextContainer> */}
            {/*     <LetterUniqueText */}
            {/*       text='<About   me/>' */}
            {/*       style={SectionTitleStyle} */}
            {/*       animation={HeaderAnim} */}
            {/*       animationDelay={0.09} */}
            {/*       specialStylesByIndex={AboutTitleDictionary} */}
            {/*     /> */}
            {/*   </HeaderTextContainer> */}
            {/*   <SectionTextContainer> */}
            {/*     For over a decade I had many opportunities to work in a vast */}
            {/*     spectrum of web technologies what let me gather a significant */}
            {/*     amount of various experience. Working for companies and */}
            {/*     individuals around the globe I met and learnt from amazing and */}
            {/*     ambitious people. */}
            {/*   </SectionTextContainer> */}
            {/* </SectionContainer> */}
          </ParallaxLayer>

          <ParallaxLayer offset={0.75} speed={2}>
            <SectionText
              title='<What  I  do/>'
              TitleStyledComponent={SectionTitleStyle}
              subtitle='
                For over a decade I had many opportunities to work in a vast
                spectrum of web technologies what let me gather a significant
                amount of various experience. Working for companies and
                individuals around the globe I met and learnt from amazing and
                ambitious people.
              '
              SubtitleStyledComponent={SectionTextContainer}
              ballOffsetLimits={[
                positions.whatIDo.start,
                positions.whatIDo.finish,
              ]}
              color='var(--lightBlue)'
              style={{
                marginRight: 4 + 'rem',
                marginTop: '9rem',
                marginLeft: 'auto',
              }}
            />

            {/* <SectionContainer */}
            {/*   color='var(--lightBlue)' */}
            {/*   style={{ */}
            {/*     marginRight: 4 + 'rem', */}
            {/*     marginTop: '9rem', */}
            {/*     marginLeft: 'auto', */}
            {/*   }} */}
            {/* > */}
            {/*   <HeaderTextContainer> */}
            {/*     <LetterUniqueText */}
            {/*       text='<What  I  do/>' */}
            {/*       style={SectionTitleStyle} */}
            {/*       animation={HeaderAnim} */}
            {/*       animationDelay={0.09} */}
            {/*       specialStylesByIndex={WhatIDoDictionary} */}
            {/*     /> */}
            {/*   </HeaderTextContainer> */}
            {/*   <SectionTextContainer> */}
            {/*     For over a decade I had many opportunities to work in a vast */}
            {/*     spectrum of web technologies what let me gather a significant */}
            {/*     amount of various experience. Working for companies and */}
            {/*     individuals around the globe I met and learnt from amazing and */}
            {/*     ambitious people. */}
            {/*   </SectionTextContainer> */}
            {/* </SectionContainer> */}
          </ParallaxLayer>

          <ParallaxLayer offset={0.95} speed={1.25}>
            <SectionText
              title='<What  I  know/>'
              TitleStyledComponent={SectionTitleStyle}
              subtitle='
                For over a decade I had many opportunities to work in a vast
                spectrum of web technologies what let me gather a significant
                amount of various experience. Working for companies and
                individuals around the globe I met and learnt from amazing and
                ambitious people.
              '
              SubtitleStyledComponent={SectionTextContainer}
              ballOffsetLimits={[
                positions.whatIKnow.start,
                positions.whatIKnow.finish,
              ]}
              color='orange'
              style={{
                marginLeft: '16rem',
                marginTop: '16rem',
              }}
            />
            {/* <SectionContainer */}
            {/*   color='orange' */}
            {/*   style={{ */}
            {/*     marginLeft: '16rem', */}
            {/*     marginTop: '16rem', */}
            {/*   }} */}
            {/* > */}
            {/*   <HeaderTextContainer> */}
            {/*     <LetterUniqueText */}
            {/*       text='<What  I  know/>' */}
            {/*       style={SectionTitleStyle} */}
            {/*       animation={HeaderAnim} */}
            {/*       animationDelay={0.09} */}
            {/*       specialStylesByIndex={WhatIKnowDictionary} */}
            {/*     /> */}
            {/*   </HeaderTextContainer> */}
            {/*   <SectionTextContainer> */}
            {/*     For over a decade I had many opportunities to work in a vast */}
            {/*     spectrum of web technologies what let me gather a significant */}
            {/*     amount of various experience. Working for companies and */}
            {/*     individuals around the globe I met and learnt from amazing and */}
            {/*     ambitious people. */}
            {/*   </SectionTextContainer> */}
            {/* </SectionContainer> */}
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <SecondPage />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <ThirdPage />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default MainPage;
