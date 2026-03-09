const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#inicio" className="text-lg font-bold text-brand-700">ChinoFrio</a>
        <nav className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
          <a href="#servicios" className="hover:text-brand-700">Servicios</a>
          <a href="#proceso" className="hover:text-brand-700">Proceso</a>
          <a href="#testimonios" className="hover:text-brand-700">Testimonios</a>
          <a href="#agendar" className="hover:text-brand-700">Agendar</a>
        </nav>
        <a href="https://wa.me/573001112233?text=Hola%2C%20necesito%20servicio%20t%C3%A9cnico%20en%20Monter%C3%ADa" className="primary-btn py-2" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Navbar;
