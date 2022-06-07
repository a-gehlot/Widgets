import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import React from 'react';


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    const element = <h1>Hello, world</h1>;
    root.render(element)
})