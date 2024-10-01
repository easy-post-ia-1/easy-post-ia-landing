export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "en";

type TranslationKeys = {
  [key: string]: string;
};

interface uiI18n {
  [lang: string]: TranslationKeys;
}

export const ui: uiI18n = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.about_us": "About Us",
    "nav.login_signup": "Login",

    "section.home.headline":
      "Automate and connect, so you can focus on what truly matters.",
    "section.home.desc":
      "Web and App that helps you manage your social networks of your company.",

    "section.features.benefit1": "Reduce Time",
    "section.features.benefit2": "Organize with your Team",
    "section.features.benefit3": "Stay Clean Schedule",

    "section.reviews.title": "Reviews",

    "section.get_app.title": "May your life become simpler",
    "section.get_app.desc1":
      "Download the app and start enjoying taking control of your social networks and",
    "section.get_app.desc2": "simplify your life.",

    "btn.login": "Login",
    "btn.sign_up": "Get Started",
    "btn.cta": "Get App",
    "btn.install": "Install App",

    "section.footer.company": "Company",
    "section.footer.about": "About",
    "section.footer.contacts": "Contacts",
    "section.footer.vacancies": "Vacancies",

    "section.reviews.blockquote":
      "The first rule of Fight Club is: No one talks about Fight Club.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.about_us": "Sobre nosotros",
    "nav.login_signup": "Login",

    "section.home.headline":
      "Automatiza y conecta, para que puedas centrarte en lo que de verdad importa",
    "section.home.desc":
      "Web y App que te ayuda a gestionar las redes sociales de tu empresa",

    "section.features.title": "features",
    "section.features.benefit1": "Reduce Tiempo",
    "section.features.benefit2": "Organízate con tu equipo",
    "section.features.benefit3": "Mantén limpio tu horario",

    "section.reviews.title": "Reseñas",

    "section.get_app.title": "Que tu vida sea más sencilla",
    "section.get_app.desc1":
      "Descarga el app y empieza a disfrutar tomando el control de tus redes sociales y",
    "section.get_app.desc2": "simplifica tu vida",

    "btn.login": "Iniciar sesión",
    "btn.sign_up": "Regístrate!",
    "btn.cta": "Obtener aplicación",
    "btn.install": "Instalar App",

    "section.footer.company": "Empresa",
    "section.footer.about": "Acerca de",
    "section.footer.contacts": "Contactos",
    "section.footer.vacancies": "Vacantes",

    "section.reviews.blockquote":
      "La primera regla del Club de la pelea es: Nadie habla sobre el Club de la pelea.",
  },
} as const;
