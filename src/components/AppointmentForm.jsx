const AppointmentForm = () => (
  <section id="agendar" className="bg-white py-14">
    <div className="container-page grid gap-8 lg:grid-cols-2">
      <div>
        <h2 className="section-title">Agenda una visita técnica</h2>
        <p className="section-subtitle">Envíanos tus datos y te contactamos para confirmar el horario.</p>
      </div>
      <form
        name="solicitud-servicio"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
      >
        <input type="hidden" name="form-name" value="solicitud-servicio" />
        <p className="hidden">
          <label>
            No llenar: <input name="bot-field" />
          </label>
        </p>
        {[
          { label: 'Nombre', name: 'nombre', type: 'text' },
          { label: 'Teléfono', name: 'telefono', type: 'tel' },
          { label: 'Dirección', name: 'direccion', type: 'text' },
          { label: 'Tipo de equipo', name: 'tipo_equipo', type: 'text' },
          { label: 'Problema', name: 'problema', type: 'text' },
          { label: 'Horario preferido', name: 'horario_preferido', type: 'text' }
        ].map((field) => (
          <label key={field.name} className="block text-sm font-medium text-slate-700">
            {field.label}
            <input
              required
              type={field.type}
              name={field.name}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
          </label>
        ))}
        <button type="submit" className="primary-btn w-full">Enviar solicitud</button>
      </form>
    </div>
  </section>
);

export default AppointmentForm;
