"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { WhatsAppIcon, InstagramIcon, MailIcon, PinIcon } from "@/components/Icons";

const WHATSAPP_CONTACT_NUMBER = "6285846466029";
const INSTAGRAM_URL = "https://instagram.com/javacharcoal.id";
const EMAIL = "business@javacharcoal.com";
const MAPS_URL = "https://maps.app.goo.gl/9H3DhGR7zhbMvvFeA?g_st=ic";
const ADDRESS =
  "Treasury Tower, Jl. Jend. Sudirman kav 52-53 No.Lot 29 Level 6, RT.5/RW.3, SCBD, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/#products", label: t.nav.products },
    { href: "/#certifications", label: t.nav.documents },
    { href: "/#faq", label: t.nav.faq },
    { href: "/blog", label: t.nav.blog },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line pt-14 text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 sm:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 font-extrabold text-ink">
            <img src="/images/logo.png" alt="Java Charcoal logo" className="h-7 w-7 object-contain" />
            JAVA CHARCOAL
          </div>
          <p className="mb-5">{t.footer.tagline}</p>
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-ember-light">
            {t.footer.headOfficeLabel}
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-start gap-2 hover:text-ink"
          >
            <PinIcon className="mt-0.5 h-4 w-4 flex-none text-ember" />
            <span>{ADDRESS}</span>
          </a>
        </div>

        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ember-light">
            {t.footer.navTitle}
          </div>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ember-light">
            {t.footer.contactTitle}
          </div>
          <ul className="space-y-3">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_CONTACT_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ink"
              >
                <WhatsAppIcon className="h-4 w-4 flex-none text-ember" />
                +62 858-4646-6029
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4 flex-none text-ember" />
                @javacharcoal.id
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-ink">
                <MailIcon className="h-4 w-4 flex-none text-ember" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 PT Bara Karbon Internasional. All Rights Reserved.</span>
          <span>{t.footer.bottomTagline}</span>
        </div>
      </div>
    </footer>
  );
}
