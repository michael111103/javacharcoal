"use client";

import { useLanguage } from "@/lib/LanguageContext";
import {
  CoconutIcon,
  MillIcon,
  BowlIcon,
  PressIcon,
  KilnIcon,
  ScanIcon,
  BoxIcon,
  ShipIcon,
} from "@/components/Icons";

const icons = [CoconutIcon, MillIcon, BowlIcon, PressIcon, KilnIcon, ScanIcon, BoxIcon, ShipIcon];

const images = [
  "raw.jpg",
  "mixing.jpg",
  "blending.jpg",
  "forming.jpg",
  "drying.jpg",
  "qc.jpg",
  "packaging.jpg",
  "distribution.jpg",
];

export default function ProductionProcess() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-6">
        <span className="block text-center text-xs font-bold uppercase tracking-[0.2em] text-ember-light">
          {t.production.tag}
        </span>
        <h2 className="mb-9 mt-2 text-center text-3xl font-extrabold">{t.production.title}</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {t.production.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.title} className="text-center">
                <div className="mb-3 aspect-square overflow-hidden rounded-xl border border-line bg-card">
                  <img src={`/images/${images[i]}`} alt={s.title} className="h-full w-full object-cover" />
                </div>
                <Icon className="mx-auto mb-2 h-7 w-7 text-ember" />
                <h4 className="mb-1 text-sm font-bold">{s.title}</h4>
                <p className="text-xs text-muted">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

