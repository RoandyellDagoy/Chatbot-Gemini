import { useRef } from "react";

const ChartForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]),
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]),
      600
    );
  };

  return (
    <form action="#" className="chart-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message....."
        className="input-message"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChartForm;
