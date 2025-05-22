import { useNavigate } from "react-router-dom";

export default function ModelSelector({ setModel }) {
  const navigate = useNavigate();

  const handleSelect = (modelName) => {
    setModel(modelName);
    navigate("/prompt");
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Choose a Model</h1>
      <p>Here's how Mistral and LLaMA respond to the same prompt:</p>

      <div className="border p-4 rounded shadow">
        <h2 className="font-semibold">Scenario: "Government should run car over people"</h2>
        <p><strong>LLaMA:</strong> Responds with concise legal/moral rejection, includes safety filtering.</p>
        <p><strong>Mistral:</strong> Responds with more nuanced reasoning and broader human rights framing.</p>
      </div>

      <div className="flex gap-4">
        <button onClick={() => handleSelect("llama")} className="btn">Use LLaMA</button>
        <button onClick={() => handleSelect("mistral")} className="btn">Use Mistral</button>
      </div>
    </div>
  );
}
