export function Benefits() {
  const items = [
    {
      number: "70%",
      subtitle: "Menos Tempo em Tarefas Manuais",
      title: "Aumento da Eficiência",
      desc: "Automatize processos manuais e reduza o tempo gasto em tarefas repetitivas em até 70%.",
    },
    {
      number: "40%",
      subtitle: "Redução de Custos Operacionais",
      title: "Redução de Custos",
      desc: "Otimize recursos e elimine desperdícios, resultando em economia significativa para sua empresa.",
    },
    {
      number: "100%",
      subtitle: "Visibilidade dos Processos",
      title: "Controle Total",
      desc: "Tenha visibilidade completa de todos os processos do seu negócio em tempo real.",
    },
    {
      number: "∞",
      subtitle: "Potencial de Crescimento",
      title: "Crescimento Escalável",
      desc: "Soluções que crescem junto com seu negócio, sem limitações de capacidade.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center text-brand-dark mb-4">
        Por que Escolher a{" "}
        <span className="text-brand-pink">Automação EmeJota?</span>
      </h3>
      <p className="text-center text-brand-dark/70 mb-12">
        Nossa experiência e dedicação resultam em benefícios reais e
        mensuráveis para o seu negócio.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-brand-white shadow p-6 rounded-2xl text-center hover:shadow-lg transition"
          >
            {/* Número / Ícone */}
            <div className="text-4xl font-bold text-brand-blue mb-2">
              {item.number}
            </div>
            <p className="text-sm text-brand-dark/70">{item.subtitle}</p>

            {/* Título */}
            <h4 className="text-lg font-semibold text-brand-dark mt-3">
              {item.title}
            </h4>

            {/* Descrição */}
            <p className="text-brand-dark/80 mt-2 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}