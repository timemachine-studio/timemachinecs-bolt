import { useState } from 'react';
import { Message } from '../types/chat';

const INITIAL_MESSAGE: Message = {
  id: 1,
  content: "Hello! How can I help you travel through time today?",
  isAI: true
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      content,
      isAI: false
    }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        content: "Let me help you explore that time period. What specific aspects interest you?",
        isAI: true
      }]);
    }, 1000);
  };

  return {
    messages,
    showHistory,
    setShowHistory,
    handleSendMessage
  };
}