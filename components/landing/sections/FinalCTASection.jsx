export default function FinalCTASection({ content }) {
  return (
    <section className="section final-cta" id="final-cta">
      <div className="container">
        <h2>{content.headline}</h2>
        <p>{content.text}</p>
        <div className="cta-row center">
          <a className="btn btn-primary" href="#home">{content.primary}</a>
          <a className="btn btn-ghost" href="#social-proof">{content.secondary}</a>
        </div>
        <small>CTA Suggestions: {content.suggestions.join(", ")}</small>
      </div>
    </section>
  );
}
