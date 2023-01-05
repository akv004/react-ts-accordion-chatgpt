import * as React from 'react';
import { Accordion } from './Accordion';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Accordion items={[  {    title: 'Section 1',    content: 'Section 1 content',  },  {    title: 'Section 2',    content: 'Section 2 content',  },  {    title: 'Section 3',    content: 'Section 3 content',  },]} />

    </div>
  );
}
