function HeroImageSlot({ imageSlot }) {
  return (
    <div className="hero-card" aria-label="Product image suggestion">
      <div className="mock-screen">
        <div className="mock-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="mock-content" />
      </div>
      <p className="card-title">{imageSlot.title}</p>
      <p className="card-copy">วางรูปจริงที่ {imageSlot.path} เพื่อแสดงภาพหลักของสินค้าได้ทันที</p>
      <ul>
        {imageSlot.tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
      <p className="image-path">แนะนำ alt text: {imageSlot.alt}</p>
    </div>
  );
}

export default function HeroSection({ content }) {
  const { hero, stats, imageSlots } = content;

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.headline}</h1>
          <p className="subheadline">{hero.subheadline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#pricing">{hero.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#how-it-works">{hero.ctaSecondary}</a>
          </div>
          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroImageSlot imageSlot={imageSlots.hero} />
      </div>
    </section>
  );
}
