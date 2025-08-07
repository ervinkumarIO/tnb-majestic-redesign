# ChatGPT Integration Setup Guide

## Overview
Your TNB website now includes a ChatGPT-powered AI assistant that can help customers with:
- Electricity billing inquiries
- Power outage reports  
- Account management
- Service applications
- General TNB services

## Setup Instructions

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key (starts with `sk-`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
VITE_OPENAI_API_KEY=your_actual_api_key_here
VITE_CHAT_MODEL=gpt-3.5-turbo
VITE_CHAT_MAX_TOKENS=150
VITE_CHAT_TEMPERATURE=0.7
```

**Important**: Replace `your_actual_api_key_here` with your real OpenAI API key.

### 3. Alternative Configuration
If you prefer not to use environment variables, you can directly edit `src/lib/chatConfig.ts`:

```typescript
export const CHAT_CONFIG = {
  OPENAI_API_KEY: 'your_actual_api_key_here', // Replace this
  MODEL: 'gpt-3.5-turbo',
  MAX_TOKENS: 150,
  TEMPERATURE: 0.7,
  // ... rest of config
};
```

## Security Considerations

### For Development/Testing
- The current setup uses `dangerouslyAllowBrowser: true` which exposes your API key in the browser
- This is acceptable for development and testing
- Your API key will be visible to users in the browser's developer tools

### For Production (Recommended)
For a production environment, you should:

1. **Create a Backend API**: Move the OpenAI API calls to your backend server
2. **Proxy Requests**: Have your frontend call your backend, which then calls OpenAI
3. **Secure API Key**: Keep your OpenAI API key on the server only

Example backend endpoint structure:
```
POST /api/chat
Body: { message: "user message" }
Response: { reply: "AI response" }
```

## Customization

### Modify AI Behavior
Edit the system prompt in `src/lib/chatConfig.ts`:

```typescript
SYSTEM_PROMPT: `You are a helpful customer service assistant for TNB Malaysia...`
```

### Adjust Response Settings
- `MAX_TOKENS`: Maximum response length (150 = ~100-120 words)
- `TEMPERATURE`: Creativity level (0.0 = very focused, 1.0 = very creative)
- `MODEL`: AI model to use (`gpt-3.5-turbo` or `gpt-4`)

### Styling
The chat interface uses your existing Tailwind CSS theme and will automatically match your site's colors.

## Cost Management

### API Usage
- GPT-3.5-turbo: ~$0.002 per 1K tokens
- Average conversation: ~200-500 tokens
- Cost per conversation: ~$0.001-0.002

### Monitoring
- Monitor usage in your OpenAI dashboard
- Set up billing alerts
- Consider rate limiting for high traffic

## Testing

1. Build and deploy your site
2. Click the chat button (bottom right)
3. Send a test message like "What are TNB's operating hours?"
4. The AI should respond with relevant information

## Troubleshooting

### "API key error"
- Verify your API key is correct
- Check if you have OpenAI credits/billing set up
- Ensure the API key has the correct permissions

### "Network error"
- Check your internet connection
- Verify CORS settings if using a custom domain
- Check browser console for detailed errors

### No response
- Check browser console for JavaScript errors
- Verify the OpenAI package is installed: `npm list openai`
- Ensure environment variables are loaded correctly

## Support
For technical issues with the integration, check:
1. Browser console for error messages
2. Network tab for failed API calls
3. OpenAI dashboard for API usage and errors