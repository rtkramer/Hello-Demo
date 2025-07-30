import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';

const FigmaMCPDialog = () => {
  const [visible, setVisible] = useState(false);
  const [dialogConfig, setDialogConfig] = useState({
    header: "Dialog Header",
    content: "This is a PrimeReact Dialog component. You can customize the header, content, and footer buttons. The dialog supports various configurations and follows PrimeReact design patterns.",
    showFooter: true,
    closable: true,
    draggable: false,
    resizable: false,
    modal: true,
    breakpoints: { '960px': '75vw', '641px': '90vw' },
    style: { width: '50vw' }
  });

  const [selectedSeverity, setSelectedSeverity] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('normal');

  const severityOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Info', value: 'info' },
    { label: 'Warning', value: 'warning' },
    { label: 'Help', value: 'help' },
    { label: 'Danger', value: 'danger' }
  ];

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
  ];

  const handleConfigChange = (key, value) => {
    setDialogConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getDialogStyle = () => {
    const baseStyle = { width: '50vw' };
    switch (selectedSize) {
      case 'small':
        return { ...baseStyle, width: '30vw' };
      case 'large':
        return { ...baseStyle, width: '70vw' };
      default:
        return baseStyle;
    }
  };

  const renderFooter = () => {
    if (!dialogConfig.showFooter) return null;

    return (
      <div className="flex justify-content-end gap-2">
        <Button
          outlined
          label="Cancel"
          icon="pi pi-times"
          onClick={() => setVisible(false)}
          severity="secondary"
        />
        <Button
          label="Confirm"
          icon="pi pi-check"
          onClick={() => setVisible(false)}
          severity={selectedSeverity}
        />
      </div>
    );
  };

  return (
    <div className="p-4">
      <Card className="mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">PrimeReact Dialog Demo</h2>
          <p className="text-gray-600 mb-4">
            This demonstrates the PrimeReact Dialog component with various configurations and styling options.
          </p>
          
          <Button
            label="Open Dialog"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
            className="mb-4"
            severity={selectedSeverity}
          />
        </div>
      </Card>

      {/* Dialog Configuration */}
      <Card className="mb-4">
        <h3 className="text-lg font-semibold mb-3">Dialog Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Button Severity:</label>
            <Dropdown
              value={selectedSeverity}
              options={severityOptions}
              onChange={(e) => setSelectedSeverity(e.value)}
              placeholder="Select severity"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dialog Size:</label>
            <Dropdown
              value={selectedSize}
              options={sizeOptions}
              onChange={(e) => setSelectedSize(e.value)}
              placeholder="Select size"
              className="w-full"
            />
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex align-items-center gap-2">
            <Checkbox
              inputId="showFooter"
              checked={dialogConfig.showFooter}
              onChange={(e) => handleConfigChange('showFooter', e.checked)}
            />
            <label htmlFor="showFooter" className="text-sm font-medium">Show Footer</label>
          </div>
          
          <div className="flex align-items-center gap-2">
            <Checkbox
              inputId="closable"
              checked={dialogConfig.closable}
              onChange={(e) => handleConfigChange('closable', e.checked)}
            />
            <label htmlFor="closable" className="text-sm font-medium">Closable</label>
          </div>
          
          <div className="flex align-items-center gap-2">
            <Checkbox
              inputId="draggable"
              checked={dialogConfig.draggable}
              onChange={(e) => handleConfigChange('draggable', e.checked)}
            />
            <label htmlFor="draggable" className="text-sm font-medium">Draggable</label>
          </div>
          
          <div className="flex align-items-center gap-2">
            <Checkbox
              inputId="resizable"
              checked={dialogConfig.resizable}
              onChange={(e) => handleConfigChange('resizable', e.checked)}
            />
            <label htmlFor="resizable" className="text-sm font-medium">Resizable</label>
          </div>
          
          <div className="flex align-items-center gap-2">
            <Checkbox
              inputId="modal"
              checked={dialogConfig.modal}
              onChange={(e) => handleConfigChange('modal', e.checked)}
            />
            <label htmlFor="modal" className="text-sm font-medium">Modal</label>
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Header Text:</label>
            <InputText
              value={dialogConfig.header}
              onChange={(e) => handleConfigChange('header', e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content:</label>
            <InputTextarea
              value={dialogConfig.content}
              onChange={(e) => handleConfigChange('content', e.target.value)}
              rows={3}
              className="w-full"
            />
          </div>
        </div>
      </Card>

      {/* PrimeReact Dialog Component */}
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        header={dialogConfig.header}
        footer={renderFooter}
        closable={dialogConfig.closable}
        draggable={dialogConfig.draggable}
        resizable={dialogConfig.resizable}
        modal={dialogConfig.modal}
        breakpoints={dialogConfig.breakpoints}
        style={getDialogStyle()}
        className="p-fluid"
      >
        <div className="flex align-items-center gap-2 mb-3">
          <i className="pi pi-info-circle text-primary"></i>
          <span className="font-medium">Dialog Information</span>
        </div>
        <p className="m-0 line-height-3">{dialogConfig.content}</p>
        
        <Divider />
        
        <div className="flex flex-column gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-check-circle text-green-500"></i>
            <span>PrimeReact Dialog component</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-check-circle text-green-500"></i>
            <span>Fully customizable header and footer</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-check-circle text-green-500"></i>
            <span>Responsive design with breakpoints</span>
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-check-circle text-green-500"></i>
            <span>Draggable and resizable options</span>
          </div>
        </div>
      </Dialog>

      {/* Component Details */}
      <Card>
        <div className="mb-3">
          <h3 className="text-lg font-semibold mb-2">PrimeReact Dialog Features</h3>
          <Divider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-palette text-primary"></i>
            <strong>Current Severity:</strong> {selectedSeverity}
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-arrows-h text-primary"></i>
            <strong>Dialog Size:</strong> {selectedSize}
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-eye text-primary"></i>
            <strong>Modal:</strong> {dialogConfig.modal ? 'Yes' : 'No'}
          </div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-mouse text-primary"></i>
            <strong>Draggable:</strong> {dialogConfig.draggable ? 'Yes' : 'No'}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FigmaMCPDialog; 