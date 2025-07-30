
import React, { useState } from 'react';
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import PrimeComponents from './PrimeComponents';
import PrimeThemeTokens from './PrimeThemeTokens';
import FigmaMCPHeader from './components/FigmaMCPHeader';
import FigmaMCPDialog from './components/FigmaMCPDialog';

import { Button } from 'primereact/button';
import { primeThemes } from './themeList';

const fontOptions = [
  { label: 'System Default', value: 'system-ui, sans-serif' },
  { label: 'Arial Narrow', value: 'Arial Narrow, Arial, sans-serif' },
  { label: 'Merriweather (Serif)', value: 'Merriweather, serif' },
  { label: 'Inter (Sans)', value: 'Inter, Arial, sans-serif' },
];

export default function PrimeDemoTabs() {
  const [theme, setTheme] = useState('lara-light-blue');
  const [radius, setRadius] = useState(8);
  const [fontFamily, setFontFamily] = useState(fontOptions[0].value);

  React.useEffect(() => {
    // Remove any existing theme link
    const prev = document.getElementById('prime-theme-link');
    if (prev) prev.remove();
    
    // Add new theme link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'prime-theme-link';
    link.href = `https://unpkg.com/primereact/resources/themes/${theme}/theme.css`;
    document.head.appendChild(link);

    // Set the font family variable globally
    document.documentElement.style.setProperty('--font-family', fontFamily);

    // Set the border radius variable globally
    const setRadiusVar = () => {
      document.documentElement.style.setProperty('--border-radius', `${radius}px`);
    };
    
    // Set immediately and after theme loads
    setRadiusVar();
    link.addEventListener('load', setRadiusVar);
    
    // Fallback: if link never loads, still set after a short delay
    setTimeout(setRadiusVar, 1000);
    
    // Cleanup
    return () => {
      link.removeEventListener('load', setRadiusVar);
    };
  }, [theme, radius, fontFamily]);

  // Prevent scrolling when component mounts or tabs change
  React.useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Prevent any automatic scrolling
    const preventScroll = (e) => {
      if (e.target.closest('.p-tabview-nav')) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };
    
    document.addEventListener('click', preventScroll);
    
    return () => {
      document.removeEventListener('click', preventScroll);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--surface-ground)', fontFamily: 'var(--font-family)' }}>
      {/* Toolbar Controls */}
      <div className="toolbar-controls" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ marginLeft: 32, fontWeight: 600 }}>Font Family:</span>
        <Dropdown 
          value={fontFamily} 
          options={fontOptions} 
          onChange={e => setFontFamily(e.value)} 
          style={{ width: 220 }} 
          placeholder="Select Font" 
        />
        <span style={{ fontWeight: 600 }}>Theme:</span>
        <Dropdown 
          value={theme} 
          options={primeThemes.map(t => ({ label: t, value: t }))} 
          onChange={e => setTheme(e.value)} 
          style={{ width: 260 }} 
          placeholder="Select Theme" 
        />
        <span style={{ marginLeft: 32, fontWeight: 600 }}>Border Radius:</span>
        <div style={{ width: 160 }}>
          <Slider 
            min={0} 
            max={32} 
            value={radius} 
            onChange={e => setRadius(e.value)} 
            step={1} 
            style={{ width: 140 }} 
          />
        </div>
        <span style={{ width: 32, textAlign: 'right', fontFamily: 'monospace' }}>{radius}px</span>
      </div>

      {/* Main Tab Content */}
      <TabView key="main-tabs" scrollable={false}>
        <TabPanel header="Prime Components">
          <PrimeComponents />
        </TabPanel>
        
        <TabPanel header="Theme Tokens & Visualizer">
          <PrimeThemeTokens />
        </TabPanel>
        
        <TabPanel header="Figma MCP Component">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Figma MCP Selected Component</h2>
            <p className="text-gray-600 mb-4">
              This component was built using Figma MCP from your currently selected design in Figma.
            </p>
            <FigmaMCPHeader />
          </div>
        </TabPanel>
        
        <TabPanel header="Figma MCP Dialog">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Figma MCP Dialog Component</h2>
            <p className="text-gray-600 mb-4">
              This dialog component was built using Figma MCP from your selected dialog design in Figma.
            </p>
            <FigmaMCPDialog />
          </div>
        </TabPanel>
        

      </TabView>
    </div>
  );
}
