export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-blue text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-lg font-bold">EmeJota Automações</h1>
      </div>
      <nav className="space-x-6">
        <a href="#servicos" className="hover:text-brand-pink">Serviços</a>
        <a href="#contato" className="hover:text-brand-pink">Contato</a>
      </nav>
    </header>
  );
}
