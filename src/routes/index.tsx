import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import sprinter from "@/assets/sprinter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Your Name — Personal Page" },
    { name: "description", content: "A personal introduction. A little about me, what inspires me, and a way to say hello." },
    { property: "og:title", content: "Your Name — Personal Page" },
    { property: "og:description", content: "A little about me, what inspires me, and a way to say hello." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <main className="personal-page">
      <header className="page-header">
        <span className="wordmark">Your Name</span>
        <span className="page-edition">Personal page · 2026</span>
      </header>
      <section className="personal-hero" aria-label="Introduction">
        <div className="diagonal" aria-hidden="true" />
        <div className="introduction">
          <p className="eyebrow">A little about me</p>
          <h1 className="personal-title"><span>Your</span><span className="surname">Name</span></h1>
          <p className="personal-bio">Curious by nature. Always moving forward. This is my little corner of the internet — a place for new ideas and good connections.</p>
          <Button asChild variant="kinetic" size="kinetic">
            <a href="mailto:hello@example.com"><span>Contact me</span><span className="contact-arrow" aria-hidden="true">→</span></a>
          </Button>
        </div>
        <div className="portrait-area">
          <figure className="portrait"><img src={sprinter} alt="Black-and-white editorial photograph of a sprinter in motion" width={1024} height={1280} fetchPriority="high" /></figure>
        </div>
      </section>
      <footer className="page-footer"><span>© 2026 Your Name</span><span className="footer-note">Keep moving forward</span></footer>
    </main>
  );
}
