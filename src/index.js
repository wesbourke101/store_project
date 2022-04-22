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

