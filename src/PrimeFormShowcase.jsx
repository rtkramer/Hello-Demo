import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function PrimeFormShowcase() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('option1');
  const [dropdown, setDropdown] = useState(null);
  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--font-family)', background: 'var(--surface-ground)', minHeight: '100vh' }}>
      <h2 style={{ color: 'var(--text-color)' }}>PrimeReact Form & Button Showcase</h2>
      <div className="p-fluid p-formgrid p-grid" style={{ maxWidth: 400 }}>
        <div className="p-field p-col-12">
          <label htmlFor="inputText">Text</label>
          <InputText id="inputText" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="inputNumber">Number</label>
          <InputNumber id="inputNumber" value={number} onValueChange={e => setNumber(e.value)} />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="inputPassword">Password</label>
          <Password id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} toggleMask feedback={false} />
        </div>
        <div className="p-field-checkbox p-col-12">
          <Checkbox inputId="inputCheckbox" checked={checked} onChange={e => setChecked(e.checked)} />
          <label htmlFor="inputCheckbox" style={{ marginLeft: 8 }}>Accept Terms</label>
        </div>
        <div className="p-field-radiobutton p-col-12">
          <RadioButton inputId="radio1" name="radio" value="option1" onChange={e => setRadio(e.value)} checked={radio === 'option1'} />
          <label htmlFor="radio1" style={{ marginLeft: 8 }}>Option 1</label>
        </div>
        <div className="p-field-radiobutton p-col-12">
          <RadioButton inputId="radio2" name="radio" value="option2" onChange={e => setRadio(e.value)} checked={radio === 'option2'} />
          <label htmlFor="radio2" style={{ marginLeft: 8 }}>Option 2</label>
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="dropdown">Dropdown</label>
          <Dropdown id="dropdown" value={dropdown} options={dropdownOptions} onChange={e => setDropdown(e.value)} placeholder="Select an option" />
        </div>
        <div className="p-field p-col-12" style={{ marginTop: 16 }}>
          <Button label="Submit" icon="pi pi-check" className="p-button-success" />
          <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" style={{ marginLeft: 8 }} />
        </div>
      </div>
    </div>
  );
}
