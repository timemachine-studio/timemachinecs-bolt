export interface Message {
  id: number;
  content: string;
  isAI: boolean;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export interface ShowHistoryProps {
  showHistory: boolean;
  onToggle: () => void;
}

export interface MessageProps {
  content: string;
}