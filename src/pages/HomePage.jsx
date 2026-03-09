import AppointmentForm from '../components/AppointmentForm';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import ProblemList from '../components/ProblemList';
import ServiceCards from '../components/ServiceCards';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemList />
        <ServiceCards />
        <HowItWorks />
        <AppointmentForm />

        <section className="py-14">
          <div className="container-page grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-brand-700 p-6 text-white shadow">
              <h2 className="text-2xl font-bold">Área de servicio</h2>
              <p className="mt-3 text-sm text-blue-100">
                Brindamos servicio técnico en Montería, Colombia, cubriendo hogares, locales y oficinas.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Garantía de servicio</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Reparaciones: 90 días</li>
                <li>• Instalaciones: hasta 180 días</li>
              </ul>
            </article>
          </div>
        </section>

        <Testimonials />

        <section className="bg-slate-900 py-16 text-white">
          <div className="container-page text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Necesitas un técnico hoy?</h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="primary-btn" href="https://wa.me/573001112233?text=Hola%2C%20necesito%20un%20t%C3%A9cnico%20hoy" target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="secondary-btn border-white/60 bg-transparent text-white hover:border-white hover:text-white" href="#agendar">Agendar visita</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default HomePage;
