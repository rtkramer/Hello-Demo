import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';
import { Divider } from 'primereact/divider';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';

const FigmaMCPHeader = () => {
  const [selectedVariant, setSelectedVariant] = useState('Xxl Header + Buttons');

  const variants = [
    { label: 'Xxl Header + Buttons', value: 'Xxl Header + Buttons' },
    { label: 'Xl Header + Buttons', value: 'Xl Header + Buttons' },
    { label: 'Lg Header + Buttons', value: 'Lg Header + Buttons' }
  ];

  const getHeaderText = (variant) => {
    switch (variant) {
      case 'Xxl Header + Buttons':
        return 'Xxl Header';
      case 'Xl Header + Buttons':
        return 'Xl Header';
      case 'Lg Header + Buttons':
        return 'Lg Header';
      default:
        return 'Xxl Header';
    }
  };

  const getHeaderSize = (variant) => {
    switch (variant) {
      case 'Xxl Header + Buttons':
        return 'text-3xl'; // 24px
      case 'Xl Header + Buttons':
        return 'text-2xl'; // 20px
      case 'Lg Header + Buttons':
        return 'text-xl'; // 18px
      default:
        return 'text-3xl';
    }
  };

  // Create menubar items for the header
  const createMenubarItems = () => {
    return [
      {
        label: getHeaderText(selectedVariant),
        className: `${getHeaderSize(selectedVariant)} font-normal text-surface-900`,
        style: { 
          fontSize: selectedVariant.includes('Xxl') ? '24px' : 
                   selectedVariant.includes('Xl') ? '20px' : '18px',
          lineHeight: selectedVariant.includes('Xxl') ? '32px' : '28px',
          fontFamily: 'Inter, sans-serif'
        }
      }
    ];
  };

  // Create end template for buttons using proper PrimeReact Button components
  const createEndTemplate = () => {
    return (
      <div className="flex align-items-center gap-2">
        <Button
          outlined
          label="Outline"
          icon="pi pi-check"
          size="small"
          severity="secondary"
          className="h-10"
        />
        <Button
          label="Primary"
          icon="pi pi-check"
          size="small"
          severity="primary"
          className="h-10"
        />
      </div>
    );
  };

  return (
    <div className="p-4">
      <Card className="mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Figma MCP Header Component</h2>
          <p className="text-gray-600 mb-4">
            This component was built using Figma MCP from your selected design with PrimeReact components.
          </p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Header Variant:
            </label>
            <Dropdown
              value={selectedVariant}
              options={variants}
              onChange={(e) => setSelectedVariant(e.value)}
              placeholder="Select a variant"
              className="w-full md:w-20rem"
            />
          </div>
        </div>
      </Card>

      {/* Header Component using PrimeReact Menubar */}
      <Card className="mb-4">
        <div className="surface-0 border-bottom-1 border-300">
          <Menubar
            model={createMenubarItems()}
            end={createEndTemplate()}
            className="border-none bg-transparent px-6 py-4"
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #b2c0c7'
            }}
          />
        </div>
      </Card>

      {/* Alternative Header using Card layout with proper PrimeReact Buttons */}
      <Card className="mb-4">
        <div className="flex align-items-center justify-content-between px-6 py-4 surface-0 border-bottom-1 border-300">
          <div className="flex align-items-center">
            <h1 
              className={`${getHeaderSize(selectedVariant)} font-normal text-surface-900 m-0`}
              style={{
                fontSize: selectedVariant.includes('Xxl') ? '24px' : 
                         selectedVariant.includes('Xl') ? '20px' : '18px',
                lineHeight: selectedVariant.includes('Xxl') ? '32px' : '28px',
                fontFamily: 'Inter, sans-serif',
                color: '#2a3339'
              }}
            >
              {getHeaderText(selectedVariant)}
            </h1>
          </div>

          <div className="flex align-items-center gap-2">
            <Button
              outlined
              label="Outline"
              icon="pi pi-check"
              size="small"
              severity="secondary"
              className="h-10"
            />
            <Button
              label="Primary"
              icon="pi pi-check"
              size="small"
              severity="primary"
              className="h-10"
            />
          </div>
        </div>
      </Card>

      {/* Component Details using Card */}
      <Card>
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-2">Component Details</h3>
          <Divider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag text-primary"></i>
            <strong>Current Variant:</strong> {selectedVariant}
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-text text-primary"></i>
            <strong>Header Size:</strong> {getHeaderSize(selectedVariant)}
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-palette text-primary"></i>
            <strong>Primary Color:</strong> 
            <div 
              className="w-4 h-4 border-round border-1 border-300" 
              style={{ backgroundColor: '#0047BB' }}
            ></div>
            #0047BB
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-font text-primary"></i>
            <strong>Font Family:</strong> Inter
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FigmaMCPHeader; 