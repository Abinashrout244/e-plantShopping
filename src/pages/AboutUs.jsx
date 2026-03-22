import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fdf8ee_0%,#f4ead8_40%,#e8dcc7_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,55,42,0.14),transparent_50%),linear-gradient(300deg,rgba(178,132,70,0.2),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.6em] text-emerald-900/70">
          Curated Botanical Atelier
        </p>
        <h1 className="mb-6 text-4xl font-semibold text-emerald-950 md:text-6xl">
          Paradise Nursery
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-emerald-900/80 md:text-xl">
          We source rare and resilient houseplants for serene, elegant spaces. Every
          leaf is selected for longevity, balance, and a timeless sense of calm.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/products">
            <button className="rounded-full border border-amber-700/40 bg-amber-600/90 px-8 py-3 text-sm uppercase tracking-[0.3em] text-amber-50 shadow-[0_18px_45px_-20px_rgba(91,65,32,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-600">
              Explore Collection
            </button>
          </Link>
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-900/60">
            Since 2012
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;