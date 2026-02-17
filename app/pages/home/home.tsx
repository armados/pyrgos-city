import type { Route } from "../../+types/root";

import { useTranslation } from "react-i18next";

import type { LoaderFunction } from "react-router";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";


export const loader: LoaderFunction = async () => null;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to home page!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto pb-10 overflow-x-hidden">

      <section className="relative h-[320px] w-full overflow-hidden rounded-b-[24px]">
        <img
          src={new URL(`./file1.jpg`, import.meta.url).href}
          alt="Pyrgos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30"></div>

        <div className="absolute bottom-6 left-5 right-5">
          <h1 className="text-white text-4xl font-extrabold tracking-tight">Κατάκολο</h1>
          <p className="text-blue-100 mt-1.5 text-sm font-medium">Καλωσήρθατε στο λιμάνι Κατακόλου.</p>
          <button className="mt-4 bg-[#7c5cff] text-white px-[18px] py-3 rounded-[14px] font-bold shadow-[0_10px_20px_-5px_rgba(124,92,255,0.4)] active:scale-95 transition-transform">
            Explore the city
          </button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="px-4 text-lg font-bold text-[#0b1b3a] mb-3 [text-shadow:1px_1px_5px_rgba(143,143,143,0.3)]">Αξιοθέατα</h2>
        <div className="flex overflow-x-auto gap-3 px-4 hide-scrollbar">
          <div className="min-w-[160px] bg-[#efefef] p-3 rounded-xl shadow-sm border border-black/5">
            <p className="font-bold text-[#0b1b3a]">Cyber Districts</p>
            <p className="text-gray-500 text-xs mt-1.5">Vibrant neon alleys</p>
          </div>
          <div className="min-w-[160px] bg-[#efefef] p-3 rounded-xl shadow-sm border border-black/5">
            <p className="font-bold text-[#0b1b3a]">High-Speed Rail</p>
            <p className="text-gray-500 text-xs mt-1.5">Across the skyline</p>
          </div>
          <div className="min-w-[160px] bg-[#efefef] p-3 rounded-xl shadow-sm border border-black/5">
            <p className="font-bold text-[#0b1b3a]">Zen Gardens</p>
            <p className="text-gray-500 text-xs mt-1.5">Quiet amidst chaos</p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="px-4 text-lg font-bold text-[#0b1b3a] mb-3">Explore by category</h2>
        <div className="flex overflow-x-auto gap-3 px-4 hide-scrollbar">
          <div className="relative min-w-[200px] h-[140px] rounded-[14px] overflow-hidden shadow-md shrink-0">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="bg-black/30 w-full p-2 backdrop-blur-sm">
                <span className="text-white font-extrabold text-sm">Fine Dining</span>
              </div>
            </div>
          </div>
          <div className="relative min-w-[200px] h-[140px] rounded-[14px] overflow-hidden shadow-md shrink-0">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="bg-black/30 w-full p-2 backdrop-blur-sm">
                <span className="text-white font-extrabold text-sm">Tech Hubs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 px-4">
        <h2 className="text-lg font-bold text-[#0b1b3a] mb-3">Map preview</h2>
        <div className="relative h-[140px] rounded-xl overflow-hidden cursor-pointer group">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center group-hover:bg-slate-900/40 transition-colors">
            <span className="text-white font-bold text-base">Open full map</span>
          </div>
        </div>
      </section>

      <section className="mt-6 px-4">
        <h2 className="text-lg font-extrabold text-[#0b1b3a] mb-3">Plan your day</h2>
        <div className="flex gap-3">
          <button className="flex-1 bg-[#2dd4bf] py-3.5 rounded-xl font-bold text-[#052e2d] active:opacity-80">
            Create itinerary
          </button>
          <button className="flex-1 bg-white border border-[#e6e9f2] py-3.5 rounded-xl font-bold text-[#0b1b3a] active:bg-gray-50">
            Nearby restaurants
          </button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="px-4 text-lg font-bold text-[#0b1b3a] mb-3">Explore by place</h2>
        <div className="flex overflow-x-auto gap-3 px-4 hide-scrollbar">
          <div className="flex min-w-[280px] bg-white p-2 rounded-[14px] shadow-sm border border-black/5 mb-1">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&auto=format&fit=crop" className="w-[110px] h-[110px] rounded-xl object-cover" />
            <div className="flex-1 px-3 py-1">
              <h3 className="font-extrabold text-[#1f4083] [text-shadow:1px_2px_1px_rgba(0,0,0,0.05)]">Akihabara Station</h3>
              <p className="text-gray-500 text-xs mt-1.5 leading-tight">World's busiest electronics district.</p>
            </div>
          </div>
          <div className="flex min-w-[280px] bg-white p-2 rounded-[14px] shadow-sm border border-black/5 mb-1">
            <img src="https://images.unsplash.com/photo-15420518418c7-a29e0f7455ad?w=200&auto=format&fit=crop" className="w-[110px] h-[110px] rounded-xl object-cover" />
            <div className="flex-1 px-3 py-1">
              <h3 className="font-extrabold text-[#1f4083] [text-shadow:1px_2px_1px_rgba(0,0,0,0.05)]">Shibuya Crossing</h3>
              <p className="text-gray-500 text-xs mt-1.5 leading-tight">The pulse of the neon city.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

