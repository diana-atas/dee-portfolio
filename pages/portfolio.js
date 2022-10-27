import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
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
