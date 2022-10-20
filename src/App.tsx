import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  margin: 15px 30px;
`;

export default App;
