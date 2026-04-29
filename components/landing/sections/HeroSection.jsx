import Image from "next/image";

export default function HeroSection({ content }) {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy fade-in">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.headline}</h1>
          <p className="hero-subtitle">{content.hero.subheadline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={`tel:${content.site.phone}`}>{content.hero.primaryCta}</a>
            <a className="btn btn-secondary" href="#rooms">{content.hero.secondaryCta}</a>
          </div>
          <div className="hero-points" aria-label="Quick highlights">
            <span>From 2,000 THB/month</span>
            <span>Opposite RMUTI</span>
            <span>Free Wi-Fi</span>
          </div>
        </div>

        <div className="hero-visual fade-in delay-1">
          <div className="hero-photo-card">
            <Image
              src="/images/dorm/hero-main.jpg"
              alt="B&O Apartment exterior view"
              className="hero-photo"
              width={1200}
              height={820}
              priority
              sizes="(max-width: 820px) 100vw, 46vw"
            />
            <div className="hero-photo-badge">
              <strong>Affordable</strong>
              <span>Simple living near university</span>
            </div>
          </div>
          <div className="hero-mini-grid">
            <Image className="hero-mini-image" src="/images/dorm/room-01.webp" alt="Fan room sample" width={540} height={360} sizes="(max-width: 820px) 50vw, 22vw" />
            <Image className="hero-mini-image" src="/images/dorm/room-02.jpg" alt="Air room sample" width={540} height={360} sizes="(max-width: 820px) 50vw, 22vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
