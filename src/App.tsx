import { ContainerGrids } from './components/ContainerGrids';
import { Header } from './components/Header'
import { Heading } from './components/Heading'
import "./styles/global.scss"

export function App() {
  return (
    <>
      <Header />
      <Heading title={["title", "title2", "title3", "title4"]} />
      <ContainerGrids />
    </>
  )
}
