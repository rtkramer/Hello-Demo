import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

const PrimeComponents = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [inputNumber, setInputNumber] = useState(null);
  const [password, setPassword] = useState('');

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const renderFooter = () => {
    return (
      <div className="flex gap-6 justify-content-end">
        <Button label="Cancel" icon="pi pi-times" onClick={() => setDialogVisible(false)} className="p-button-text" />
        <Button label="Save" icon="pi pi-check" onClick={() => setDialogVisible(false)} autoFocus />
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">PrimeReact Components</h1>
        <p className="text-gray-600">A showcase of various PrimeReact components and their variants.</p>
      </div>

      {/* Avatar Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Avatars</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar Sizes</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Avatar label="JD" size="xlarge" />
              <Avatar label="JD" size="large" />
              <Avatar label="JD" size="normal" />
              <Avatar label="JD" size="small" />
              <Avatar label="JD" size="xsmall" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar with Images</h3>
            <div className="flex flex-wrap gap-6">
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" />
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" />
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="large" />
              <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="large" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar with Icons</h3>
            <div className="flex flex-wrap gap-6">
              <Avatar icon="pi pi-user" size="large" />
              <Avatar icon="pi pi-home" size="large" />
              <Avatar icon="pi pi-cog" size="large" />
              <Avatar icon="pi pi-star" size="large" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar Shapes</h3>
            <div className="flex flex-wrap gap-6">
              <Avatar label="JD" size="large" shape="circle" />
              <Avatar label="JD" size="large" shape="square" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar with Badge</h3>
            <div className="flex flex-wrap gap-6">
              <div className="relative">
                <Avatar label="JD" size="large" className="p-overlay-badge">
                  <Badge severity="danger" />
                </Avatar>
              </div>
              <div className="relative">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" className="p-overlay-badge">
                  <Badge severity="success" />
                </Avatar>
              </div>
              <div className="relative">
                <Avatar icon="pi pi-user" size="large" className="p-overlay-badge">
                  <Badge value="3" severity="warning" />
                </Avatar>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar Group</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="normal" className="mr-2" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="normal" className="mr-2" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="normal" className="mr-2" />
                <Avatar label="+2" size="normal" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Badge Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Badges</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Badge Variants</h3>
            <div className="flex flex-wrap gap-6">
              <Badge value="Primary" severity="primary" />
              <Badge value="Secondary" severity="secondary" />
              <Badge value="Success" severity="success" />
              <Badge value="Info" severity="info" />
              <Badge value="Warning" severity="warning" />
              <Badge value="Danger" severity="danger" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Badge Sizes</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Badge value="Small" size="small" severity="primary" />
              <Badge value="Normal" severity="primary" />
              <Badge value="Large" size="large" severity="primary" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Dot Badges</h3>
            <div className="flex flex-wrap gap-6">
              <span className="p-badge p-badge-dot p-badge-primary"></span>
              <span className="p-badge p-badge-dot p-badge-secondary"></span>
              <span className="p-badge p-badge-dot p-badge-success"></span>
              <span className="p-badge p-badge-dot p-badge-info"></span>
              <span className="p-badge p-badge-dot p-badge-warning"></span>
              <span className="p-badge p-badge-dot p-badge-danger"></span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Badge with Icons</h3>
            <div className="flex flex-wrap gap-6">
              <Badge value="New" icon="pi pi-plus" severity="success" />
              <Badge value="Updated" icon="pi pi-refresh" severity="info" />
              <Badge value="Important" icon="pi pi-exclamation-triangle" severity="warning" />
              <Badge value="Error" icon="pi pi-times" severity="danger" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Badge on Buttons</h3>
            <div className="flex flex-wrap gap-6">
              <Button label="Notifications" icon="pi pi-bell" className="p-overlay-badge">
                <Badge value="8" severity="danger" />
              </Button>
              <Button label="Messages" icon="pi pi-envelope" className="p-overlay-badge">
                <Badge value="12" severity="info" />
              </Button>
              <Button label="Tasks" icon="pi pi-check-square" className="p-overlay-badge">
                <Badge value="3" severity="success" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Badge on Icons</h3>
            <div className="flex flex-wrap gap-6">
              <div className="relative">
                <i className="pi pi-home text-2xl"></i>
                <Badge value="5" severity="danger" className="absolute -top-2 -right-2" />
              </div>
              <div className="relative">
                <i className="pi pi-user text-2xl"></i>
                <Badge value="2" severity="warning" className="absolute -top-2 -right-2" />
              </div>
              <div className="relative">
                <i className="pi pi-cog text-2xl"></i>
                <Badge severity="success" className="absolute -top-2 -right-2" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Buttons Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-6">
              <Button label="Primary" severity="primary" />
              <Button label="Secondary" severity="secondary" />
              <Button label="Success" severity="success" />
              <Button label="Info" severity="info" />
              <Button label="Warning" severity="warning" />
              <Button label="Danger" severity="danger" />
              <Button label="Help" severity="help" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-6">
              <Button label="Filled" severity="primary" />
              <Button label="Outlined" outlined severity="primary" />
              <Button label="Text" text severity="primary" />
              <Button label="Link" link severity="primary" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Button label="Small" size="small" severity="primary" />
              <Button label="Normal" severity="primary" />
              <Button label="Large" size="large" severity="primary" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button with Icons</h3>
            <div className="flex flex-wrap gap-6">
              <Button icon="pi pi-check" label="Save" severity="success" />
              <Button icon="pi pi-times" label="Cancel" severity="secondary" />
              <Button icon="pi pi-search" label="Search" severity="info" />
              <Button icon="pi pi-download" label="Download" severity="primary" />
            </div>
          </div>
        </div>
      </Card>

      {/* Cards Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Basic Card" className="h-full">
            <p className="m-0">
              This is a basic card with a title and content. Cards are great for displaying content in a structured way.
            </p>
          </Card>
          
          <Card title="Card with Footer" footer={renderFooter()} className="h-full">
            <p className="m-0">
              This card has a footer with action buttons. You can customize the footer content as needed.
            </p>
          </Card>
          
          <Card className="h-full">
            <div className="flex align-items-center justify-content-center mb-4">
              <i className="pi pi-user" style={{ fontSize: '3rem' }}></i>
            </div>
            <h3 className="text-lg font-medium mb-4">User Profile</h3>
            <p className="m-0">
              This card shows a user profile with an icon and custom styling.
            </p>
          </Card>
        </div>
      </Card>

      {/* Chips Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Chips</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Basic Chips</h3>
            <div className="flex flex-wrap gap-6">
              <Chip label="Apple" />
              <Chip label="Orange" />
              <Chip label="Banana" />
              <Chip label="Mango" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Chips with Icons</h3>
            <div className="flex flex-wrap gap-6">
              <Chip label="React" icon="pi pi-star" />
              <Chip label="Vue" icon="pi pi-heart" />
              <Chip label="Angular" icon="pi pi-check" />
              <Chip label="PrimeReact" icon="pi pi-thumbs-up" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Removable Chips</h3>
            <div className="flex flex-wrap gap-6">
              <Chip label="Removable" removable />
              <Chip label="Another" removable />
              <Chip label="One More" removable />
            </div>
          </div>
        </div>
      </Card>

      {/* Dialog Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Dialog</h2>
        <div className="space-y-6">
          <div>
            <Button label="Show Dialog" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
          </div>
          
          <Dialog 
            header="Sample Dialog" 
            visible={dialogVisible} 
            style={{ width: '50vw' }} 
            footer={renderFooter()}
            onHide={() => setDialogVisible(false)}
          >
            <div className="space-y-6">
              <p className="m-0">
                This is a sample dialog with various form elements. You can include any content here.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Name</label>
                  <InputText placeholder="Enter your name" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Email</label>
                  <InputText placeholder="Enter your email" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Message</label>
                <InputTextarea placeholder="Enter your message" rows={3} className="w-full" />
              </div>
              
              <div className="flex items-center gap-6">
                <Checkbox 
                  inputId="dialog-agree" 
                  checked={checkboxValue} 
                  onChange={(e) => setCheckboxValue(e.checked)} 
                />
                <label htmlFor="dialog-agree" className="text-sm">I agree to the terms</label>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-3">Select Option</label>
                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <RadioButton 
                      inputId="dialog-option1" 
                      name="options" 
                      value="option1" 
                      onChange={(e) => setRadioValue(e.value)} 
                      checked={radioValue === 'option1'} 
                    />
                    <label htmlFor="dialog-option1" className="text-sm">Option 1</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioButton 
                      inputId="dialog-option2" 
                      name="options" 
                      value="option2" 
                      onChange={(e) => setRadioValue(e.value)} 
                      checked={radioValue === 'option2'} 
                    />
                    <label htmlFor="dialog-option2" className="text-sm">Option 2</label>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </Card>

      {/* Input Fields Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Input Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3">Text Input</label>
            <InputText placeholder="Enter text here" className="w-full" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">Number Input</label>
            <InputNumber 
              value={inputNumber} 
              onValueChange={(e) => setInputNumber(e.value)} 
              placeholder="Enter number"
              className="w-full" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">Password</label>
            <Password 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password"
              toggleMask 
              className="w-full" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">Dropdown</label>
            <Dropdown 
              value={selectedDropdown} 
              options={dropdownOptions} 
              onChange={(e) => setSelectedDropdown(e.value)} 
              placeholder="Select an option"
              className="w-full" 
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-3">Textarea</label>
            <InputTextarea 
              placeholder="Enter multiple lines of text here..." 
              rows={3} 
              className="w-full" 
            />
          </div>
        </div>
      </Card>

      {/* Tags Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Tags</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Tag Variants</h3>
            <div className="flex flex-wrap gap-6">
              <Tag value="Primary" severity="primary" />
              <Tag value="Secondary" severity="secondary" />
              <Tag value="Success" severity="success" />
              <Tag value="Info" severity="info" />
              <Tag value="Warning" severity="warning" />
              <Tag value="Danger" severity="danger" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Tags with Icons</h3>
            <div className="flex flex-wrap gap-6">
              <Tag value="New" icon="pi pi-plus" severity="success" />
              <Tag value="Updated" icon="pi pi-refresh" severity="info" />
              <Tag value="Important" icon="pi pi-exclamation-triangle" severity="warning" />
              <Tag value="Error" icon="pi pi-times" severity="danger" />
            </div>
          </div>
        </div>
      </Card>

      {/* Cards Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Basic Card" className="h-full">
            <p className="m-0">
              This is a basic card with a title and content. Cards are great for displaying content in a structured way.
            </p>
          </Card>
          
          <Card title="Card with Footer" footer={renderFooter()} className="h-full">
            <p className="m-0">
              This card has a footer with action buttons. You can customize the footer content as needed.
            </p>
          </Card>
          
          <Card className="h-full">
            <div className="flex align-items-center justify-content-center mb-4">
              <i className="pi pi-user" style={{ fontSize: '3rem' }}></i>
            </div>
            <h3 className="text-lg font-medium mb-4">User Profile</h3>
            <p className="m-0">
              This card shows a user profile with an icon and custom styling.
            </p>
          </Card>
        </div>
      </Card>

      {/* Dialog Section */}
      <Card className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Dialog</h2>
        <div className="space-y-6">
          <div>
            <Button label="Show Dialog" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
          </div>
          
          <Dialog 
            header="Sample Dialog" 
            visible={dialogVisible} 
            style={{ width: '50vw' }} 
            footer={renderFooter()}
            onHide={() => setDialogVisible(false)}
          >
            <div className="space-y-6">
              <p className="m-0">
                This is a sample dialog with various form elements. You can include any content here.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Name</label>
                  <InputText placeholder="Enter your name" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Email</label>
                  <InputText placeholder="Enter your email" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Message</label>
                <InputTextarea placeholder="Enter your message" rows={3} className="w-full" />
              </div>
              
              <div className="flex items-center gap-6">
                <Checkbox 
                  inputId="dialog-agree" 
                  checked={checkboxValue} 
                  onChange={(e) => setCheckboxValue(e.checked)} 
                />
                <label htmlFor="dialog-agree" className="text-sm">I agree to the terms</label>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-3">Select Option</label>
                <div className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <RadioButton 
                      inputId="dialog-option1" 
                      name="options" 
                      value="option1" 
                      onChange={(e) => setRadioValue(e.value)} 
                      checked={radioValue === 'option1'} 
                    />
                    <label htmlFor="dialog-option1" className="text-sm">Option 1</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioButton 
                      inputId="dialog-option2" 
                      name="options" 
                      value="option2" 
                      onChange={(e) => setRadioValue(e.value)} 
                      checked={radioValue === 'option2'} 
                    />
                    <label htmlFor="dialog-option2" className="text-sm">Option 2</label>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </Card>
    </div>
  );
};

export default PrimeComponents; 