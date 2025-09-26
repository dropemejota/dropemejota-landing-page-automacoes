"use client";

import { Button } from "@/ui/components/button";

export function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-brand-gray py-20 text-center mt-24">
      <h2 className="text-4xl font-bold text-brand-blue">
        Automatize suas tarefas com Make, ManyChat, N8n e muito mais
      </h2>
      <p className="mt-4 text-lg text-brand-dark">
        Economize tempo, reduza custos e escale seus resultados com nossas
        automações personalizadas.
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        {/* Botão WhatsApp abre link externo normalmente */}
        <Button asChild size="lg" variant="primary">
          <a href="https://wa.me/558193283484" target="_blank">
            Fale no WhatsApp
          </a>
        </Button>

        {/* Botão Email faz scroll suave */}
        <Button
          size="lg"
          variant="outline"
          onClick={() => handleScroll("#contato")}
        >
          Enviar E-mail
        </Button>
      </div>
    </section>
  );
}
