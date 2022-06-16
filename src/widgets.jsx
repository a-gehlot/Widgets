import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import Clock from './clock'
import Tabs from './tabs'
import Weather from './weather'
import Autocomplete from './autocomplete';

const tabs = [
    {title: "One", content: "I am the first"},
    {title: "Two", content: "I am the second"},
    {title: "Three", content: "I am the third"}
]

const names = ['Abba', 'Bobby', 'Barney', 'Jeff', 'Jenny', 'Sarah', 'Sally', 'Xander'];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(<div>
        <Clock/>
        <div className='middleRow'>
            <Tabs tabs={tabs} />
            <Weather />
        </div>
            <Autocomplete names={names} />
    </div>)
})