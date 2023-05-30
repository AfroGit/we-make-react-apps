import './App.css';
import Container from './Container.jsx';
import Link from './Link.jsx';
import Button from './Button.jsx';
import Input from './Input.jsx'

export default function App() {
  return (
    <>
      <Container>
       <Link href="https://react-tutorial.app">Shop online</Link>
        <Button>Beyonce'</Button>
        <Input placeholder='lemonade'></Input>
      </Container>
      
    </>
  )
}
