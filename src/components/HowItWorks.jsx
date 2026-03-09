const steps = [
  'Solicitas diagnóstico',
  'Técnico visita el lugar',
  'Diagnóstico técnico',
  'Cotización inmediata',
  'Cliente aprueba reparación'
];

const HowItWorks = () => (
  <section id="proceso" className="py-14">
    <div className="container-page">
      <h2 className="section-title">¿Cómo funciona el servicio?</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl bg-slate-900 p-4 text-white shadow">
            <p className="text-xs font-bold text-emerald-300">PASO {index + 1}</p>
            <p className="mt-2 text-sm font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
