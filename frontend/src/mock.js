export const siteData = {
  brand: {
    name: "CMJ Health Care & Beauty",
    city: "Bruxelles",
    address: "Rue du Pont Neuf 30, 1000 Bruxelles",
  },
  booking: {
    fresha: "https://www.fresha.com/fr/book-now/cmj-healthcare-beauty-ok1ka2gc/services?lid=2674538&eid=4717974&share&pId=2588919",
    treatwell: "",
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
    image: "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/l5geduws_gallery-4.jpg",
    imageAlt: "Accueil & comptoir CMJ — intérieur"
  },
  serviceCategories: [
    {
      id: "electrolyse",
      title: "Électrolyse",
      intro: "Précision bulbe par bulbe pour un résultat définitif.",
      items: [
        "Poils résiduels/blonds/roux",
        "Petites zones (lèvre, menton, sourcils)",
        "Finition post‑laser"
      ]
    },
    {
      id: "laser",
      title: "Épilation laser",
      intro: "Technologie efficace pour de larges zones.",
      items: [
        "Visage (joues, lèvre, menton)",
        "Aisselles, maillot (classique/échancré/intégral)",
        "Jambes (demi/entières)",
        "Hommes (dos, torse, épaules)"
      ]
    },
    {
      id: "soin-visage",
      title: "Soin du visage",
      intro: "Protocoles ciblés selon l’état de peau.",
      items: [
        "Nettoyage profond / anti‑imperfections",
        "Hydratant / peau sensible",
        "Éclat / anti‑taches",
        "Microdermabrasion / peeling doux",
        "Microneedling",
        "Visage complet / zones ciblées (rides, pores, cicatrices d’acné)",
        "Cou & décolleté",
        "Protocoles en cure (3–6 séances)"
      ]
    },
    {
      id: "anti-age",
      title: "Soin anti‑âge",
      intro: "Lissage, fermeté et glow durable.",
      items: [
        "Fermeté / lissage rides",
        "Glow & revitalisation",
        "Contour des yeux",
        "Cou & décolleté"
      ]
    },
    {
      id: "massage",
      title: "Massage relaxant",
      intro: "Détente profonde et relâchement des tensions.",
      items: [
        "Relaxant global / dos‑nuque‑épaules",
        "Deep tissue",
        "Drainage lymphatique",
        "(Option) Pré‑natal selon disponibilité"
      ]
    }
    // 6e catégorie à confirmer (ex: Mains & Pieds). Nous l'ajouterons dès votre validation.
  ],
  faqs: [
    { q: "Laser vs Électrolyse — quelle différence ?", a: "Le laser traite rapidement de larges zones en ciblant la mélanine du poil ; l’électrolyse détruit le bulbe poil par poil, idéale pour les poils clairs ou résiduels." },
    { q: "Phototypes et contre‑indications ?", a: "Les technologies actuelles s’adaptent à la plupart des phototypes. Certaines affections cutanées, grossesse ou prise de médicaments photo‑sensibilisants nécessitent un avis préalable." },
    { q: "Délais entre séances ?", a: "Selon la zone et la méthode : toutes les 4–6 semaines pour le laser en moyenne ; l’électrolyse se planifie selon la repousse ciblée." }
  ]
};