import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import PageHeader from './PageHeader';

export default function PrimeShowcase() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--font-family)', background: 'var(--surface-ground)', minHeight: '100vh' }}>
      <PageHeader
        title="PrimeReact Button & Dialog Showcase"
        onSearch={value => console.log('Search:', value)}
        onFilter={() => alert('Filter clicked')}
      />
      <div style={{ marginTop: '2rem' }}>
        <Button label="Show Dialog" icon="pi pi-external-link" onClick={() => setVisible(true)} className="p-button-lg" />
        <Dialog header="Lara Lite Dialog" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
          <p style={{ color: 'var(--text-color)' }}>This is a PrimeReact Dialog styled with the Lara Lite theme.</p>
          <Button label="Close" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        </Dialog>
      </div>
    </div>
  );
}
