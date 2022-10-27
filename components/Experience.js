import { Container, Box, Typography } from '@mui/material'

const Experience = () => {
  return (
    <Container>
      <Box>
        <Typography component="h2" variant="h2">
          Experience
        </Typography>

        <Typography component="h3" variant="h3">
          Trainee - Full Stack Web Development
        </Typography>
        <Typography component="h4" variant="h4">
          Dev Academy Aotearoa
        </Typography>
        <Typography component="h4" variant="h4">
          April 2022 - July 2022
        </Typography>
        <Typography variant="body1" align="justify">
          This was a 15-week full immersion software development bootcamp that
          mimics a real-life development team as closely as possible. The course
          taught us a modern web dev stack using technologies such as HTML5,
          CSS3, JavaScript, React, Redux, Knex, SQLite3, Node.js, and
          Express.js. We learned by doing and explored unit testing,
          asynchronous programming techniques, RESTful APIs, and GitHub.
        </Typography>
        <Typography variant="body1" align="justify">
          Each week, we were given hands-on challenges to do on my own or
          construct web applications by pair programming.
        </Typography>
        <Typography variant="body1" align="justify">
          The program strongly emphasised human skills, empathy, and well-being.
          Every Friday, we would join forces and build applications in teams of
          four. This gave me opportunities to exercise giving and receiving
          growth feedback and working in teams using agile methodology.
        </Typography>
        <Typography variant="body1" align="justify">
          For our final project (https://github.com/matai-2022/dev-invaders), my
          team of four learned to use Phaser 3 and built a 2D game in less than
          a week. Our approach was to divide and conquer the game’s components.
          I was responsible for the parallax background and bringing the rest of
          the components together. I paired up with a teammate to implement the
          colliders (for game elements that interact with each other), to apply
          the animation and random spawning of the enemies, and to look after a
          component dedicated to fixing programming bugs. It was an awesome
          experience to sample a bit of game development and great fun to pick
          up a new framework and figure it out with my teammates.
        </Typography>

        <Typography component="h3" variant="h3">
          Senior Insurer & Consumer Specialist
        </Typography>
        <Typography component="h4" variant="h4">
          Marsh Limited, New Zealand
        </Typography>
        <Typography component="h4" variant="h4">
          January 2017 - May 2022
        </Typography>
        <Typography variant="body1" align="justify">
          Started as Insurer & Consumer Specialist and promoted to Senior
          position in May 2020.
        </Typography>
        <Typography variant="body1" align="justify">
          Collaborated with the Financial Advisers, Insurers and Clients to
          manage employee insurance policies for a portfolio of New
          Zealand-based and multinational companies.
        </Typography>
        <Typography variant="body1" align="justify">
          Exhibited strong attention to detail in processing data (including
          consolidating, filtering, sorting, and matching) using Microsoft Excel
          and in auditing documents and calculations produced by the Ops Team
          before being dispatched to internal and external clients.
        </Typography>
        <Typography variant="body1" align="justify">
          Demonstrated leadership and mentorship, appointed as the Team'’'s
          go-to-person for industry knowledge or advice for non-standard
          situations and trainer for new team members.
        </Typography>
        <Typography variant="body1" align="justify">
          Contributed to the global project to implement a new system that
          includes mapping out processes, user acceptance testing, and user
          training.
        </Typography>

        <Typography component="h3" variant="h3">
          Policy Administration Executive
        </Typography>
        <Typography component="h4" variant="h4">
          Mercer (Singapore) Pte Ltd, Singapore
        </Typography>
        <Typography component="h4" variant="h4">
          December 2011 - August 2016
        </Typography>
        <Typography variant="body1" align="justify">
          Collaborated with Financial Advisers in the administration of employee
          insurance policies for a portfolio of some SMEs, mostly large
          Singapore-based and multinational companies.
        </Typography>

        <Typography component="h3" variant="h3">
          Campaign Planning and Implementation Executive
        </Typography>
        <Typography component="h4" variant="h4">
          AIA Singapore, Singapore
        </Typography>
        <Typography component="h4" variant="h4">
          June 2007 - December 2011
        </Typography>
        <Typography variant="body1" align="justify">
          Started as a Telemarketer, where I was awarded Top Quality Sales
          Performance for 2007 and Gold Award for Outstanding Achievement in
          Quality Assurance in 2008.
        </Typography>
        <Typography variant="body1" align="justify">
          Promoted to Team Leader in August 2009, where I led and coached a team
          of five telemarketers.
        </Typography>
        <Typography variant="body1" align="justify">
          Lateral move to Executive role in May 2011, where I provided
          administrative support to the Telemarketing Team such as generating
          telemarketer, sales, and incentives reports and coordinating
          team-building activities for health and well-being.
        </Typography>
      </Box>
    </Container>
  )
}

export default Experience
