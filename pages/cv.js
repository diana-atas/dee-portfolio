import CV from '../components/CV'
import CatsInSpace from '../components/CatsInSpace'

export default function CVPage() {
  return (
    <>
      {/* <CatsInSpace /> */}
      <CV />
    </>
  )
}

export async function getServerSideProps(context) {
  await waitload(2)
  return {
    props: { dummy: 'dummy' },
  }
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
