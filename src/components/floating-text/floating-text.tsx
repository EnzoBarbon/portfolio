import { ParallaxLayer } from '@react-spring/parallax'
import AnimatedFloatingText from './animated-floating-text/animated-floating-text'
import styles from './floating-text.module.scss'

const horizontalSpeedRelativeToParallax = 80

function calculateAnimDuration(speed: number) {
  return horizontalSpeedRelativeToParallax / speed
}

function FloatingText() {
  return (
    <div className={styles.floatingTextContainer}>
      <ParallaxLayer offset={0} speed={1}>
        <AnimatedFloatingText
          text='xml'
          animationDuration={calculateAnimDuration(1)}
          fontSize={10}
          xPosition={-20}
          yPosition={66}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <AnimatedFloatingText
          text='firebase'
          animationDuration={calculateAnimDuration(0.4)}
          fontSize={4}
          xPosition={90}
          yPosition={78}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5}>
        <AnimatedFloatingText
          text='unity'
          animationDuration={calculateAnimDuration(1.5)}
          fontSize={15}
          xPosition={80}
          yPosition={52}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1}>
        <AnimatedFloatingText
          text='scss'
          animationDuration={calculateAnimDuration(1)}
          fontSize={10}
          xPosition={-20}
          yPosition={5}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <AnimatedFloatingText
          text='react'
          animationDuration={calculateAnimDuration(0.6)}
          fontSize={6}
          xPosition={-30}
          yPosition={50}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.2}>
        <AnimatedFloatingText
          text='angular'
          animationDuration={calculateAnimDuration(1.2)}
          fontSize={12}
          xPosition={60}
          yPosition={15}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.8}>
        <AnimatedFloatingText
          text='.net'
          animationDuration={calculateAnimDuration(0.8)}
          fontSize={8}
          xPosition={27}
          yPosition={90}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <AnimatedFloatingText
          text='sql'
          animationDuration={calculateAnimDuration(0.5)}
          fontSize={5}
          xPosition={30}
          yPosition={70}
        />
      </ParallaxLayer>
    </div>
  )
}

export default FloatingText
