

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold text-brand-pink">Automação EmeJota</h4>
          <p className="mt-3 text-sm text-brand-gray">
            Especialistas em automação comercial, transformando negócios através da tecnologia e inovação. Sua empresa mais eficiente, nossa missão.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Navegação</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#servicos" className="hover:text-brand-pink">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-brand-pink">Sobre</a></li>
            <li><a href="#contato" className="hover:text-brand-pink">Contato</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contato</h5>
          <p className="text-sm">📧 dropemejota@gmail.com</p>
          <p className="text-sm">
            📱 <a href="https://wa.me/558193283484" className="hover:text-brand-pink">WhatsApp</a>
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-brand-gray pt-6 text-center text-xs text-brand-gray">
        © {new Date().getFullYear()} Automação EmeJota - Todos os direitos reservados.
      </div>
    </footer>
  );
}
