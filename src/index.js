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

// import * as React from "react";
// import * as ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import Container from '@mui/material/Container';
// import App from "./App";

// function handleExpressRequest(req, res) {
//   // Handle redirects *before* you render and save yourself some time.
//   // Bonus: Send a HTTP 302 Found status code so crawlers don't index
//   // this page!
//   if (req.url === "/") {
//     return res.redirect("/home");
//   }

//   // If there aren't any redirects to process, go ahead and render...
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url}>
//       <Container align="center">
//         <App />
//       </Container>
//     </StaticRouter>
//   );

//   // ...and send a HTTP 200 OK status code so crawlers index the page.
//   res.end(html);
// }



