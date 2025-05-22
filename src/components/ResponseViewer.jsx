import llamaImg from "../assets/llama_response.png";
import mistralImg from "../assets/mistral_response.png";

export default function ResponseViewer({ model }) {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold">Response from {model}</h1>
      <img
        src={model === "llama" ? llamaImg : mistralImg}
        alt={`${model} response`}
        className="rounded shadow mt-4"
      />
    </div>
  );
}
