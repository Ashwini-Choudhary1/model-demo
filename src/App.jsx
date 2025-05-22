import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ModelSelector from "./components/ModelSelector";
import PromptInput from "./components/PromptInput";
import ResponseViewer from "./components/ResponseViewer";

function App() {
  const [model, setModel] = useState(null);
  const [prompt, setPrompt] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelSelector setModel={setModel} />} />
        <Route path="/prompt" element={<PromptInput model={model} setPrompt={setPrompt} />} />
        <Route path="/response" element={<ResponseViewer model={model} />} />
      </Routes>
    </Router>
  );
}

export default App;
