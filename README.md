# ChinoFrio Landing Page

Landing page profesional para captación de clientes de servicio técnico de **neveras y aire acondicionado** en **Montería, Colombia**.

Enfocada en conversiones rápidas:
- Contacto por WhatsApp
- Agendamiento de visita técnica
- Solicitud de servicio con Netlify Forms

## Stack tecnológico

- **React + Vite**
- **TailwindCSS**
- **Netlify** para despliegue y recepción de formularios
- **GitHub / GitHub Codespaces** para desarrollo

## Instalación

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

La app quedará disponible en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue en Netlify

1. Sube este repositorio a GitHub.
2. En Netlify, selecciona **Add new site > Import from Git**.
3. Conecta tu repositorio y usa esta configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Verifica que Netlify detecte el formulario `solicitud-servicio` después del primer deploy.

> El archivo `netlify.toml` ya incluye build y redirect para SPA.

## Estructura del proyecto

```text
src/
  components/
    AppointmentForm.jsx
    FloatingWhatsApp.jsx
    Footer.jsx
    Hero.jsx
    HowItWorks.jsx
    Navbar.jsx
    ProblemList.jsx
    ServiceCards.jsx
    Testimonials.jsx
  pages/
    HomePage.jsx
  styles/
    index.css
  main.jsx
index.html
netlify.toml
```

## Conversión y UX incluidos

- Hero con propuesta de valor clara
- CTA principal por WhatsApp
- Botón flotante de WhatsApp visible siempre
- Flujo de servicio paso a paso
- Formulario optimizado para generar leads
- Secciones de prueba social y garantía para aumentar confianza
