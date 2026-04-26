export default function HowItWorksSection({ items }) {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2>ใช้งานง่ายใน 3 ขั้นตอน</h2>
        <div className="steps">
          {items.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
