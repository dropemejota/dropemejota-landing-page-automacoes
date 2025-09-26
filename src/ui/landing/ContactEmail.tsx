"use client";

import { useState } from "react";

export default function ContactEmailForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    setLoading(false);
    setStatus(data.success ? "✅ Mensagem enviada!" : "❌ Erro ao enviar.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Seu nome"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue text-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue text-black"
        required
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        rows={4}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-blue text-black"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue transition"
      >
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
