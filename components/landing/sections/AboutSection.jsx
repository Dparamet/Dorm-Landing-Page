export default function AboutSection({ content }) {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <article className="panel fade-in">
          <p className="section-label">About</p>
          <h2>{content.about.title}</h2>
          <p>{content.about.description}</p>
        </article>
        <article className="panel panel-soft fade-in delay-1">
          <p className="section-label">Why this location works</p>
          <ul className="clean-list">
            {content.about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
