import { Body } from './components/Body'
import { Container } from './components/Container'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App () {
  return (
    <div>
      <Header />
      <Container>
        <Body />
      </Container>
      <Footer />
    </div>
  )
}

export default App
