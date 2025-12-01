"use client";

import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Tabs, type SectionKey } from "@/components/Tabs";
import { PageView } from "@/components/PageView";

export function Folder() {
  const [currentSection, setCurrentSection] = useState<SectionKey>("cover");

  const isCover = currentSection === "cover";

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      {/* Carpeta amarilla (ancho dinámico) */}
      <div
        className={`relative h-[85vh] rounded-[1.75rem] border border-amber-400 bg-amber-300 shadow-[0_32px_90px_rgba(15,23,42,0.28)] overflow-hidden transition-[width] duration-500 ease-in-out
        ${isCover ? "w-[min(90vw,560px)]" : "w-[min(90vw,1040px)]"}`}
      >
        {/* PORTADA (carpeta cerrada) */}
        {isCover && (
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-10 flex w-full items-start justify-between px-8">
              <div className="flex flex-col gap-1">
                <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-900/70">
                  Frontend portfolio
                </span>
                <span className="font-manrope text-sm md:text-base font-semibold text-amber-950">
                  Proyecto Heber Álvarez
                </span>
              </div>
              <LanguageSwitcher />
            </div>

            <h1 className="font-manrope text-3xl md:text-4xl font-semibold text-amber-950">
              Heber Álvarez
            </h1>
            <p className="mt-3 max-w-md font-inter text-sm md:text-base text-amber-950/80">
              Frontend developer — this folder is your access to my work,
              projects and experience.
            </p>
          </div>
        )}

        {/* ABIERTA (cualquier sección distinta a cover) */}
        {!isCover && (
          <div className="absolute inset-0 px-10 pt-12 pb-10">
            {/* Hoja blanca que ocupa las dos caras */}
            <div className="relative h-full rounded-2xl bg-white shadow-[0_22px_70px_rgba(15,23,42,0.25)]">
              {/* Header dentro de la hoja */}
              <div className="flex items-start justify-between px-10 pt-7 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                    Frontend portfolio
                  </span>
                  <span className="font-manrope text-sm md:text-base font-semibold text-slate-900">
                    Proyecto Heber Álvarez
                  </span>
                </div>
                <LanguageSwitcher />
              </div>

              {/* Línea/sombra central para simular dos páginas */}
              <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-slate-200 shadow-[0_0_24px_rgba(15,23,42,0.35)] opacity-70" />

              {/* Contenido de la sección ocupando las dos caras */}
              <div className="h-[calc(100%-72px)] px-10 pb-8 pt-2">
                <PageView current={currentSection} />
              </div>
            </div>
          </div>
        )}

        {/* Tabs laterales de colores que se asoman a la derecha */}
        <div className="absolute inset-y-24 -right-10 flex flex-col items-start justify-center gap-2">
          <Tabs current={currentSection} onChange={setCurrentSection} />
        </div>
      </div>
    </div>
  );
}
