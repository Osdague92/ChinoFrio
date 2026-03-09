const testimonials = [
  {
    name: 'María P.',
    text: 'Me repararon la nevera el mismo día. Muy puntuales y el técnico explicó todo claramente.'
  },
  {
    name: 'Carlos R.',
    text: 'Instalaron el aire split en mi oficina y quedó perfecto. Buen precio y garantía real.'
  },
  {
    name: 'Diana T.',
    text: 'Excelente servicio de mantenimiento, mi aire ahora enfría mucho mejor.'
  }
];

const Testimonials = () => (
  <section id="testimonios" className="bg-white py-14">
    <div className="container-page">
      <h2 className="section-title">Clientes que ya confiaron en nosotros</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <p>“{testimonial.text}”</p>
            <footer className="mt-3 font-semibold text-slate-900">{testimonial.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
