import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PromptInput({ model, setPrompt }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setPrompt(input);
    navigate("/response");
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Model: {model}</h1>
      <textarea
        className="w-full border rounded p-2"
        rows="5"
        placeholder="Enter your prompt here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="btn">Submit</button>
    </div>
  );
}
