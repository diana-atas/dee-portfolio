import { Container, Typography, Box, Button } from '@mui/material'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)
  const fade = useSpring({
    color: isToggled ? '#000' : 'green',
    transform: isToggled
      ? 'translate3d(0, 15px, 0)'
      : 'translate3d(0, 15px, 0)',
    fontSize: isToggled ? '2rem' : '3rem',
  })
  return (
    <Container>
      <Box>
        <animated.h1 style={fade}>Hello</animated.h1>

        <Button
          variant="contained"
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          Toggle
        </Button>
      </Box>
    </Container>
  )
}

export default Toggle
