// import React from 'react'
// import ReactDom from 'react-dom';
// import Heading from './Heading';
// import Para from './Para';
import './index.css';
// ReactDom.render(
//     <>
//     <Heading/>
//     <Para/>
//     </>,document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
// import Heading from './Heading';
// import Para from './Para';

const root = createRoot(document.getElementById('root'));
const name = "Pratham";
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
root.render(
  <>
    {/* <Heading />
    <Para />
    <ol>
      <li>pratham</li>
      <li>garv</li>
      <li>sai</li>
      <li>anubhav</li>
    </ol> */}
  <h1 className='heading'>{`my name is ${name}`}</h1>
  {/* <p>{`Today's current date is ${date}`}</p>
  <p>{`Today's current time is ${time}`}</p> */}
  <div className='img_div'>
  <img className='img' src='https://picsum.photos/200/300'/>
  <img className='img' src='https://picsum.photos/200/300'/>
  <img className='img' src='https://picsum.photos/200/300'/>
  </div>
    
  </>
);


