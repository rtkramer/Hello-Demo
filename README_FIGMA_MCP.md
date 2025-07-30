# Figma MCP Integration for PrimeReact

This project now includes a complete Figma MCP (Model Context Protocol) integration that allows you to convert Figma designs directly into PrimeReact components.

## 🚀 Quick Start

### 1. Set up your Figma API token

Run the setup script:
```bash
node setup-figma-token.js
```

Or manually create a `.env` file:
```bash
FIGMA_API_KEY=your_figma_api_token_here
```

### 2. Start the development server
```bash
npm start
```

### 3. Use the Figma Component Builder

1. Open your browser to `http://localhost:3000`
2. Click on the "Figma Component Builder" tab
3. Paste a Figma URL
4. Click "Fetch Figma Data"
5. Review and copy the generated PrimeReact component

## 📦 What's Included

### Installed Packages
- `figma-developer-mcp`: MCP server for Figma integration
- `@modelcontextprotocol/sdk`: MCP SDK for TypeScript
- `figma-api`: Official Figma API client

### Created Files
- `src/utils/figmaToPrimeReact.js`: Utility functions to convert Figma data to PrimeReact components
- `src/components/FigmaComponentBuilder.jsx`: UI component for the Figma integration
- `mcp-config.json`: MCP server configuration
- `setup-figma-token.js`: Setup script for API token
- `FIGMA_MCP_SETUP.md`: Detailed setup guide

## 🔧 How It Works

### 1. MCP Server
The `figma-developer-mcp` server provides these tools:
- `get_figma_file`: Retrieve Figma file data
- `get_figma_node`: Get specific node information
- `download_figma_images`: Download images from Figma
- `get_figma_comments`: Retrieve comments from Figma files

### 2. Component Conversion
The `figmaToPrimeReact.js` utility maps Figma elements to PrimeReact components:

| Figma Element | PrimeReact Component |
|---------------|---------------------|
| Rectangle (button-like) | `<Button>` |
| Rectangle (input-like) | `<InputText>` |
| Frame (card-like) | `<Card>` |
| Text | `<span>` with styling |
| Group/Frame | Container `<div>` |

### 3. Styling Conversion
- **Colors**: Converts Figma RGB values to CSS
- **Typography**: Maps font properties to CSS
- **Layout**: Converts positioning and sizing
- **Effects**: Converts shadows and other effects

## 🎯 Usage Examples

### Basic Usage
```javascript
import { convertFigmaToPrimeReact } from './utils/figmaToPrimeReact';

// Convert a Figma node to PrimeReact component
const figmaNode = {
  type: 'RECTANGLE',
  name: 'Primary Button',
  fills: [{ type: 'SOLID', color: { r: 0.2, g: 0.4, b: 0.8 } }],
  cornerRadius: 8
};

const component = convertFigmaToPrimeReact(figmaNode);
```

### URL Parsing
```javascript
import { extractFigmaFileKey, extractNodeId } from './utils/figmaToPrimeReact';

const url = 'https://figma.com/file/abc123/Design?node-id=123%3A456';
const fileKey = extractFigmaFileKey(url); // 'abc123'
const nodeId = extractNodeId(url); // '123:456'
```

## 🔌 MCP Server Configuration

### For Cursor/VS Code
Add to your settings.json:
```json
{
  "mcp.servers": {
    "figma": {
      "command": "npx",
      "args": ["figma-developer-mcp"],
      "env": {
        "FIGMA_API_KEY": "your_token"
      }
    }
  }
}
```

### For Claude Desktop
Use the `mcp-config.json` file that's already created.

## 🛠️ Development

### Testing the MCP Server
```bash
# Test the server
npx figma-developer-mcp --help

# Run with your token
npx figma-developer-mcp --figma-api-key YOUR_TOKEN
```

### Adding New Component Mappings
Edit `src/utils/figmaToPrimeReact.js` to add new Figma-to-PrimeReact mappings:

```javascript
// Add to the componentMap object
const componentMap = {
  'button': Button,
  'input': InputText,
  'card': Card,
  'modal': Dialog,
  'dropdown': Dropdown,
  'checkbox': Checkbox,
  'radio': RadioButton,
  // Add your new mappings here
  'your-component': YourPrimeComponent
};
```

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid Figma URL"**
   - Make sure you're using a valid Figma file URL
   - URL should look like: `https://figma.com/file/abc123/Design`

2. **"Failed to fetch Figma data"**
   - Check your API token is correct
   - Ensure you have access to the Figma file
   - Verify your internet connection

3. **"Permission denied" errors**
   - Make sure your Figma API token has the necessary permissions
   - Check that you have access to the specific file

### Debug Mode
Enable debug logging by setting the environment variable:
```bash
DEBUG=figma-developer-mcp npx figma-developer-mcp --figma-api-key YOUR_TOKEN
```

## 📚 Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [PrimeReact Documentation](https://primereact.org/)
- [figma-developer-mcp GitHub](https://github.com/glips/figma-developer-mcp)

## 🤝 Contributing

To improve the Figma-to-PrimeReact conversion:

1. Fork the repository
2. Add new component mappings in `figmaToPrimeReact.js`
3. Test with various Figma designs
4. Submit a pull request

## 📄 License

This integration is part of your PrimeReact project and follows the same license terms. 