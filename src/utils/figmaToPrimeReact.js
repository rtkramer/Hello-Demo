import React from 'react';

// PrimeReact component imports
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

/**
 * Convert Figma node data to PrimeReact component
 * @param {Object} figmaNode - The Figma node data
 * @returns {JSX.Element} PrimeReact component
 */
export function convertFigmaToPrimeReact(figmaNode) {
  const { type, name, fills, strokes, effects, characters, style } = figmaNode;

  // Map Figma component types to PrimeReact components
  switch (type) {
    case 'RECTANGLE':
      return convertRectangle(figmaNode);
    case 'TEXT':
      return convertText(figmaNode);
    case 'FRAME':
    case 'GROUP':
      return convertContainer(figmaNode);
    case 'COMPONENT':
    case 'INSTANCE':
      return convertComponent(figmaNode);
    default:
      return <div>Unsupported component type: {type}</div>;
  }
}

/**
 * Convert Figma rectangle to PrimeReact component
 */
function convertRectangle(figmaNode) {
  const { fills, strokes, cornerRadius, name } = figmaNode;
  
  // Check if it's a button based on name or properties
  if (name.toLowerCase().includes('button') || cornerRadius > 0) {
    return (
      <Button
        label={name}
        className={getButtonVariant(fills)}
        style={getStyles(figmaNode)}
      />
    );
  }

  // Check if it's an input field
  if (name.toLowerCase().includes('input') || name.toLowerCase().includes('field')) {
    return (
      <InputText
        placeholder={name}
        style={getStyles(figmaNode)}
      />
    );
  }

  // Default to a div with styling
  return (
    <div style={getStyles(figmaNode)}>
      {name}
    </div>
  );
}

/**
 * Convert Figma text to PrimeReact component
 */
function convertText(figmaNode) {
  const { characters, style } = figmaNode;
  
  return (
    <span style={getTextStyles(figmaNode)}>
      {characters}
    </span>
  );
}

/**
 * Convert Figma container to PrimeReact component
 */
function convertContainer(figmaNode) {
  const { children, name } = figmaNode;
  
  // Check if it's a card
  if (name.toLowerCase().includes('card')) {
    return (
      <Card title={name} style={getStyles(figmaNode)}>
        {children?.map((child, index) => (
          <div key={index}>
            {convertFigmaToPrimeReact(child)}
          </div>
        ))}
      </Card>
    );
  }

  // Default to a div container
  return (
    <div style={getStyles(figmaNode)}>
      {children?.map((child, index) => (
        <div key={index}>
          {convertFigmaToPrimeReact(child)}
        </div>
      ))}
    </div>
  );
}

/**
 * Convert Figma component to PrimeReact component
 */
function convertComponent(figmaNode) {
  const { name, children } = figmaNode;
  
  // Map common component names to PrimeReact components
  const componentMap = {
    'button': Button,
    'input': InputText,
    'card': Card,
    'modal': Dialog,
    'dropdown': Dropdown,
    'checkbox': Checkbox,
    'radio': RadioButton
  };

  const componentName = name.toLowerCase();
  const PrimeComponent = Object.entries(componentMap).find(([key]) => 
    componentName.includes(key)
  )?.[1];

  if (PrimeComponent) {
    return React.createElement(PrimeComponent, {
      ...getComponentProps(figmaNode),
      children: children?.map((child, index) => convertFigmaToPrimeReact(child))
    });
  }

  return convertContainer(figmaNode);
}

/**
 * Get CSS styles from Figma node
 */
function getStyles(figmaNode) {
  const { fills, strokes, effects, absoluteBoundingBox } = figmaNode;
  
  return {
    width: absoluteBoundingBox?.width,
    height: absoluteBoundingBox?.height,
    backgroundColor: getFillColor(fills),
    border: getStrokeStyle(strokes),
    borderRadius: getCornerRadius(figmaNode),
    boxShadow: getShadow(effects),
    ...getTextStyles(figmaNode)
  };
}

/**
 * Get text styles from Figma node
 */
function getTextStyles(figmaNode) {
  const { style } = figmaNode;
  
  return {
    fontSize: style?.fontSize,
    fontWeight: style?.fontWeight,
    fontFamily: style?.fontFamily,
    color: style?.fills?.[0]?.color,
    textAlign: style?.textAlignHorizontal,
    lineHeight: style?.lineHeightPx
  };
}

/**
 * Get component-specific props
 */
function getComponentProps(figmaNode) {
  const { name, fills } = figmaNode;
  
  return {
    label: name,
    className: getButtonVariant(fills),
    style: getStyles(figmaNode)
  };
}

// Helper functions
function getFillColor(fills) {
  if (!fills || fills.length === 0) return 'transparent';
  const fill = fills[0];
  if (fill.type === 'SOLID') {
    const { r, g, b } = fill.color;
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  }
  return 'transparent';
}

function getStrokeStyle(strokes) {
  if (!strokes || strokes.length === 0) return 'none';
  const stroke = strokes[0];
  if (stroke.type === 'SOLID') {
    const { r, g, b } = stroke.color;
    return `1px solid rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  }
  return 'none';
}

function getCornerRadius(figmaNode) {
  return figmaNode.cornerRadius || 0;
}

function getShadow(effects) {
  if (!effects || effects.length === 0) return 'none';
  const shadow = effects.find(effect => effect.type === 'DROP_SHADOW');
  if (shadow) {
    return `${shadow.offset.x}px ${shadow.offset.y}px ${shadow.radius}px rgba(0,0,0,${shadow.color.a})`;
  }
  return 'none';
}

function getButtonVariant(fills) {
  if (!fills || fills.length === 0) return 'p-button-secondary';
  
  const fill = fills[0];
  if (fill.type === 'SOLID') {
    const { r, g, b } = fill.color;
    const brightness = (r + g + b) / 3;
    
    if (brightness < 0.3) return 'p-button-primary';
    if (brightness > 0.7) return 'p-button-secondary';
    return 'p-button-outlined';
  }
  
  return 'p-button-secondary';
}

/**
 * Extract Figma file key from URL
 */
export function extractFigmaFileKey(url) {
  // Handle different Figma URL formats
  const fileMatch = url.match(/figma\.com\/file\/([a-zA-Z0-9]+)/);
  const designMatch = url.match(/figma\.com\/design\/([a-zA-Z0-9]+)/);
  
  return fileMatch ? fileMatch[1] : (designMatch ? designMatch[1] : null);
}

/**
 * Get node ID from Figma URL
 */
export function extractNodeId(url) {
  const match = url.match(/node-id=([a-zA-Z0-9%]+)/);
  return match ? decodeURIComponent(match[1]) : null;
} 