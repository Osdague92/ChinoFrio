const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Atención en Montería</span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Reparación de Neveras y Aire Acondicionado en Montería</h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">Instalación, mantenimiento y reparación con garantía de hasta 180 días.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-btn" href="https://wa.me/573001112233?text=Hola%2C%20quiero%20contactar%20servicio%20t%C3%A9cnico" target="_blank" rel="noreferrer">Contactar por WhatsApp</a>
            <a className="secondary-btn" href="#agendar">Agendar visita técnica</a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <h2 className="text-lg font-bold text-slate-900">Respuesta rápida y técnica certificada</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>✔️ Diagnóstico profesional en sitio</li>
            <li>✔️ Repuestos de calidad y mano de obra garantizada</li>
            <li>✔️ Atención para hogares y negocios</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
