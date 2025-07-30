# Figma MCP Server Setup for PrimeReact

This guide will help you set up an MCP (Model Context Protocol) server to integrate Figma with your PrimeReact development workflow.

## Prerequisites

1. **Figma Account**: You need a Figma account with access to the designs you want to work with
2. **Figma API Token**: A personal access token from Figma

## Step 1: Get Your Figma API Token

1. Go to [Figma.com](https://figma.com) and log in
2. Navigate to **Settings** → **Account** → **Personal access tokens**
3. Click **Create new token**
4. Give it a name (e.g., "MCP Integration")
5. Copy the token (you won't be able to see it again)

## Step 2: Install MCP Server

The Figma MCP server is already installed in this project:

```bash
npm install figma-developer-mcp
```

## Step 3: Configure Environment Variables

Create a `.env` file in your project root:

```bash
FIGMA_API_KEY=your_figma_api_token_here
```

## Step 4: Available MCP Tools

The `figma-developer-mcp` server provides these tools:

- `get_figma_file`: Retrieve Figma file data
- `get_figma_node`: Get specific node information
- `download_figma_images`: Download images from Figma
- `get_figma_comments`: Retrieve comments from Figma files
- `get_figma_team_projects`: List team projects

## Step 5: Using with PrimeReact

### Example: Converting Figma Components to PrimeReact

```javascript
// Example workflow
const figmaNode = await mcpClient.callTool('get_figma_node', {
  file_key: 'your_file_key',
  node_id: 'your_node_id'
});

// Convert to PrimeReact component
const primeReactComponent = convertToPrimeReact(figmaNode);
```

### Common Figma to PrimeReact Mappings

| Figma Component | PrimeReact Component |
|----------------|---------------------|
| Button | `<Button>` |
| Input Field | `<InputText>` |
| Card | `<Card>` |
| Modal | `<Dialog>` |
| Dropdown | `<Dropdown>` |
| Checkbox | `<Checkbox>` |
| Radio Button | `<RadioButton>` |

## Step 6: Running the MCP Server

### Option 1: Direct Command
```bash
npx figma-developer-mcp --figma-api-key YOUR_TOKEN
```

### Option 2: With Environment File
```bash
npx figma-developer-mcp --env .env
```

### Option 3: Programmatically
```javascript
const { spawn } = require('child_process');

const mcpProcess = spawn('npx', ['figma-developer-mcp'], {
  env: { ...process.env, FIGMA_API_KEY: 'your_token' }
});
```

## Step 7: Integration with Your IDE

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
Add to your MCP configuration file.

## Troubleshooting

1. **Permission Errors**: Make sure your Figma API token has the necessary permissions
2. **File Access**: Ensure you have access to the Figma files you're trying to read
3. **Network Issues**: Check your internet connection and Figma API status

## Next Steps

1. Set up your Figma API token
2. Test the connection with a simple Figma file
3. Start converting your Figma designs to PrimeReact components
4. Integrate the MCP server with your development workflow

## Useful Commands

```bash
# Test the MCP server
npx figma-developer-mcp --help

# Get file information
npx figma-developer-mcp --figma-api-key YOUR_TOKEN get_figma_file --file-key FILE_KEY

# Download images
npx figma-developer-mcp --figma-api-key YOUR_TOKEN download_figma_images --file-key FILE_KEY --node-id NODE_ID
``` 