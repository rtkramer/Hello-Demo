import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const FigmaMCPDialog = () => {
  const [visible, setVisible] = useState(false);

  const renderFooter = () => {
    return (
      <div className="flex gap-3 justify-content-end">
        <Button 
          label="Button" 
          outlined 
          severity="secondary"
          style={{ 
            color: '#473cc5', 
            borderColor: '#473cc5',
            borderRadius: '1000px',
            padding: '10.5px 16px',
            fontSize: '16px',
            fontWeight: '600'
          }}
          onClick={() => setVisible(false)}
        />
        <Button 
          label="Button" 
          severity="primary"
          style={{ 
            backgroundColor: '#473cc5', 
            borderColor: '#473cc5',
            borderRadius: '1000px',
            padding: '10.5px 16px',
            fontSize: '16px',
            fontWeight: '600'
          }}
          onClick={() => setVisible(false)}
        />
      </div>
    );
  };

  return (
    <div className="p-4">
      <Button 
        label="Open Dialog" 
        icon="pi pi-external-link" 
        onClick={() => setVisible(true)}
        severity="primary"
      />
      
      <Dialog 
        header={
          <div className="flex justify-content-between align-items-center w-full">
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: '600', 
              color: '#212121',
              lineHeight: '34px',
              margin: 0,
              flex: 1
            }}>
              Integer posuere erat venenatis ista dapibus posuere velit aliquet.
            </h2>
          </div>
        }
        visible={visible} 
        onHide={() => setVisible(false)}
        footer={renderFooter()}
        style={{ 
          width: '655px',
          maxWidth: '90vw'
        }}
        headerStyle={{
          padding: '24px 24px 0 24px',
          border: 'none'
        }}
        contentStyle={{
          padding: '24px',
          fontSize: '16px',
          lineHeight: '20px',
          color: '#000000'
        }}
        footerStyle={{
          padding: '0 24px 32px 24px',
          border: 'none'
        }}
        closeIcon="pi pi-times"
        closeOnEscape={true}
        dismissableMask={true}
      >
        <p style={{ margin: 0 }}>
          Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
        </p>
      </Dialog>
    </div>
  );
};

export default FigmaMCPDialog; 