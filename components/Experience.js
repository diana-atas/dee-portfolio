import {
  Container,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { theme } from '../utils/theme'

const Position = styled(Box)(({ theme }) => ({
  border: '1px solid #fff',
  borderRadius: 1,
  padding: 1,
  marginBottom: 5,
}))

const Description = styled(List)(({ theme }) => ({
  marginBottom: 10,
}))

const titleColor = theme.palette.primary.main

const Experience = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'end',
        mt: 10,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', sm: '80%' },
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 1, sm: 3 },
          alignItems: 'end',
          // border: '2px solid green',
        }}
      >
        <Box
        // sx={{
        //   display: 'flex',
        //   backgroundColor: '#fff',
        //   color: '#000',
        //   mr: 3,
        //   mt: -4,
        //   position: 'absolute',
        // }}
        >
          <Typography component="h2" variant="h2" color={titleColor}>
            experience
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: `2px solid ${titleColor}`,
            // borderBottom: '2px solid #fff',
            mt: 1,
            padding: 2,
          }}
        >
          <Position>
            <Typography component="h3" variant="h4">
              Trainee - Full Stack Web Development
            </Typography>
            <Typography component="h4" variant="h6">
              Dev Academy Aotearoa
            </Typography>
            <Typography component="h4" variant="h6">
              April 2022 - July 2022
            </Typography>
          </Position>

          <Description>
            <ListItem>
              <ListItemText
                primary="This was a 15-week full immersion software development bootcamp
                that mimics a real-life development team as closely as possible.
                The course taught us a modern web dev stack using technologies
                such as HTML5, CSS3, JavaScript, React, Redux, Knex, SQLite3,
                Node.js, and Express.js. We learned by doing and explored unit
                testing, asynchronous programming techniques, RESTful APIs, and
                GitHub."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Each week, we were given hands-on challenges to do on my own or
              construct web applications by pair programming."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="The program strongly emphasised human skills, empathy, and
              well-being. Every Friday, we would join forces and build
              applications in teams of four. This gave me opportunities to
              exercise giving and receiving growth feedback and working in teams
              using agile methodology."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="For our final project
              (https://github.com/matai-2022/dev-invaders), my team of four
              learned to use Phaser 3 and built a 2D game in less than a week.
              Our approach was to divide and conquer the game's components. I
              was responsible for the parallax background and bringing the rest
              of the components together. I paired up with a teammate to
              implement the colliders (for game elements that interact with each
              other), to apply the animation and random spawning of the enemies,
              and to look after a component dedicated to fixing programming
              bugs. It was an awesome experience to sample a bit of game
              development and great fun to pick up a new framework and figure it
              out with my teammates."
              />
            </ListItem>
          </Description>

          <Position>
            <Typography component="h3" variant="h4">
              Senior Insurer & Consumer Specialist
            </Typography>
            <Typography component="h4" variant="h6">
              Marsh Limited, New Zealand
            </Typography>
            <Typography component="h4" variant="h6">
              January 2017 - May 2022
            </Typography>
          </Position>

          <Description>
            <ListItem>
              <ListItemText
                primary="Started as Insurer & Consumer Specialist and promoted to Senior
            position in May 2020."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Collaborated with the Financial Advisers, Insurers and Clients to
            manage employee insurance policies for a portfolio of New
            Zealand-based and multinational companies."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Exhibited strong attention to detail in processing data (including
            consolidating, filtering, sorting, and matching) using Microsoft
            Excel and in auditing documents and calculations produced by the Ops
            Team before being dispatched to internal and external clients."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Demonstrated leadership and mentorship, appointed as the Team's
            go-to-person for industry knowledge or advice for non-standard
            situations and trainer for new team members."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Contributed to the global project to implement a new system that
            includes mapping out processes, user acceptance testing, and user
            training."
              />
            </ListItem>
          </Description>

          <Position>
            <Typography component="h3" variant="h4">
              Policy Administration Executive
            </Typography>
            <Typography component="h4" variant="h6">
              Mercer (Singapore) Pte Ltd, Singapore
            </Typography>
            <Typography component="h4" variant="h6">
              December 2011 - August 2016
            </Typography>
          </Position>

          <Description>
            <ListItem>
              <ListItemText
                primary="Collaborated with Financial Advisers in the administration of
            employee insurance policies for a portfolio of some SMEs, mostly
            large Singapore-based and multinational companies."
              />
            </ListItem>
          </Description>

          <Position>
            <Typography component="h3" variant="h4">
              Campaign Planning and Implementation Executive
            </Typography>
            <Typography component="h4" variant="h6">
              AIA Singapore, Singapore
            </Typography>
            <Typography component="h4" variant="h6">
              June 2007 - December 2011
            </Typography>
          </Position>

          <Description>
            <ListItem>
              <ListItemText
                primary="Started as a Telemarketer, where I was awarded Top Quality Sales
            Performance for 2007 and Gold Award for Outstanding Achievement in
            Quality Assurance in 2008."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Promoted to Team Leader in August 2009, where I led and coached a
            team of five telemarketers."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Lateral move to Executive role in May 2011, where I provided
            administrative support to the Telemarketing Team such as generating
            telemarketer, sales, and incentives reports and coordinating
            team-building activities for health and well-being."
              />
            </ListItem>
          </Description>
        </Box>
      </Paper>
    </Container>
  )
}

export default Experience
