import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import Clock from './clock'
import Tabs from './tabs'

const tabs = [
    {title: "One", content: "I am the first"},
    {title: "Two", content: "I am the second"},
    {title: "Three", content: "I am the third"}
]


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(<div>
        <Clock/>
        <Tabs tabs={tabs}/>
    </div>)
})