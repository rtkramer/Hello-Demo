const { spawn } = require('child_process');

// Test the Figma MCP server
async function testFigmaMCP() {
  console.log('Testing Figma MCP server...');
  
  const mcpProcess = spawn('npx', ['figma-developer-mcp', '--help'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  mcpProcess.stdout.on('data', (data) => {
    console.log('MCP Server output:', data.toString());
  });

  mcpProcess.stderr.on('data', (data) => {
    console.log('MCP Server error:', data.toString());
  });

  mcpProcess.on('close', (code) => {
    console.log(`MCP Server process exited with code ${code}`);
  });
}

testFigmaMCP(); 