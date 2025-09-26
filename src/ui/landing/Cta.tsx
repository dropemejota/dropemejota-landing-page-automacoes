"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactEmailForm from "./ContactEmail";
import { Button } from "@/ui/components/button"; 
export function Cta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="contato"
      className="bg-brand-blue text-brand-white py-10 text-center"
    >
      <h3 className="text-3xl font-bold">Pronto para automatizar sua empresa?</h3>
      <p className="mt-4">
        Fale agora mesmo e vamos construir sua automação!
      </p>

      <div className="mt-6 flex justify-center space-x-4">
        {/* Botão WhatsApp */}
        <Button
          asChild
          variant="primary"
          size="lg"
        >
          <a href="https://wa.me/558193283484">WhatsApp</a>
        </Button>

        {/* Botão abre modal */}
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsOpen(true)}
        >
          E-mail
        </Button>
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Botão fechar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>

              {/* Formulário */}
              <h4 className="text-2xl font-bold text-brand-blue mb-4">
                Enviar Mensagem
              </h4>
              <ContactEmailForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
