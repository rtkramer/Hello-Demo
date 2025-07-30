
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
