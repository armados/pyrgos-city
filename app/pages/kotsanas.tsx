import type { Route } from "../+types/root";
import { useTranslation } from "react-i18next";

import Heading2 from "~/components/Heading2";
import Par from "~/components/Par";
import KioskPage from "~/components/KioskPage";
import LazyImage from "~/components/LazyImage";
import ActionButton from "~/components/ActionButton";

export function meta({ }: Route.MetaArgs) {
  return [];
}

export default function TestPage2() {
  const { t } = useTranslation();

  const photos = [
    "/images/file1.jpg",
    "/images/file2.jpg",
    "/images/file3.jpg",
  ];

  return (
    <KioskPage title={"Kotsanas Museum"} className=" pb-16">

{/* COMPACT HERO HEADER */}
<div className="relative w-full h-[150px] md:h-[180px] overflow-hidden  mb-8">

  {/* Background Image */}
  <img
    src="/images/image1.jpg"
    className="w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r   from-[#326599] from-0% 
  via-[#326599]/70 via-60% 
  to-transparent to-90% to-transparent" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center px-6 md:px-8">
    
    <div className="max-w-2xl">

      {/* Optional Tag */}
      <div className="inline-block bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-full mb-2">
        Museum • Katakolo
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
        Kotsanas Museum
      </h1>

      {/* Subtitle */}
      <p className="text-white/85 text-sm md:text-base mt-1">
        Ancient Greek Technology & Innovation
      </p>

    </div>
  </div>
</div>
      {/* 2 COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT - MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-8">

          {/* ABOUT */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <Heading2>About the Museum</Heading2>

            <Par className="text-lg leading-relaxed mt-4">
              The Kotsanas Museum presents one of the most fascinating aspects of Ancient Greek civilization:
              technology. While Greece is widely known for philosophy and the arts, its technological
              achievements remain less explored.
            </Par>

            <Par className="text-lg leading-relaxed mt-4">
              The exhibition includes more than 300 fully functional models of ancient inventions,
              from automated mechanisms and early robotics to complex astronomical devices like
              the Antikythera mechanism.
            </Par>

            <Par className="text-lg leading-relaxed mt-4">
              All exhibits were reconstructed by Kostas Kotsanas after decades of research,
              offering visitors a unique, hands-on understanding of ancient innovation.
            </Par>

            <Par className="text-lg leading-relaxed mt-4">
              Visitors can interact with working models, explore ancient engineering principles,
              and discover how these inventions influenced modern technology.
            </Par>

            <Par className="text-lg leading-relaxed mt-4">
              The museum is designed for all ages, making it an ideal stop for families, students,
              and travelers interested in history, science, and innovation.
            </Par>
          </div>

{/* QUICK INFO */}
<div className="bg-white rounded-2xl shadow-md p-6">
  <Heading2>Visitor Info</Heading2>

  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">

    {/* Location */}
    <div>
      <p className="font-semibold text-gray-600">Location</p>
      <p className="mt-1">Katakolo, Pyrgos, Greece</p>
    </div>

    {/* Opening Hours */}
    <div>
      <p className="font-semibold text-gray-600">Opening Hours</p>
      <p className="mt-1">Daily: 09:00 – 18:00</p>
    </div>

    {/* Highlights (full width for better readability) */}
    <div className="sm:col-span-2">
      <p className="font-semibold text-gray-600">Highlights</p>
      <ul className="list-disc ml-5 mt-2 space-y-1">
        <li>Ancient robotics</li>
        <li>Antikythera mechanism</li>
        <li>Interactive exhibits</li>
      </ul>
    </div>

  </div>
</div>

        </div>

        {/* RIGHT - SIDEBAR */}
        <div className="space-y-8">

          {/* GALLERY */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <Heading2>Photo Gallery</Heading2>

            <div className="grid grid-cols-2 gap-4 mt-5">
              {photos.map((photo) => (
                <div
                  key={photo}
                  className="rounded-xl overflow-hidden shadow-sm "
                >
                  <LazyImage
                    src={photo}
                    fullscreen
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA PANEL */}
          <div className="bg-cyan-700 text-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold">
              Plan Your Visit
            </h3>

            <p className="mt-2 text-white/90">
              Discover one of the most unique museums in Greece during your stay in Katakolo.
            </p>

            <ActionButton className="mt-4 w-full bg-white text-cyan-700 font-semibold py-3 rounded-xl ">
              Get Directions
            </ActionButton>
          </div>

        </div>
      </div>

    </KioskPage>
  );
}