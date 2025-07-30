#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔧 Figma MCP Server Setup\n');

console.log('To get your Figma API token:');
console.log('1. Go to https://figma.com and log in');
console.log('2. Navigate to Settings → Account → Personal access tokens');
console.log('3. Click "Create new token"');
console.log('4. Give it a name (e.g., "MCP Integration")');
console.log('5. Copy the token\n');

rl.question('Enter your Figma API token: ', (token) => {
  if (!token || token.trim() === '') {
    console.log('❌ No token provided. Setup cancelled.');
    rl.close();
    return;
  }

  // Create .env file
  const envContent = `FIGMA_API_KEY=${token.trim()}\n`;
  const envPath = path.join(__dirname, '.env');

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file with your Figma API token');
    
    // Update mcp-config.json
    const configPath = path.join(__dirname, 'mcp-config.json');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      config.mcpServers.figma.env.FIGMA_API_KEY = token.trim();
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      console.log('✅ Updated mcp-config.json');
    }
    
    console.log('\n🎉 Setup complete! You can now use the Figma MCP server.');
    console.log('\nNext steps:');
    console.log('1. Start your development server: npm start');
    console.log('2. Go to the "Figma Component Builder" tab');
    console.log('3. Paste a Figma URL and test the integration');
    
  } catch (error) {
    console.error('❌ Error creating configuration files:', error.message);
  }
  
  rl.close();
}); 