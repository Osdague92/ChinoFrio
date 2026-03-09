const problems = [
  'La nevera no enfría',
  'El aire acondicionado gotea',
  'El compresor no arranca',
  'El aire no enfría bien',
  'La nevera hace ruido'
];

const ProblemList = () => (
  <section className="py-14">
    <div className="container-page">
      <h2 className="section-title">¿Tu equipo presenta alguno de estos problemas?</h2>
      <p className="section-subtitle">Atendemos fallas comunes con diagnóstico claro y solución rápida.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <div key={problem} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
            {problem}
          </div>
        ))}
      </div>
      <a className="primary-btn mt-8" href="#agendar">Solicitar diagnóstico</a>
    </div>
  </section>
);

export default ProblemList;
