import React from "react";
import { siteData } from "../mock";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { toast } from "sonner";

const Header = () => {
  return (
    <header className="header-glass">
      <div className="container-aesop flex items-center justify-between py-4">
        <a href="#top" className="text-xl font-normal" style={{fontFamily:"Playfair Display"}}>CMJ Health Care &amp; Beauty</a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="navigation-link" href="#prestations">Prestations</a>
          <a className="navigation-link" href="#reserver">Réserver &amp; Contact</a>
          <a className="navigation-link" href="#faq">FAQ</a>
        </nav>
        <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect hidden sm:inline-flex">Réserver</Button>
      </div>
    </header>
  );
};

const Hero = () => {
  const { hero, brand, contact } = siteData;
  return (
    <section id="top" className="section">
      <div className="container-aesop grid-two">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl leading-tight" style={{fontFamily:"Playfair Display"}}>{hero.title}</h1>
          <p className="text-lg md:text-xl text-[color:var(--text-secondary)]">{hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect">Réserver maintenant</Button>
            <a href="#prestations" className="btn-ghost">Voir les prestations</a>
          </div>
          <p className="meta pt-4">{brand.name} — {brand.city} | {"Soins esthétiques personnalisés, ambiance sereine."} | {brand.address} | {contact.hours_short}</p>
        </div>
        <div className="relative">
          {hero.image && (
            <img src={hero.image} alt="Intérieur CMJ" className="w-full h-[420px] object-cover rounded-md shadow-sm" />
          )}
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
        <h2 className="text-3xl mb-10" style={{fontFamily:"Playfair Display"}}>Prestations clés</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((s) => (
            <Card key={s.id} className="card-minimal p-0">
              <CardHeader className="pb-2">
                <CardTitle className="font-normal text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[color:var(--text-secondary)]">
                <p className="mb-4">{s.desc}</p>
                <Button onClick={openBooking} className="rounded-none btn-rect w-full">{s.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <a href="#reserver" className="btn-ghost">Voir toutes les prestations</a>
        </div>
      </div>
    </section>
  );
};

const BookingContact = () => {
  const { contact, booking } = siteData;

  const copy = async (text, label) => {
    try { await navigator.clipboard.writeText(text); toast({ title: `${label} copié` }); } catch (e) { toast({ title: "Impossible de copier" }); }
  };

  return (
    <section id="reserver" className="section">
      <div className="container-aesop grid-two">
        <div>
          <h2 className="text-3xl mb-6" style={{fontFamily:"Playfair Display"}}>Réservation &amp; Contact</h2>
          <p className="meta mb-6">Adresse : {contact.address || siteData.brand.address}. Horaires : {contact.hours_short}. Tél. {contact.phone_display} — {siteData.contact.email}</p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => window.open(booking.fresha, "_blank")} className="rounded-none btn-rect">Réserver (Fresha)</Button>
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
              {siteData.contact.hours_detail.map((h, idx) => (
                <li key={idx}>{h.day} — {h.hours}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="w-full h-[360px] overflow-hidden rounded-md border border-[color:var(--border-light)]">
            <iframe title="Carte CMJ" width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteData.contact.maps_q)}&output=embed`}>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
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
};

const Footer = () => {
  return (
    <footer className="section-sm border-t border-[color:var(--border-light)]">
      <div className="container-aesop flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="small">© {new Date().getFullYear()} CMJ Health Care &amp; Beauty — Bruxelles</p>
          <p className="small">Rue du Pont Neuf 30, 1000 Bruxelles — T. {siteData.contact.phone_display}</p>
        </div>
        <Button onClick={() => window.open(siteData.booking.fresha, "_blank")} className="rounded-none btn-rect">Réserver maintenant</Button>
      </div>
    </footer>
  );
};

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <BookingContact />
      <FAQ />
      <Footer />
      <Toaster richColors />
    </div>
  );
}