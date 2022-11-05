import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSpring, animated } from 'react-spring'

const bgWidth = 2048
const bgHeight = 4096

const ScrollingBg = styled('div')({
  '@keyframes slide': {
    '0%': {
      transform: 'translate(0,0)',
    },
    '100%': {
      transform: 'translate(0,-4096px)',
    },
  },
  position: 'absolute',
  height: bgHeight * 2,
  width: bgWidth,
})

// const FloatingKitty = styled('div')({
//   background: 'url(/images/kitty1.png)',
//   width: '5%',
//   zIndex: '98',
// })

const CatsInSpace = () => {
  const kitty1 = useSpring({
    loop: { reverse: true },
    config: { duration: 25000 },
    from: { rotateZ: 0, x: -200, y: 200 },
    to: { rotateZ: 180, x: bgWidth + 100, y: 1000 },
  })
  const kitty2 = useSpring({
    loop: true,
    config: { duration: 35000 },
    from: { rotateZ: 0, x: 500, y: 2000 },
    to: { rotateZ: 80, x: 300, y: -100 },
  })
  const kitty3 = useSpring({
    loop: { reverse: true },
    config: { duration: 20000 },
    from: { rotateZ: 0, x: 3000, y: 1000 },
    to: { rotateZ: -4000, x: -100, y: -100 },
  })
  const kitty4 = useSpring({
    loop: { reverse: true },
    config: { duration: 30000 },
    from: { rotateZ: 0, x: bgWidth + 100, y: 800 },
    to: { rotateZ: 180, x: -100, y: 100 },
  })
  const kitty5 = useSpring({
    loop: { reverse: true },
    config: { duration: 25000 },
    from: { rotateZ: 0, x: -1000, y: 800 },
    to: { rotateZ: 360, x: bgWidth + 100, y: 10 },
  })

  return (
    <Box
      sx={{
        overflow: 'hidden',
        height: '100vh',
        width: '100%',
        maxWidth: 'xl',
        position: 'absolute',
        // border: '5px solid red',
      }}
    >
      <ScrollingBg
        sx={{
          background: 'url(/images/hero-bg/bg1.png) repeat-y',
          animation: `slide 100s linear infinite`,
          zIndex: '-1',
        }}
      />
      <ScrollingBg
        sx={{
          background: 'url(/images/hero-bg/bg2.png) repeat-y',
          animation: `slide 70s linear infinite`,
          zIndex: '1',
        }}
      />
      <ScrollingBg
        sx={{
          background: 'url(/images/hero-bg/bg3.png) repeat-y',
          animation: `slide 70s linear infinite`,
          zIndex: '2',
        }}
      />
      <ScrollingBg
        sx={{
          background: 'url(/images/hero-bg/bg4.png) repeat-y',
          animation: `slide 100s linear infinite`,
          zIndex: '3',
        }}
      />
      <Box sx={{ position: 'absolute', width: '100vh' }}>
        {/* left-facing, floating */}
        <animated.img src="/images/kitty2.png" style={kitty2} width="5%" />
      </Box>
      <Box sx={{ position: 'absolute', width: '100vh' }}>
        {/* left-facing */}
        <animated.img src="/images/kitty4.png" style={kitty4} width="5%" />
      </Box>
      <Box sx={{ position: 'absolute', width: '100vh' }}>
        {/* front-facing */}
        <animated.img src="/images/kitty1.png" style={kitty1} width="8%" />
      </Box>
      <Box sx={{ position: 'absolute', width: '100vh' }}>
        {/* right-facing, belly up */}
        <animated.img src="/images/kitty3.png" style={kitty3} width="8%" />
      </Box>
      <Box sx={{ position: 'absolute', width: '100vh' }}>
        {/* kitty holding star */}
        <animated.img src="/images/kitty5.png" style={kitty5} width="12%" />
      </Box>
      {/* <FloatingKitty /> */}
    </Box>
  )
}

export default CatsInSpace
