export default function SocialProofSection({ testimonials }) {
  return (
    <section className="section" id="social-proof">
      <div className="container">
        <h2>เสียงจากผู้ใช้งานจริง</h2>
        <div className="testimonials">
          {testimonials.map((item) => (
            <article className="quote" key={item.name}>
              <p>"{item.text}"</p>
              <span>{item.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
