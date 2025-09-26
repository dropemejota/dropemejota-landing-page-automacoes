"use client";

import Image from "next/image";

interface Tool {
  name: string;
  logo: string;
}

const tools: Tool[] = [
  { name: "Make", logo: "/logos/make-logo.png" },
  { name: "ManyChat", logo: "/logos/manychat-logo.png" },
  { name: "n8n", logo: "/logos/n8n-logo.png" },
  { name: "Zapier", logo: "/logos/zapier-logo.png" },
  { name: "Chatgpt", logo: "/logos/chatgpt-logo.png" },
  { name: "openai", logo: "/logos/openai-logo.png" },
  { name: "Google", logo: "/logos/google-logo.png" },
  { name: "Whatsapp", logo: "/logos/whatsapp-logo.png" },
];

export function Tools() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-brand-blue mb-10">
          Ferramentas que Utilizamos
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex justify-center items-center bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <Image
                src={tool.logo}
                alt={`Logo ${tool.name}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
