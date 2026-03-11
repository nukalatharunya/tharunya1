import { Bot, User } from "lucide-react";
import type { Message } from "@/lib/chat";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-3 py-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 ${
          isUser ? "bg-chat-user" : "bg-accent"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-chat-user-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-accent-foreground" />
        )}
      </div>
      <div
        className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-chat-user text-chat-user-foreground rounded-tr-sm"
            : "bg-chat-ai text-chat-ai-foreground rounded-tl-sm"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
