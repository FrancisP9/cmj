export const siteData = {
  brand: {
    name: "CMJ Health Care & Beauty",
    city: "Bruxelles",
    address: "Rue du Pont Neuf 30, 1000 Bruxelles",
  },
  booking: {
    fresha: "https://www.fresha.com/fr/book-now/cmj-healthcare-beauty-ok1ka2gc/services?lid=2674538&eid=4717974&share&pId=2588919",
    treatwell: "", // à compléter si vous avez le lien
  },
  contact: {
    phone_display: "0473 31 18 15",
    phone_tel: "+32473311815",
    email: "ginfinie@cmjhb.be",
    hours_short: "Jeu–Sam 11:00–18:30",
    hours_detail: [
      { day: "Jeudi", hours: "11:00–18:30" },
      { day: "Vendredi", hours: "11:00–18:30" },
      { day: "Samedi", hours: "11:00–18:30" },
    ],
    maps_q: "Rue du Pont Neuf 30, 1000 Bruxelles",
  },
  hero: {
    title: "Votre beauté, notre expertise — au cœur de Bruxelles",
    subtitle: "Soin personnalisé, techniques avancées, expérience sereine.",
    image: "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/2p1mcwxw_about.jpg"
  },
  services: [
    {
      id: "epilation",
      title: "Épilation définitive (Laser & Électrolyse)",
      desc: "Solution durable pour tous types de poils et phototypes.",
      cta: "Prendre RDV",
    },
    {
      id: "visage",
      title: "Soins du visage",
      desc: "Microneedling, microdermabrasion, protocoles éclat & texture.",
      cta: "Découvrir",
    },
    {
      id: "mains-pieds",
      title: "Manucure & pédicure",
      desc: "Fini soigné, hygiène irréprochable.",
      cta: "Réserver",
    },
    {
      id: "massages",
      title: "Massages",
      desc: "Détente profonde, relâchement du stress urbain.",
      cta: "Planifier",
    },
  ],
  faqs: [
    { q: "Laser vs Électrolyse — quelle différence ?", a: "Le laser traite rapidement de larges zones en ciblant la mélanine du poil ; l’électrolyse détruit le bulbe poil par poil, idéale pour les poils clairs ou résiduels." },
    { q: "Phototypes et contre‑indications ?", a: "Les technologies actuelles s’adaptent à la plupart des phototypes. Certaines affections cutanées, grossesse ou prise de médicaments photo‑sensibilisants nécessitent un avis préalable." },
    { q: "Délais entre séances ?", a: "Selon la zone et la méthode : toutes les 4–6 semaines pour le laser en moyenne ; l’électrolyse se planifie selon la repousse ciblée." }
  ]
};