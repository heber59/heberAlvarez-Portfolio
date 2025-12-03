"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

type Project = {
  id: string;
  title: string;
  role: string;
  short: string;
  description: string;
  stack: readonly string[];
  image: string;
  link?: string;
  demoUrl?: string;
};

export function Projects({ secondPage }: { secondPage?: boolean }) {
  const { lang } = useLanguage();
  const cProjects = copy[lang].sections.projects;
  const projects = cProjects.items;

  const firstPageProjects = projects.slice(0, 2);
  const secondPageProjects = projects.slice(2);
  const visibleProjects = secondPage ? secondPageProjects : firstPageProjects;

  const [activeProject, setActiveProject] = useState<Project | undefined>(
    undefined
  );
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <div
        className={[
          "flex h-full flex-col",
          secondPage ? "gap-4 lg:gap-6 pl-4" : "gap-4 pr-4",
        ].join(" ")}
      >
        {!secondPage && (
          <div className="flex flex-col gap-2">
            <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              {cProjects.eyebrowMain}
            </p>

            <h2 className="font-manrope text-2xl md:text-3xl font-semibold text-slate-900">
              {cProjects.title}
            </h2>
          </div>
        )}

        <div className="grid">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => {
                setActiveProject(project);
                setShowDemo(false);
              }}
              className="group h-[80%] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col gap-1 px-4 py-3">
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {project.role}
                </p>

                <h3 className="font-manrope text-sm font-semibold text-slate-900">
                  {project.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.stack.length > 3 && (
                    <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 px-4">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
              <div>
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {activeProject.role}
                </p>

                <h3 className="mt-1 font-manrope text-lg  font-semibold text-slate-900">
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {activeProject.demoUrl && (
                  <button
                    type="button"
                    onClick={() => setShowDemo(true)}
                    className="h-10 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-blue-300"
                  >
                    {lang === "es" ? "Ver demo" : "View demo"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(undefined);
                    setShowDemo(false);
                  }}
                  className="h-10 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-500 hover:bg-red-200"
                >
                  {lang === "es" ? "Cerrar" : "Close"}
                </button>
              </div>
            </div>

            <div className="grid gap-4 px-6 pb-5 pt-4 md:grid-cols-[1.4fr_1fr] md:gap-6">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  {activeProject.description}
                </p>
                <div>
                  <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {lang === "es" ? "Stack" : "Tech stack"}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.link && (
                  <div>
                    <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {cProjects.labelLink}
                    </p>

                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {cProjects.labelViewProject}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showDemo && activeProject?.demoUrl && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/90">
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <p className="text-xs md:text-sm font-manrope font-medium text-slate-100">
              {activeProject.title} ·{" "}
              {lang === "es" ? "Demo interactiva" : "Live demo"}
            </p>

            <button
              type="button"
              onClick={() => setShowDemo(false)}
              className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs md:text-sm font-medium text-slate-100 hover:bg-slate-700"
            >
              {lang === "es" ? "Cerrar demo" : "Close demo"}
            </button>
          </div>

          <div className="flex-1">
            <iframe
              src={activeProject.demoUrl}
              className="h-full w-full border-none"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
