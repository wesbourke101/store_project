import React, {render} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Container from '@mui/material/Container';



ReactDOM.render(
  <React.StrictMode>
    <Container align="center">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
