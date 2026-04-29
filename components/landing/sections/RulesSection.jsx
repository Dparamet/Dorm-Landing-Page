export default function RulesSection({ rules }) {
  return (
    <section className="section" id="rules">
      <div className="container">
        <div className="section-head fade-in">
          <p className="section-label warning">Rules</p>
          <h2>Important rules to know before moving in</h2>
        </div>

        <div className="rules-grid">
          {rules.map((rule, index) => (
            <article className={`rule-card fade-in delay-${index + 1}`} key={rule}>
              <span aria-hidden="true">!</span>
              <p>{rule}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
