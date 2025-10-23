import { Hero, About, Services} from '../sections/export'

function Home() {
  return (
    <>
      <Hero />
      <Services id="services" />
      <About id="about" />
    </>
  )
}

export default Home