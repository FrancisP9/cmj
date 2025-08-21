import React from "react";
import { siteData } from "../mock";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { toast } from "sonner";
import { Check } from "lucide-react";

const Header = () => {
  return (
    <header className="header-glass">
      <div className="container-aesop flex items-center justify-between py-4">
        <a href="#top" className="text-xl font-normal brand-mark" style={{fontFamily:"Playfair Display"}}><span className="cmj">CMJ</span><span className="hcab">Health Care &amp; Beauty</span></a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="navigation-link" href="#apropos">À propos</a>
          <a className="navigation-link" href="#prestations">Prestations</a>
          <a className="navigation-link" href="#reserver">Réserver &amp; Contact</a>
          <a className="navigation-link" href="#faq">FAQ</a>
        </nav>
        <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect btn-rect--gold hidden sm:inline-flex">Réserver</Button>
      </div>
    </header>
  );
};

const Hero = () => {
  const { hero, brand, contact } = siteData;
  return (
    <section id="top" className="section">
      <div className="container-aesop grid-two hero-collage">
        <div className="space-y-6">
          <span className="gold-pill">Bruxelles Centre</span>
          <h1 className="text-4xl md:text-5xl leading-tight" style={{fontFamily:"Playfair Display"}}>{hero.title}</h1>
          <p className="text-lg md:text-xl text-[color:var(--text-secondary)]">{hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect btn-rect--gold">Réserver maintenant</Button>
            <a href="#prestations" className="btn-ghost">Voir les prestations</a>
          </div>
          <p className="meta pt-2">{brand.name} — {brand.city} | {"Soins esthétiques personnalisés, ambiance sereine."} | {brand.address} | {contact.hours_short}</p>
        </div>
        <div className="relative">
          <div className="photo-card" style={{height: "420px"}}>
            <img src={hero.collageMain} alt="Vue intérieure CMJ" />
          </div>
          <div className="photo-card photo-float" style={{height: "220px"}}>
            <img src={hero.collageFloat} alt="Façade CMJ" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryStrip = () => {
  return (
    <section className="gallery-strip">
      <div className="container-aesop">
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent>
            {siteData.gallery.map((src, idx) => (
              <CarouselItem key={idx} className="basis-2/3 md:basis-1/3">
                <div className="gallery-img h-[200px] md:h-[260px]">
                  <img src={src} alt={`Galerie ${idx+1}`} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { about } = siteData;
  return (
    <section id="apropos" className="section">
      <div className="container-aesop grid-two">
        <div className="space-y-6">
          <h2 className="text-3xl" style={{fontFamily:"Playfair Display"}}><span className="cmj">{about.title}</span></h2>
          <p className="text-[color:var(--text-secondary)] text-lg">{about.lead}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {about.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[color:var(--accent-gold)]"><Check size={16} /></span>
                <p className="text-sm text-[color:var(--text-secondary)]">{b}</p>
              </div>
            ))}
          </div>
          <div className="pt-2 flex gap-4">
            <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect btn-rect--gold">Réserver</Button>
            <a href="#prestations" className="btn-ghost">Voir les prestations</a>
          </div>
        </div>
        <div>
          <div className="photo-card" style={{height: "420px"}}>
            <img src={about.image} alt="À propos de CMJ — intérieur" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const openBooking = () => window.open(siteData.booking.fresha, "_blank");
  return (
    <section id="prestations" className="section bg-[color:var(--bg-secondary)]">
      <div className="container-aesop">
        <h2 className="text-3xl mb-8" style={{fontFamily:"Playfair Display"}}><span className="cmj">Prestations</span> clés</h2>
        <div className="services-grid">
          {siteData.services6.map((cat) => (
            <div key={cat.id} className="service-card">
              <div className="service-thumb" style={{ backgroundImage: `url(${cat.thumb})` }} />
              <div className="service-body">
                <h3 className="service-title">{cat.title}</h3>
                <ul className="list-disc pl-5 text-sm text-[color:var(--text-secondary)] space-y-1 mb-4">
                  {cat.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
                <Button onClick={openBooking} className="rounded-none btn-rect">Réserver</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingContact = () => {
  const { contact, booking } = siteData;
  const copy = async (text, label) => { try { await navigator.clipboard.writeText(text); toast(label + " copié"); } catch (e) { toast("Impossible de copier"); } };

  return (
    <section id="reserver" className="section">
      <div className="container-aesop grid-two">
        <div>
          <h2 className="text-3xl mb-6" style={{fontFamily:"Playfair Display"}}>Réservation &amp; Contact</h2>
          <p className="meta mb-6">Adresse : {contact.address || siteData.brand.address}. Horaires : {contact.hours_short}. Tél. {contact.phone_display} — {siteData.contact.email}</p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => window.open(booking.fresha, "_blank")} className="rounded-none btn-rect btn-rect--gold">Réserver (Fresha)</Button>
            {booking.treatwell ? (
              <Button onClick={() => window.open(booking.treatwell, "_blank")} variant="outline" className="rounded-none btn-rect">Réserver (Treatwell)</Button>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button disabled className="rounded-none btn-rect opacity-70">Treatwell (bientôt)</Button>
                  </TooltipTrigger>
                  <TooltipContent>Partagez le lien Treatwell pour l’activer</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <Button onClick={() => copy(siteData.contact.phone_tel, "Numéro")} variant="outline" className="rounded-none btn-rect">Copier tél.</Button>
            <Button onClick={() => copy(siteData.contact.email, "Email")} variant="outline" className="rounded-none btn-rect">Copier e‑mail</Button>
          </div>
          <div className="mt-6">
            <ul className="text-sm text-[color:var(--text-secondary)] space-y-2">
              {siteData.contact.hours_detail.map((h, idx) => (<li key={idx}>{h.day} — {h.hours}</li>))}
            </ul>
          </div>
        </div>
        <div>
          <div className="w-full h-[360px] overflow-hidden rounded-md border border-[color:var(--border-light)]">
            <iframe title="Carte CMJ" width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen src={`https://www.google.com/maps?q=${encodeURIComponent(siteData.contact.maps_q)}&output=embed`}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section id="faq" className="section-sm bg-[color:var(--bg-secondary)]">
    <div className="container-aesop">
      <h2 className="text-3xl mb-6" style={{fontFamily:"Playfair Display"}}>Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        {siteData.faqs.map((f, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-[color:var(--text-secondary)]">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const Footer = () => (
  <footer className="section-sm border-t border-[color:var(--border-light)]">
    <div className="container-aesop flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="small">© {new Date().getFullYear()} CMJ Health Care &amp; Beauty — Bruxelles</p>
        <p className="small">Rue du Pont Neuf 30, 1000 Bruxelles — T. {siteData.contact.phone_display}</p>
      </div>
      <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect btn-rect--gold">Réserver maintenant</Button>
    </div>
  </footer>
);

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <GalleryStrip />
      <AboutSection />
      <Services />
      <BookingContact />
      <FAQ />
      <Footer />
    </div>
  );
}