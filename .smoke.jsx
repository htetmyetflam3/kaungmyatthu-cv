import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Portfolio from './src/pages/Portfolio.jsx';
const html = renderToStaticMarkup(React.createElement(Portfolio));
console.log('chars', html.length, '| cards', (html.match(/class="work-card"/g)||[]).length);
console.log('meta-copy gone:', !/Click a card|detail lives there|shown as text, not as pictures/.test(html));
console.log(/Eight pieces of work/.test(html), '|', /The years in between/.test(html));
