"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { FlaskIcon, ClipboardCheckIcon, DocumentIcon, DropletIcon } from "@/components/Icons";

const icons = [FlaskIcon, ClipboardCheckIcon, DocumentIcon, DropletIcon];

export default function QualityProof() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line py-14">
      <div className="mx-auto max-w-6xl px-6">
        <span className="block text-center text-xs font-bold uppercase tracking-[0.2em] text-ember-light">
          {t.quality.tag}
        </span>
        <h2 className="mb-9 mt-2 text-center text-3xl font-extrabold">{t.quality.title}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {t.quality.points.map((p, i) => {
            const Icon = icons[i];
            return (
              <div key={p.title} className="rounded-xl border border-line bg-card p-5 text-center">
                <Icon className="mx-auto mb-3 h-9 w-9 text-ember" />
                <h3 className="mb-1 text-sm font-bold">{p.title}</h3>
                <p className="text-xs text-muted">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
