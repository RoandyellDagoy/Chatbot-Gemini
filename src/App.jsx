import ChatbotIcon from "./components/ChatbotIcon";
import ChartForm from "./components/ChartForm";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./components/ChatMessage";
import { info } from "./info";

const App = () => {
  const [chatHistory, setChatHistory] = useState(() => {
    const storedChat = localStorage.getItem("chatHistory");
    return storedChat
      ? JSON.parse(storedChat)
      : [
          {
            hideInChat: true,
            role: "model",
            text: info,
          },
        ];
  });
  const [showChatBot, setShowChatBot] = useState(false);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ history }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong!!");

      const apiResponse = data.candidates[0].content.parts[0].text.trim();
      updateHistory(apiResponse);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : " "}`}>
      <button
        onClick={() => setShowChatBot((prev) => !prev)}
        id="chatbot-toggle"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatBot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hi there! <br /> how can i help you?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="chat-footer">
          <ChartForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
