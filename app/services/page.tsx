import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ServiciesPage() {
  const allServiciesDesign = [
    {
      id: 1,
      title: "Logo",
      description:
        "Diseño personalizado siguiendo la identidad de marca -paleta de colores, público al que está orientado tu producto- de tu empresa.",
      type: "Diseño",
    },
    {
      id: 2,
      title: "Logo Ilustrado",
      description:
        "Diseño personalizado que incluye una ilustración acompañado el nombre de tu empresa/emprendimiento.",
      type: "Diseño",
    },
    {
      id: 3,
      title: "Flyer",
      description:
        "Diseño con información de tu próximo evento/showroom, incluye información principal, fotografía y diseño gráfico general alineados a la identidad de marca, público y medio utilizado(instagram, facebook, impresión)",
      type: "Diseño",
    },
    {
      id: 4,
      title: "Logo de Historias destacadas",
      description:
        "Diseño personalizado según rubro/sección a destacar dentro del Instagram de tu empresa/emprendimiento acorde a la paleta e identidad de marca.",
      type: "Diseño",
    },
    {
      id: 5,
      title: "Paleta de Colores, Tipografía, Identidad de Marca",
      description:
        "Elección y recomendación acerca de la paleta de Colores utilizada para la estética de tu identidad de marca, así como el resto de elementos de diseño en relación al público, rubro del producto y medio utilizado(Instagram/Facebook/TikTok/Impresión).",
      type: "Diseño",
    },
  ];
  const allServiciesContent = [
    {
      id: 6,
      title: "4 Posts + 4 Historias",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "Creación de Contenido",
    },
    {
      id: 7,
      title: "8 Posts + 8 Historias",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "Creación de Contenido",
    },
    {
      id: 8,
      title: "16 Posts + 16 Historias",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "Creación de Contenido",
    },
  ];
  const allServiciesPublicidad = [
    {
      id: 9,
      title: "Anuncio Simple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "Publicidad",
    },
    {
      id: 10,
      title: "Anuncio Segmentado",
      description:
        "Según Zona/Rango de Edad/Intereses del consumidor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
      type: "Publicidad",
    },
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 text-zinc-400">
            Estos son algunos de los servicios que ofrecemos. 
			Para cada uno de ellos tenemos diferentes opciones que dependerán del tipo de producto a promocionar, el público al que este orientado y la plataforma utilizada.
			Buscamos recomendarte lo mejor para tu empresa ó emprendimiento, para que puedas aumentar tus ventas y lograr de tu producto su mejor versión!
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {allServiciesDesign.map((s) => (
              <Card key={s.id}>
                <Article service={s} views={0} />
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allServiciesContent.map((s) => (
              <Card key={s.id}>
                <Article service={s} views={0} />
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allServiciesPublicidad.map((s) => (
              <Card key={s.id}>
                <Article service={s} views={0} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
