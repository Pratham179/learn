// import React from 'react'
// import ReactDom from 'react-dom';
// import Heading from './Heading';
// import Para from './Para';

// ReactDom.render(
//     <>
//     <Heading/>
//     <Para/>
//     </>,document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import Heading from './Heading';
import Para from './Para';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Heading />
    <Para />
    <ol>
      <li>pratham</li>
      <li>garv</li>
      <li>sai</li>
      <li>anubhav</li>
    </ol>
  </>
);


