import React, { useState } from "react";

export default function ChatBox() {
  const [mensagem, setMensagem] = useState("");
  const [respostas, setRespostas] = useState([]);

  const enviar = async () => {
    const res = await fetch("http://localhost:8000/mensagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensagem }),
    });
    const data = await res.json();
    setRespostas((prev) => [...prev, { texto: data.resposta, emocao: data.emocao }]);
    setMensagem("");
  };

  return (
    <div className="chatbox">
      <div className="mensagens">
        {respostas.map((r, i) => (
          <p key={i}><b>Ester ({r.emocao}):</b> {r.texto}</p>
        ))}
      </div>
      <input value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Fale com Ester..." />
      <button onClick={enviar}>Enviar</button>
    </div>
  );
}
