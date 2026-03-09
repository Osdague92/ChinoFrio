const services = [
  {
    title: 'Reparación',
    items: ['neveras', 'congeladores', 'aire acondicionado']
  },
  {
    title: 'Instalación',
    items: ['instalación de aire split', 'instalación eléctrica básica']
  },
  {
    title: 'Mantenimiento',
    items: ['limpieza', 'revisión de gas refrigerante', 'mantenimiento preventivo']
  }
];

const ServiceCards = () => (
  <section id="servicios" className="bg-white py-14">
    <div className="container-page">
      <h2 className="section-title">Servicios técnicos especializados</h2>
      <p className="section-subtitle">Soluciones completas para mantener tus equipos en óptimo estado.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {service.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCards;
