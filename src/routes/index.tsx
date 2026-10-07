import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrintBuddy — AI-powered print & e-stamp kiosks" },
      { name: "description", content: "Prepare, e-stamp and print any document at PrintBuddy smart kiosks and partner outlets. Pricing from ₹3 to ₹10." },
      { property: "og:title", content: "PrintBuddy — Printing at your fingertips" },
      { property: "og:description", content: "AI-powered kiosks to prepare, e-stamp and print documents in minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const img = (p: string) => `/pb/${p}`;
const nav = [["About", "#about"], ["Solution", "#solution"], ["E-Stamp", "#estamp"], ["Opportunities", "#opportunities"], ["Franchise", "#franchise"]];
const services = [["Documents", "document"], ["Photos", "photo"], ["Certificates", "certificate"], ["Posters", "poster"], ["Forms", "form"], ["Business Cards", "bcards"]];
const estamp = [
  ["e1", "Document Templates", "Choose from range of affidavit templates for your e-Stamp document"],
  ["e2", "Instant Access", "Access e-stamping anytime, anywhere - fast, paperless, and easy."],
  ["e3", "Trusted & Verified", "Authorized e-Stamping with 100% legal compliance"],
  ["e4", "Secure Storage", "Your data stays safe and private with encrypted cloud storage."],
];
const kioskSteps = [
  ["i1", "Scan QR", "Find a Print Buddy kiosk and scan the QR code"],
  ["i2", "Upload", "Upload your documents online"],
  ["i3", "Set Print Preference", "Select document type, paper size, colour/B&W, and more"],
  ["i4", "Pay & Print", "Secure payment & Get your prints instantly"],
];
const shopSteps = [
  ["l1", "Upload", "Upload files on PrintBuddy app"],
  ["l2", "Select Partner Outlet", "Choose from verified nearby print shops"],
  ["l3", "Customize & Pay", "Choose document type, paper size, color, and pay online"],
  ["l4", "Pickup / Delivery", "Pick-up from the outlet, or get it delivered instantly"],
];
const privacy = [
  ["trash", "Auto Deletion", "Files deleted immediately after printing"],
  ["lock", "Encrypted Transfer", "End-to-end encryption for all uploads"],
  ["shield", "Secure Payment", "Protected transactions via trusted gateways"],
  ["eye", "No Storage", "We never store your documents permanently"],
];
const opps = [
  ["o1", "Self-Service Printing Kiosks", "Place kiosks in high-traffic areas and offer customers convenient 24/7 printing"],
  ["o2", "Printing Experience Centers", "Build a full-service outlet where customers can explore, design, and print with ease."],
  ["o3", "Become a Print Buddy Partner", "Convert your existing shop or start a franchise outlet to expand your customer base."],
  ["o4", "Buy or Lease Print Buddy Kiosks", "Choose a flexible plan to own or lease kiosks, with full support from Print Buddy."],
];
const partner = [
  ["shop.png", "If you have an existing shop", "Partner with Us"],
  ["small-kiosk.png", "If you want to start a franchise", "Start a Franchise"],
  ["pen.png", "If you want to get a kiosk", "Get a Kiosk"],
];

function Steps({ title, items, icon, image }: { title: string; items: string[][]; icon: string; image: string }) {
  return (
    <div className="grid items-center gap-10 rounded-3xl bg-surface p-8 md:grid-cols-2 md:p-12">
      <div>
        <h3 className="mb-6 text-2xl font-bold">{title}</h3>
        <ol className="space-y-5">
          {items.map(([i, t, d], n) => (
            <li key={t} className="flex gap-4">
              <img src={img(`kiosks/${i}.png`)} alt="" className="h-12 w-12 shrink-0" />
              <div><p className="font-semibold">{n + 1}. {t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
      <img src={img(image)} alt={icon} className="mx-auto max-h-80 object-contain" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src={img("layout/logo.png")} alt="PrintBuddy" className="h-10" />
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {nav.map(([l, h]) => <a key={l} href={h} className="hover:text-primary">{l}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Get in touch →</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-surface">
          <img src={img("hero/pattern.png")} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6 pt-20 text-center">
            <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl">Print<span className="text-primary">Buddy</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">AI-powered kiosks that help you prepare, e-stamp, and print any document — whether you're a student, traveler, tenant, or business owner.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#franchise" className="rounded-full bg-navy px-6 py-3 font-semibold text-primary-foreground">Become a franchise partner</a>
              <a href="#estamp" className="rounded-full border-2 border-navy px-6 py-3 font-semibold">Legal with PrintBuddy</a>
            </div>
            <img src={img("hero/banner.png")} alt="PrintBuddy kiosks" className="mx-auto mt-12 hidden w-full max-w-5xl md:block" />
            <img src={img("hero/mobile-banner.png")} alt="PrintBuddy kiosks" className="mx-auto mt-10 w-full md:hidden" />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img src={img("bg.jpeg")} alt="PrintBuddy kiosk in use" className="w-full rounded-3xl object-cover" />
            <div>
              <h2 className="text-4xl font-bold">What is PrintBuddy?</h2>
              <p className="mt-4 text-lg text-muted-foreground">From campus to court, from passport photos to legal agreements, everything in minutes.</p>
              <p className="mt-2 font-semibold text-primary">Our pricing ranges from ₹3 to ₹10</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {services.map(([t, i]) => (
                  <div key={t} className="rounded-2xl border bg-background p-4 text-center">
                    <img src={img(`wwp/${i}.png`)} alt="" className="mx-auto h-10" />
                    <p className="mt-2 text-sm font-semibold">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="estamp" className="bg-navy py-24 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-bold">Legal & e-Stamping with PrintBuddy</h2>
            <p className="mt-4 max-w-3xl text-lavender">From printing to paperwork, PrintBuddy brings legal and document services to your fingertips. Get Rental Agreement, Affidavit, NDA, Sale Deed online — without queues, lawyers, or confusion.</p>
            <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
              <img src={img("estamp/estamp.png")} alt="e-Stamp" className="mx-auto max-h-96" />
              <div className="grid gap-6 sm:grid-cols-2">
                {estamp.map(([i, t, d]) => (
                  <div key={t} className="rounded-2xl bg-primary-foreground/10 p-6">
                    <img src={img(`estamp/${i}.png`)} alt="" className="h-10" />
                    <h3 className="mt-4 font-semibold">{t}</h3>
                    <p className="mt-1 text-sm text-lavender">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto max-w-7xl space-y-10 px-6 py-24">
          <h2 className="text-center text-4xl font-bold">How does it work?</h2>
          <div>
            <h3 className="text-2xl font-bold text-primary">Smart Kiosks</h3>
            <p className="mb-6 mt-2 max-w-3xl text-muted-foreground">Simply scan the QR and upload your documents to print. PrintBuddy self-serve 24x7 kiosks — 750+ institutes, government offices, and beyond.</p>
            <Steps title="Kiosks" items={kioskSteps} icon="Mobile devices" image="revolution/mobiles.png" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">PrintBuddy Partner Outlets</h3>
            <p className="mb-6 mt-2 max-w-3xl text-muted-foreground">Upload files on PrintBuddy app and pick a PB-verified partner outlet near you. Pick your prints, or get them delivered in minutes.</p>
            <Steps title="Local Shop Delivery" items={shopSteps} icon="Delivery" image="revolution/bike.png" />
          </div>
          <div className="grid items-center gap-10 rounded-3xl border p-8 md:grid-cols-2">
            <img src={img("kiosks/map.png")} alt="Kiosk locations map" className="w-full" />
            <div>
              <h3 className="text-3xl font-extrabold">KIOSK NEAR YOU</h3>
              <p className="mt-3 text-muted-foreground">Printing, at your fingertips. Smart. Secure. Quick.</p>
              <div className="mt-6 flex items-center gap-6">
                <img src={img("ideabaaz/i-logo.png")} alt="Ideabaaz" className="h-10" />
                <img src={img("ideabaaz/zee.png")} alt="ZTV" className="h-10" />
                <img src={img("ideabaaz/kagpatra.png")} alt="Kagpatra" className="h-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">Your Privacy, Our Priority</h2>
              <p className="mt-4 text-muted-foreground">We understand the importance of document security. That's why we've built privacy into every step.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {privacy.map(([i, t, d]) => (
                  <div key={t} className="flex gap-3">
                    <img src={img(`privacy/${i}.png`)} alt="" className="h-10 w-10 shrink-0" />
                    <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <img src={img("privacy/privacy.png")} alt="Privacy illustration" className="mx-auto max-h-96" />
          </div>
        </section>

        <section id="franchise" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl font-bold">Become a Franchise Partner with Print Buddy</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">Become a PrintBuddy franchise partner and unlock new growth opportunities. Deliver 24/7 printing convenience while managing your business easily with our partner dashboard.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partner.map(([i, t, c]) => (
              <div key={t} className="rounded-3xl bg-navy p-8 text-primary-foreground">
                <img src={img(i)} alt="" className="h-16" />
                <h3 className="mt-6 text-lg font-semibold">{t}</h3>
                <a href="#contact" className="mt-4 inline-block font-semibold text-accent">{c} →</a>
              </div>
            ))}
          </div>
        </section>

        <section id="opportunities" className="bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-bold">Opportunities with Print Buddy</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">Discover four proven paths with Print Buddy, crafted to drive your success and expand your printing business.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {opps.map(([i, t, d]) => (
                <div key={t} className="rounded-2xl bg-background p-6 shadow-sm">
                  <img src={img(`opportunity/${i}.png`)} alt="" className="h-12" />
                  <h3 className="mt-4 font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <img src={img("salseforce-contact.jpeg")} alt="Request a demo" className="w-full rounded-3xl object-cover" />
          <div>
            <h2 className="text-4xl font-bold">Request a Demo</h2>
            <p className="mt-4 text-muted-foreground">Schedule a short demo to see how PrintBuddy installs automated, self-serve kiosks that enable secure, cashless printing, and discover the advantages for your institution.</p>
            <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <input required placeholder="Full name" className="rounded-xl border px-4 py-3" />
              <input required type="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
              <input placeholder="Institution / Company" className="rounded-xl border px-4 py-3" />
              <button className="rounded-full bg-primary py-3 font-semibold text-primary-foreground">Request a Demo</button>
              <p className="text-sm text-muted-foreground">Fill in the details and we'll get back to you shortly.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-12 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6">
          <img src={img("white-logo.png")} alt="PrintBuddy" className="h-10" />
          <nav className="flex flex-wrap gap-6 text-sm text-lavender">
            {nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
          </nav>
          <p className="text-sm text-lavender">© 2026 PrintBuddy · Terms of Service · Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
