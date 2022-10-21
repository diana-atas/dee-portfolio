import { Container, Typography, Box, Button } from '@mui/material'
import { useState, useRef } from 'react'
import { useSpring, animated, config } from 'react-spring'

import { styled } from '@mui/material/styles'
import { css, keyframes } from '@emotion/react'
import { positions } from '@mui/system'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)
  const fade = useSpring({
    color: isToggled ? '#000' : 'green',
    transform: isToggled
      ? 'translate3d(0, 15px, 0)'
      : 'translate3d(0, 15px, 0)',
    fontSize: isToggled ? '2rem' : '3rem',
  })

  const bg1Ref = useRef()
  const bg1Style = useSpring({
    // loop: true,
    config: { duration: 2000 },
    from: {
      y: 4096,
    },
    to: {
      y: 0,
    },
    // ref: bg1Ref,
  })

  const divStyle = useSpring({
    config: config.wobbly,
    from: {
      width: 100,
      padding: 0,
      background: 'linear-gradient(to right, #30e8bf, #ff8235)',
      transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)',
      boxShadow: '0px 100px 150px -10px #2D3747',
      borderBottom: '0px solid white',
      shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
      textShadow: '0px 5px 0px white',
      opacity: 0,
    },
    to: {
      width: 'auto',
      padding: 20,
      background: 'linear-gradient(to right, #009fff, #ec2f4b)',
      transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
      boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
      borderBottom: '10px solid #2D3747',
      shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
      textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
      opacity: 1,
    },
  })

  // const slide = keyframes`
  // 0% {
  //   transform: translate3d(0),
  // }
  // 100% {
  //   transform: translate3d(-2048px),
  // }
  // `
  const ScrollingBg1 = styled('div')({
    '@keyframes slide': {
      from: {
        transform: 'translate(0,0)',
      },
      to: {
        transform: 'translate(0,-4096px)',
      },
    },
    background: 'url(/images/hero-bg/bg1.png) repeat-y',
    height: 8192,
    width: 2048,
    animation: `slide 10s linear infinite`,
  })

  return (
    <Container>
      {/* <Box>
        <animated.h1 style={fade}>Hello</animated.h1>

        <Button
          variant="contained"
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          Toggle
        </Button>
      </Box> */}
      <Box sx={{ overflow: 'hidden' }}>
        {/* <animated.img
          src="/images/hero-bg/bg1.png"
          // height={200}
          alt=""
          style={bg1Style}
        /> */}

        {/* <animated.div style={divStyle}></animated.div> */}

        <ScrollingBg1>
          <Typography>Hello again</Typography>
        </ScrollingBg1>
        {/* <div
          style={{
            background: 'url(/images/hero-bg/bg1.png) repeat-x',
            height: 4096,
          }}
          css={css`
            animation: ${slide} 1s linear infinite;
          `}
        ></div> */}
      </Box>
    </Container>
  )
}

export default Toggle
