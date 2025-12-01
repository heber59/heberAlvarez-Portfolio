"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import type { SectionKey } from "@/components/Tabs";

interface PageViewProps {
  current: SectionKey;
}

export function PageView({ current }: PageViewProps) {
  const { lang } = useLanguage();
  const c = copy[lang].sections;

  // En la carpeta abierta nunca usamos "cover", pero por seguridad:
  const section = current === "cover" ? "about" : current;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${section}-${lang}`}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
          className="h-full w-full"
        >
          {/* Dos columnas = dos hojas */}
          <div className="grid h-full grid-cols-2 gap-10">
            {/* Hoja izquierda */}
            <div className="flex flex-col justify-center gap-4 pr-4">
              {section === "about" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.about.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.about.body}
                  </p>
                </>
              )}

              {section === "projects" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.projects.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.projects.body}
                  </p>
                  {/* luego aquí metemos un pequeño resumen o highlight */}
                </>
              )}

              {section === "skills" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.skills.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.skills.body}
                  </p>
                </>
              )}

              {section === "contact" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.contact.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.contact.body}
                  </p>
                </>
              )}
            </div>

            {/* Hoja derecha */}
            <div className="flex flex-col justify-center gap-4 pl-4">
              {section === "about" && (
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  {/* aquí luego podemos poner cosas tipo “currently”, “focus”, etc.
                     Por ahora reutilizamos el body como placeholder */}
                  {c.about.body}
                </p>
              )}

              {section === "projects" && (
                <>
                  {/* placeholder para futuras cards de proyectos */}
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    Aquí irán las tarjetas de proyectos, con links, stacks y una
                    vista rápida de cada trabajo.
                  </p>
                </>
              )}

              {section === "skills" && (
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  Aquí podemos listar skills por categorías (Frontend, Tools,
                  Soft Skills, etc.) en formato más visual.
                </p>
              )}

              {section === "contact" && (
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  Aquí podemos poner email, links a LinkedIn, GitHub y un
                  pequeño “call to action” para que te contacten.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
