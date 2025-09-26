export function Services() {
  return (
    <section id="servicos" className="py-16 px-8 bg-brand-white pt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-brand-blue mb-6 text-center md:text-center">
            Nossas Automaçãoes
          </h3>
          <p className="text-brand-dark mb-4 text-center md:text-left text-lg">
            Somos especialistas em transformação digital e automação comercial,
            com anos de experiência ajudando empresas a modernizar seus processos
            e alcançar novos patamares de eficiência.
          </p>
          <p className="text-brand-dark text-center md:text-left text-lg">
            Nossa missão é democratizar o acesso à tecnologia de automação,
            oferecendo soluções personalizadas que se adaptam às necessidades
            específicas de cada cliente, independentemente do porte da empresa.
          </p>
        </div>
        <div className="p-8 rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white" >
          <h4 className="text-2xl font-bold mb-6">Nossa Metodologia</h4>
          <ul className="space-y-6">
            <li>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-4">
                  1
                </span>
                <div>
                  <p className="font-semibold">Análise Detalhada</p>
                  <p className="text-sm opacity-90">
                    Compreendemos profundamente seus processos atuais
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-4">
                  2
                </span>
                <div>
                  <p className="font-semibold">Solução Personalizada</p>
                  <p className="text-sm opacity-90">
                    Desenvolvemos estratégia específica para sua empresa
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-4">
                  3
                </span>
                <div>
                  <p className="font-semibold">Implementação</p>
                  <p className="text-sm opacity-90">
                    Executamos com acompanhamento completo
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold mr-4">
                  4
                </span>
                <div>
                  <p className="font-semibold">Suporte Contínuo</p>
                  <p className="text-sm opacity-90">
                    Mantemos sua solução sempre atualizada
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold text-brand-pink">Chatbots</h4>
          <p className="text-brand-dark mt-2">
            Criação de bots no ManyChat e WhatsApp.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold text-brand-pink">Workflows</h4>
          <p className="text-brand-dark mt-2">
            Automação com Make e n8n.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h4 className="text-xl font-semibold text-brand-pink">IA Integrada</h4>
          <p className="text-brand-dark mt-2">
            Integrações com OpenAI, ChatGPT e muito mais.
          </p>
        </div>
      </div>
    </section>
  );
}
