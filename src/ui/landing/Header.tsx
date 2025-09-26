"use client";

import Image from "next/image";

export function Header() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-blue text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 640px) 32px, 40px"
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-lg font-bold">EmeJota Automações</h1>
      </div>
      <nav className="space-x-6">
        <a
          href="#servicos"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#servicos");
          }}
          className="hover:text-brand-pink cursor-pointer"
        >
          Serviços
        </a>
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#contato");
          }}
          className="hover:text-brand-pink cursor-pointer"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
