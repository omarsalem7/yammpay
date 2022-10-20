import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <Container>
      <Navbar />
      <Product />
    </Container>
  );
}

const Container = styled.div`
  margin: 15px 20px;
`;

export default App;
