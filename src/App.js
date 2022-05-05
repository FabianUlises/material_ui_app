// import logo from './logo.svg';
import './App.css';
import { CssBaseline, Container } from '@material-ui/core';

import GridLayout from './components/GridLayout';


function App() {
  return (
    <div className="App">
      {/* <CssBaseline /> */}
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
