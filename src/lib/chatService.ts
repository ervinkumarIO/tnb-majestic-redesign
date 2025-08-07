import OpenAI from 'openai';
import { CHAT_CONFIG } from './chatConfig';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: CHAT_CONFIG.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you should use a backend API
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class ChatService {
  private conversationHistory: ChatMessage[] = [
    {
      role: 'system',
      content: CHAT_CONFIG.SYSTEM_PROMPT
    }
  ];

  async sendMessage(userMessage: string): Promise<string> {
    try {
      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: CHAT_CONFIG.MODEL,
        messages: this.conversationHistory,
        max_tokens: CHAT_CONFIG.MAX_TOKENS,
        temperature: CHAT_CONFIG.TEMPERATURE,
      });

      const assistantMessage = completion.choices[0]?.message?.content || 
        'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our hotline at 15454.';

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });

      // Keep conversation history manageable (last 10 messages)
      if (this.conversationHistory.length > 11) {
        this.conversationHistory = [
          this.conversationHistory[0], // Keep system prompt
          ...this.conversationHistory.slice(-10)
        ];
      }

      return assistantMessage;
    } catch (error) {
      console.error('Chat service error:', error);
      
      // Fallback response for API errors
      if (error instanceof Error && error.message.includes('API key')) {
        return 'I\'m currently unable to connect to our support system. Please contact our customer service hotline at 15454 for immediate assistance.';
      }
      
      return 'I\'m experiencing some technical difficulties. Please try again in a moment, or contact our hotline at 15454 for immediate help.';
    }
  }

  clearHistory() {
    this.conversationHistory = [
      {
        role: 'system',
        content: CHAT_CONFIG.SYSTEM_PROMPT
      }
    ];
  }
}